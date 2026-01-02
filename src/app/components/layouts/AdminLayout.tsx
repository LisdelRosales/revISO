import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogOut, FileText } from 'lucide-react';
import { api } from '../../lib/api';
import { setUser } from '../../lib/auth';
import { toast } from 'sonner';

export function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    api.logout();
    setUser(null);
    navigate('/login');
    toast.success('Sesión cerrada');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">RevISO - Panel Administrador</h1>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

