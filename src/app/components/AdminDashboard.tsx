import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { User, Company, mockCompanies, mockCompanyCertifications, CertificationType } from "../data/mockData";
import { Building2, Plus, LogOut, PlusCircle, X } from "lucide-react";
import { CreateCompanyDialog } from "./CreateCompanyDialog";
import { AddCertificationDialog } from "./AddCertificationDialog";
import { RemoveCertificationDialog } from "./RemoveCertificationDialog";
import { CompanyDetailView } from "./CompanyDetailView";
import { toast } from "sonner";
// Logo de RevISO
const revISOLogo = "/src/assets/logo/revISO-round.svg";

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [addCertCompany, setAddCertCompany] = useState<Company | null>(null);
  const [removeCertData, setRemoveCertData] = useState<{ company: Company; certification: CertificationType } | null>(null);

  const handleCreateCompany = (newCompany: Company) => {
    setCompanies([...companies, newCompany]);
  };

  const handleAddCertifications = (certifications: CertificationType[]) => {
    if (!addCertCompany) return;
    
    setCompanies(companies.map(company => 
      company.id === addCertCompany.id
        ? { ...company, certifications: [...company.certifications, ...certifications] }
        : company
    ));
    setAddCertCompany(null);
  };

  const handleRemoveCertification = (certification: CertificationType) => {
    if (!removeCertData) return;
    
    setCompanies(companies.map(company => 
      company.id === removeCertData.company.id
        ? { ...company, certifications: company.certifications.filter(c => c !== certification) }
        : company
    ));
    
    toast.warning(`Certificación ${certification} eliminada de ${removeCertData.company.name}. Toda la documentación asociada ha sido eliminada.`);
    setRemoveCertData(null);
  };

  const getCompanyProgress = (companyId: string) => {
    const companyCerts = mockCompanyCertifications.filter(cc => cc.companyId === companyId);
    if (companyCerts.length === 0) return 0;
    const avgProgress = companyCerts.reduce((acc, cert) => acc + cert.progress, 0) / companyCerts.length;
    return Math.round(avgProgress);
  };

  if (selectedCompany) {
    return (
      <CompanyDetailView
        company={selectedCompany}
        onBack={() => setSelectedCompany(null)}
        onLogout={onLogout}
        user={user}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background opacado */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0"
        style={{
          backgroundImage: `url(/src/assets/images/bg-img01.jpg)`
        }}
      />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={revISOLogo} alt="RevISO Logo" className="w-10 h-10" />
              <div>
                <h1>RevISO - Panel Administrador</h1>
                <p className="text-sm text-gray-600">{user.name}</p>
              </div>
            </div>
            <Button onClick={onLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2>Empresas</h2>
            <p className="text-gray-600">{companies.length} empresas registradas</p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nueva empresa
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => {
            const progress = getCompanyProgress(company.id);
            
            return (
              <Card
                key={company.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div 
                      className="flex items-center gap-3 flex-1 cursor-pointer"
                      onClick={() => setSelectedCompany(company)}
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription>CIF: {company.taxId}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert) => (
                      <Badge 
                        key={cert} 
                        variant="outline"
                        className="group relative pr-6"
                      >
                        {cert}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setRemoveCertData({ company, certification: cert });
                          }}
                          className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ml-1 hover:bg-red-100 rounded-full p-0.5"
                          title="Eliminar certificación"
                        >
                          <X className="w-3 h-3 text-red-600" />
                        </button>
                      </Badge>
                    ))}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 px-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAddCertCompany(company);
                      }}
                    >
                      <PlusCircle className="w-3 h-3 mr-1" />
                      Agregar
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progreso promedio</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>

                  <div className="pt-2 border-t border-gray-100 space-y-1 text-sm text-gray-600">
                    <p>{company.email}</p>
                    <p>{company.phone}</p>
                    <p className="text-xs">Creado: {new Date(company.createdAt).toLocaleDateString('es-ES')}</p>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => setSelectedCompany(company)}
                  >
                    Ver detalles
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {companies.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-gray-600 mb-2">No hay empresas registradas</h3>
              <p className="text-sm text-gray-500 mb-4">
                Comienza creando tu primera empresa
              </p>
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Nueva empresa
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <CreateCompanyDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateCompany={handleCreateCompany}
      />

      {addCertCompany && (
        <AddCertificationDialog
          open={!!addCertCompany}
          onOpenChange={(open) => !open && setAddCertCompany(null)}
          company={addCertCompany}
          onAddCertifications={handleAddCertifications}
        />
      )}

      {removeCertData && (
        <RemoveCertificationDialog
          open={!!removeCertData}
          onOpenChange={(open) => !open && setRemoveCertData(null)}
          company={removeCertData.company}
          certification={removeCertData.certification}
          onRemoveCertification={handleRemoveCertification}
        />
      )}
    </div>
  );
}