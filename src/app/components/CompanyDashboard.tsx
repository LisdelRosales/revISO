import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { User, mockCompanies, mockRequirementProgress, CertificationType, mockCompanyCertifications } from "../data/mockData";
import { iso9001Requirements } from "../data/iso9001Data";
import { LogOut, CheckCircle2, Clock, AlertCircle, ArrowLeft } from "lucide-react";
import { CompanyRequirementView } from "./CompanyRequirementView";
// Logo de RevISO
const revISOLogo = "/src/assets/logo/revISO-round.svg";

interface CompanyDashboardProps {
  user: User;
  onLogout: () => void;
}

export function CompanyDashboard({ user, onLogout }: CompanyDashboardProps) {
  const [selectedRequirementId, setSelectedRequirementId] = useState<string | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<CertificationType | null>(null);
  
  const company = mockCompanies.find((c) => c.id === user.companyId);
  
  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p>No se encontró información de la empresa</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si la empresa tiene múltiples certificaciones y no hay una seleccionada, mostrar selector
  if (company.certifications.length > 1 && !selectedCertification) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4 relative">
        {/* Background opacado */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url(/src/assets/images/bg-img02.jpg)`
          }}
        />
        <Card className="w-full max-w-2xl relative z-10">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 flex items-center justify-center mb-4">
              <img src={revISOLogo} alt="RevISO Logo" className="w-20 h-20" />
            </div>
            <CardTitle className="text-2xl">Bienvenido/a, {user.name}</CardTitle>
            <CardDescription>
              {company.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-center mb-4">Selecciona la certificación que deseas revisar:</h3>
              <div className="grid gap-4">
                {company.certifications.map((cert) => {
                  const certProgress = mockCompanyCertifications.find(
                    cc => cc.companyId === company.id && cc.certification === cert
                  );
                  const progress = certProgress?.progress || 0;

                  return (
                    <Card 
                      key={cert}
                      className="cursor-pointer hover:shadow-lg transition-all hover:border-indigo-300"
                      onClick={() => setSelectedCertification(cert)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4>{cert}</h4>
                            <p className="text-sm text-gray-600">
                              {cert === "ISO 9001:2018" && "Sistema de Gestión de Calidad"}
                              {cert === "ISO 14001:2015" && "Sistema de Gestión Ambiental"}
                              {cert === "ISO 27001:2022" && "Sistema de Gestión de Seguridad de la Información"}
                            </p>
                          </div>
                          <Badge className="bg-indigo-600">
                            {progress}%
                          </Badge>
                        </div>
                        <Progress value={progress} />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={onLogout} variant="outline">
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si solo tiene una certificación, usarla automáticamente
  const activeCertification = selectedCertification || company.certifications[0];

  // Solo mostrar requisitos de ISO 9001 (las demás son mock sin requisitos detallados)
  const requirements = activeCertification === "ISO 9001:2018" ? iso9001Requirements : [];

  const requirementProgresses = mockRequirementProgress.filter(
    (rp) => rp.companyId === company.id
  );

  const getRequirementStatus = (requirementId: string) => {
    const progress = requirementProgresses.find((rp) => rp.requirementId === requirementId);
    return progress?.status || "pendiente";
  };

  const stats = {
    aprobado: requirementProgresses.filter((rp) => rp.status === "aprobado").length,
    en_revision: requirementProgresses.filter((rp) => rp.status === "en_revision").length,
    falta_info: requirementProgresses.filter((rp) => rp.status === "falta_info").length,
    pendiente: requirements.length - requirementProgresses.length + requirementProgresses.filter((rp) => rp.status === "pendiente").length
  };

  // Agrupar requisitos por categoría
  const groupedRequirements = requirements.reduce((acc, req) => {
    if (!acc[req.category]) {
      acc[req.category] = [];
    }
    acc[req.category].push(req);
    return acc;
  }, {} as Record<string, typeof requirements>);

  if (selectedRequirementId) {
    const requirement = requirements.find((r) => r.id === selectedRequirementId);
    if (requirement) {
      return (
        <CompanyRequirementView
          company={company}
          requirement={requirement}
          onBack={() => setSelectedRequirementId(null)}
          user={user}
        />
      );
    }
  }

  // Obtener el progreso de la certificación actual
  const currentCertProgress = mockCompanyCertifications.find(
    cc => cc.companyId === company.id && cc.certification === activeCertification
  );
  const currentProgress = currentCertProgress?.progress || 0;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background opacado */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0"
        style={{
          backgroundImage: `url(/src/assets/images/bg-img02.jpg)`
        }}
      />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 top-0 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {company.certifications.length > 1 && (
                <Button 
                  onClick={() => setSelectedCertification(null)} 
                  variant="ghost" 
                  size="sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Cambiar certificación
                </Button>
              )}
              <img src={revISOLogo} alt="RevISO Logo" className="w-10 h-10" />
              <div>
                <h1>{company.name}</h1>
                <p className="text-sm text-gray-600">{user.name} - {activeCertification}</p>
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
        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="text-white">Progreso de Certificación</CardTitle>
            <CardDescription className="text-indigo-100">
              {activeCertification}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{currentProgress}%</span>
                {requirements.length > 0 && (
                  <span className="text-sm text-indigo-100">
                    {stats.aprobado} de {requirements.length} requisitos aprobados
                  </span>
                )}
              </div>
              <Progress value={currentProgress} className="bg-indigo-700" />
            </div>
          </CardContent>
        </Card>

        {/* Si no es ISO 9001, mostrar mensaje */}
        {activeCertification !== "ISO 9001:2018" ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <img src={revISOLogo} alt="RevISO Logo" className="w-16 h-16 opacity-50" />
              </div>
              <h3 className="text-xl mb-2">Certificación {activeCertification}</h3>
              <p className="text-gray-600 mb-4">
                Los requisitos detallados para esta certificación estarán disponibles próximamente.
              </p>
              {company.certifications.length > 1 && (
                <Button onClick={() => setSelectedCertification(null)} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Cambiar a otra certificación
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Aprobados</CardDescription>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <CardTitle>{stats.aprobado}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Requisitos completados</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>En Revisión</CardDescription>
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle>{stats.en_revision}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Esperando validación</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Requieren Atención</CardDescription>
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <CardTitle>{stats.falta_info + stats.pendiente}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Pendientes o falta info</p>
                </CardContent>
              </Card>
            </div>

            {/* Requirements Checklist */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2>Checklist de Requisitos ISO 9001:2018</h2>
              </div>

              {Object.entries(groupedRequirements).map(([category, requirements]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>
                      {requirements.filter(r => getRequirementStatus(r.id) === "aprobado").length} de {requirements.length} completados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {requirements.map((req) => {
                        const status = getRequirementStatus(req.id);
                        
                        const statusConfig = {
                          aprobado: { color: "bg-green-500", icon: CheckCircle2, label: "Aprobado" },
                          en_revision: { color: "bg-blue-500", icon: Clock, label: "En Revisión" },
                          falta_info: { color: "bg-yellow-500", icon: AlertCircle, label: "Falta Información" },
                          pendiente: { color: "bg-gray-500", icon: Clock, label: "Pendiente" }
                        };
                        
                        const config = statusConfig[status];
                        const StatusIcon = config.icon;

                        return (
                          <div
                            key={req.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => setSelectedRequirementId(req.id)}
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <span className="text-sm text-gray-600">{req.clause}</span>
                                <h4>{req.title}</h4>
                              </div>
                              <p className="text-sm text-gray-600">{req.description}</p>
                            </div>
                            
                            <div className="flex items-center gap-3 ml-4">
                              <Badge className={config.color}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {config.label}
                              </Badge>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}