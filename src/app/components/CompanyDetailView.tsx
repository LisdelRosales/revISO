import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User, Company, mockRequirementProgress, mockEvidences, mockComments, mockCompanyCertifications } from "../data/mockData";
import { iso9001Requirements, statusLabels, statusColors } from "../data/iso9001Data";
import { ArrowLeft, FileText, MessageSquare, Download, CheckCircle2, Clock, AlertCircle, XCircle } from "lucide-react";
import { RequirementReviewPanel } from "./RequirementReviewPanel";

interface CompanyDetailViewProps {
  company: Company;
  onBack: () => void;
  onLogout: () => void;
  user: User;
}

export function CompanyDetailView({ company, onBack, onLogout, user }: CompanyDetailViewProps) {
  const [selectedRequirementId, setSelectedRequirementId] = useState<string | null>(null);
  
  const requirementProgresses = mockRequirementProgress.filter(
    (rp) => rp.companyId === company.id
  );

  const getRequirementStatus = (requirementId: string) => {
    const progress = requirementProgresses.find((rp) => rp.requirementId === requirementId);
    return progress?.status || "pendiente";
  };

  const getCompanyProgress = () => {
    const companyCerts = mockCompanyCertifications.filter(cc => cc.companyId === company.id);
    if (companyCerts.length === 0) return 0;
    const avgProgress = companyCerts.reduce((acc, cert) => acc + cert.progress, 0) / companyCerts.length;
    return Math.round(avgProgress);
  };

  const companyProgress = getCompanyProgress();

  const evidencesCount = mockEvidences.filter((e) => e.companyId === company.id).length;
  const commentsCount = mockComments.filter((c) => c.companyId === company.id).length;

  const stats = {
    aprobado: requirementProgresses.filter((rp) => rp.status === "aprobado").length,
    en_revision: requirementProgresses.filter((rp) => rp.status === "en_revision").length,
    falta_info: requirementProgresses.filter((rp) => rp.status === "falta_info").length,
    pendiente: iso9001Requirements.length - requirementProgresses.length + requirementProgresses.filter((rp) => rp.status === "pendiente").length
  };

  const handleGenerateReport = () => {
    alert("Funcionalidad de generación de informes próximamente disponible con Supabase");
  };

  // Agrupar requisitos por categoría
  const groupedRequirements = iso9001Requirements.reduce((acc, req) => {
    if (!acc[req.category]) {
      acc[req.category] = [];
    }
    acc[req.category].push(req);
    return acc;
  }, {} as Record<string, typeof iso9001Requirements>);

  if (selectedRequirementId) {
    const requirement = iso9001Requirements.find((r) => r.id === selectedRequirementId);
    if (requirement) {
      return (
        <RequirementReviewPanel
          company={company}
          requirement={requirement}
          onBack={() => setSelectedRequirementId(null)}
          user={user}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={onBack} variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <div>
                <h1>{company.name}</h1>
                <p className="text-sm text-gray-600">{company.certifications.join(", ")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handleGenerateReport} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Generar informe
              </Button>
              <Button onClick={onLogout} variant="outline">
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Progreso Total</CardDescription>
              <CardTitle>{companyProgress}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={companyProgress} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Aprobados</CardDescription>
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <CardTitle>{stats.aprobado}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">de {iso9001Requirements.length} requisitos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>En Revisión</CardDescription>
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <CardTitle>{stats.en_revision}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">requisitos en proceso</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Falta Información</CardDescription>
                <AlertCircle className="w-4 h-4 text-yellow-600" />
              </div>
              <CardTitle>{stats.falta_info}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">requieren atención</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="requirements" className="space-y-6">
          <TabsList>
            <TabsTrigger value="requirements">
              <FileText className="w-4 h-4 mr-2" />
              Requisitos ({iso9001Requirements.length})
            </TabsTrigger>
            <TabsTrigger value="info">
              Información de la empresa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="space-y-6">
            {Object.entries(groupedRequirements).map(([category, requirements]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {requirements.map((req) => {
                      const status = getRequirementStatus(req.id);
                      const evidences = mockEvidences.filter(
                        (e) => e.companyId === company.id && e.requirementId === req.id
                      );
                      const comments = mockComments.filter(
                        (c) => c.companyId === company.id && c.requirementId === req.id
                      );

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
                            
                            <div className="flex items-center gap-3 mt-2">
                              {evidences.length > 0 && (
                                <span className="text-xs text-gray-500">
                                  {evidences.length} evidencia(s)
                                </span>
                              )}
                              {comments.length > 0 && (
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" />
                                  {comments.length}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <Badge className={statusColors[status]}>
                            {statusLabels[status]}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Información de la Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Nombre</p>
                    <p>{company.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">CIF/NIF</p>
                    <p>{company.taxId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Correo electrónico</p>
                    <p>{company.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <p>{company.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Certificaciones</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {company.certifications.map((cert) => (
                        <Badge key={cert} variant="outline">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fecha de registro</p>
                    <p>{new Date(company.createdAt).toLocaleDateString('es-ES')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
