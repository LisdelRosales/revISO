// API base URL - change this to your backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Get auth token from localStorage
function getAuthToken(): string | null {
  return localStorage.getItem('auth_token');
}

// Set auth token in localStorage
export function setAuthToken(token: string): void {
  localStorage.setItem('auth_token', token);
}

// Remove auth token from localStorage
export function removeAuthToken(): void {
  localStorage.removeItem('auth_token');
}

// API request wrapper with auth headers
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Unauthorized - clear token and redirect to login
      removeAuthToken();
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }
    const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// API methods
export const api = {
  // Auth
  async login(email: string, password: string) {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Invalid credentials' }));
      throw new Error(error.detail || 'Invalid credentials');
    }

    const data = await response.json();
    if (data.access_token) {
      setAuthToken(data.access_token);
    }
    return data;
  },

  logout() {
    removeAuthToken();
  },

  async getCurrentUser() {
    return apiRequest('/auth/me');
  },

  // Admin endpoints
  async createCompany(companyData: {
    name: string;
    taxId: string; // CIF/NIF - Identificador fiscal
    email: string; // Email de contacto principal
    phone: string; // Teléfono de contacto principal
    client_email: string; // Email del usuario cliente a crear
  }) {
    return apiRequest('/admin/companies', {
      method: 'POST',
      body: JSON.stringify(companyData),
    });
  },

  async getCompanies() {
    return apiRequest('/admin/companies');
  },

  async getCompanyChecklist(companyId: number) {
    return apiRequest(`/admin/companies/${companyId}/checklist`);
  },

  async updateSubmission(submissionId: number, data: {
    status?: string;
    admin_notes?: string;
  }) {
    return apiRequest(`/admin/submissions/${submissionId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  // Client endpoints
  async getClientInfo() {
    return apiRequest('/client/me');
  },

  async getClientChecklist() {
    return apiRequest('/client/checklist');
  },

  async uploadEvidence(submissionId: number, file: File, description?: string) {
    const token = getAuthToken();
    const formData = new FormData();
    formData.append('file', file);
    if (description) {
      formData.append('description', description);
    }

    const response = await fetch(`${API_BASE_URL}/client/submissions/${submissionId}/evidence`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Upload failed' }));
      throw new Error(error.detail || 'Upload failed');
    }

    return response.json();
  },
};

