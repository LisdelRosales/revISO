// Mock data para desarrollo frontend
import { RequirementStatus } from "./iso9001Data";

export type CertificationType = "ISO 9001:2018" | "ISO 14001:2015" | "ISO 27001:2022";

export const availableCertifications: { value: CertificationType; label: string; description: string }[] = [
  { value: "ISO 9001:2018", label: "ISO 9001:2018", description: "Sistema de Gestión de Calidad" },
  { value: "ISO 14001:2015", label: "ISO 14001:2015", description: "Sistema de Gestión Ambiental" },
  { value: "ISO 27001:2022", label: "ISO 27001:2022", description: "Sistema de Gestión de Seguridad de la Información" }
];

export interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "company";
  name: string;
  companyId?: string;
}

export interface CompanyCertification {
  id: string;
  companyId: string;
  certification: CertificationType;
  progress: number;
  assignedAt: string;
}

export interface Company {
  id: string;
  name: string; // Nombre de la empresa
  taxId: string; // CIF/NIF (España) - Identificador fiscal universal
  email: string; // Email de contacto principal
  phone: string; // Teléfono de contacto principal
  certifications: CertificationType[];
  createdAt: string; // Fecha de creación en formato ISO
}

export interface Evidence {
  id: string;
  companyId: string;
  certificationId: string;
  requirementId: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  uploadedBy: string;
  description: string;
}

export interface RequirementProgress {
  id: string;
  companyId: string;
  requirementId: string;
  status: RequirementStatus;
  notes: string;
  lastUpdated: string;
}

export interface Comment {
  id: string;
  companyId: string;
  requirementId: string;
  authorId: string;
  authorName: string;
  authorRole: "admin" | "company";
  content: string;
  createdAt: string;
}

// Usuarios de ejemplo
export const mockUsers: User[] = [
  {
    id: "admin-1",
    email: "consultor@reviso.com",
    password: "admin123",
    role: "admin",
    name: "Andrés Reyes"
  },
  {
    id: "company-1",
    email: "empresa1@email.com",
    password: "empresa123",
    role: "company",
    name: "María González",
    companyId: "comp-1"
  },
  {
    id: "company-2",
    email: "empresa2@email.com",
    password: "empresa123",
    role: "company",
    name: "Juan Pérez",
    companyId: "comp-2"
  }
];

// Empresas de ejemplo
export const mockCompanies: Company[] = [
  {
    id: "comp-1",
    name: "TechSolutions SL",
    taxId: "B12345678", // CIF español
    email: "empresa1@email.com",
    phone: "+34 912 345 678",
    certifications: ["ISO 9001:2018", "ISO 27001:2022"],
    createdAt: "2024-01-15"
  },
  {
    id: "comp-2",
    name: "Industrias del Norte SL",
    taxId: "B98765432", // CIF español
    email: "empresa2@email.com",
    phone: "+34 911 222 333",
    certifications: ["ISO 9001:2018"],
    createdAt: "2024-02-20"
  }
];

// Certificaciones de empresas de ejemplo
export const mockCompanyCertifications: CompanyCertification[] = [
  {
    id: "cert-1",
    companyId: "comp-1",
    certification: "ISO 9001:2018",
    progress: 65,
    assignedAt: "2024-01-15"
  },
  {
    id: "cert-1b",
    companyId: "comp-1",
    certification: "ISO 27001:2022",
    progress: 25,
    assignedAt: "2024-02-01"
  },
  {
    id: "cert-2",
    companyId: "comp-2",
    certification: "ISO 9001:2018",
    progress: 30,
    assignedAt: "2024-02-20"
  }
];

// Progreso de requisitos de ejemplo
export const mockRequirementProgress: RequirementProgress[] = [
  // TechSolutions SAC
  { id: "prog-1", companyId: "comp-1", requirementId: "4.1", status: "aprobado", notes: "", lastUpdated: "2024-03-10" },
  { id: "prog-2", companyId: "comp-1", requirementId: "4.2", status: "aprobado", notes: "", lastUpdated: "2024-03-12" },
  { id: "prog-3", companyId: "comp-1", requirementId: "4.3", status: "en_revision", notes: "Revisar alcance", lastUpdated: "2024-03-15" },
  { id: "prog-4", companyId: "comp-1", requirementId: "4.4", status: "falta_info", notes: "Falta mapa de procesos", lastUpdated: "2024-03-14" },
  { id: "prog-5", companyId: "comp-1", requirementId: "5.1", status: "aprobado", notes: "", lastUpdated: "2024-03-18" },
  { id: "prog-6", companyId: "comp-1", requirementId: "5.2", status: "en_revision", notes: "", lastUpdated: "2024-03-20" },
  { id: "prog-7", companyId: "comp-1", requirementId: "6.1", status: "pendiente", notes: "", lastUpdated: "2024-03-01" },
  
  // Industrias del Norte
  { id: "prog-8", companyId: "comp-2", requirementId: "4.1", status: "aprobado", notes: "", lastUpdated: "2024-03-05" },
  { id: "prog-9", companyId: "comp-2", requirementId: "4.2", status: "en_revision", notes: "", lastUpdated: "2024-03-08" },
  { id: "prog-10", companyId: "comp-2", requirementId: "4.3", status: "pendiente", notes: "", lastUpdated: "2024-02-25" },
];

// Evidencias de ejemplo
export const mockEvidences: Evidence[] = [
  {
    id: "ev-1",
    companyId: "comp-1",
    certificationId: "cert-1",
    requirementId: "4.1",
    fileName: "Analisis_FODA.pdf",
    fileUrl: "#",
    uploadedAt: "2024-03-10T10:30:00",
    uploadedBy: "María González",
    description: "Análisis FODA de la organización"
  },
  {
    id: "ev-2",
    companyId: "comp-1",
    certificationId: "cert-1",
    requirementId: "4.2",
    fileName: "Matriz_Partes_Interesadas.xlsx",
    fileUrl: "#",
    uploadedAt: "2024-03-12T14:20:00",
    uploadedBy: "María González",
    description: "Identificación de partes interesadas"
  },
  {
    id: "ev-3",
    companyId: "comp-1",
    certificationId: "cert-1",
    requirementId: "4.3",
    fileName: "Alcance_SGC.docx",
    fileUrl: "#",
    uploadedAt: "2024-03-15T09:15:00",
    uploadedBy: "María González",
    description: "Documento de alcance del SGC"
  },
  {
    id: "ev-4",
    companyId: "comp-1",
    certificationId: "cert-1",
    requirementId: "5.1",
    fileName: "Acta_Compromiso_Direccion.pdf",
    fileUrl: "#",
    uploadedAt: "2024-03-18T11:45:00",
    uploadedBy: "María González",
    description: "Acta de compromiso de la dirección"
  },
  {
    id: "ev-5",
    companyId: "comp-2",
    certificationId: "cert-2",
    requirementId: "4.1",
    fileName: "Contexto_Organizacional.pdf",
    fileUrl: "#",
    uploadedAt: "2024-03-05T16:30:00",
    uploadedBy: "Juan Pérez",
    description: "Análisis de contexto organizacional"
  }
];

// Comentarios de ejemplo
export const mockComments: Comment[] = [
  {
    id: "comm-1",
    companyId: "comp-1",
    requirementId: "4.3",
    authorId: "admin-1",
    authorName: "Carlos Méndez",
    authorRole: "admin",
    content: "El alcance presentado es muy general. Por favor, especificar los procesos incluidos y excluidos del SGC.",
    createdAt: "2024-03-15T15:30:00"
  },
  {
    id: "comm-2",
    companyId: "comp-1",
    requirementId: "4.4",
    authorId: "admin-1",
    authorName: "Carlos Méndez",
    authorRole: "admin",
    content: "Falta el mapa de procesos. Es fundamental tener la interacción entre los procesos documentada.",
    createdAt: "2024-03-14T10:20:00"
  },
  {
    id: "comm-3",
    companyId: "comp-1",
    requirementId: "4.4",
    authorId: "company-1",
    authorName: "María González",
    authorRole: "company",
    content: "Estamos trabajando en el mapa de procesos, lo subiremos esta semana.",
    createdAt: "2024-03-14T16:45:00"
  },
  {
    id: "comm-4",
    companyId: "comp-2",
    requirementId: "4.2",
    authorId: "admin-1",
    authorName: "Carlos Méndez",
    authorRole: "admin",
    content: "La matriz de partes interesadas está bien estructurada. Solo falta agregar los requisitos específicos de cada una.",
    createdAt: "2024-03-08T11:15:00"
  }
];