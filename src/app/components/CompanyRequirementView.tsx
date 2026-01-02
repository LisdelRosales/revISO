import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { User, Company, mockEvidences, mockComments, Evidence, Comment } from "../data/mockData";
import { Requirement, statusLabels, statusColors } from "../data/iso9001Data";
import { ArrowLeft, FileText, MessageSquare, Send, Upload, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface CompanyRequirementViewProps {
  company: Company;
  requirement: Requirement;
  onBack: () => void;
  user: User;
}

export function CompanyRequirementView({ company, requirement, onBack, user }: CompanyRequirementViewProps) {
  const [evidences, setEvidences] = useState<Evidence[]>(
    mockEvidences.filter((e) => e.companyId === company.id && e.requirementId === requirement.id)
  );
  const [comments, setComments] = useState<Comment[]>(
    mockComments.filter((c) => c.companyId === company.id && c.requirementId === requirement.id)
  );
  const [newComment, setNewComment] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const requirementProgress = mockEvidences.find(
    (e) => e.companyId === company.id && e.requirementId === requirement.id
  );
  const status = requirementProgress ? "en_revision" : "pendiente";

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadEvidence = () => {
    if (!selectedFile || !uploadDescription.trim()) {
      toast.error("Por favor selecciona un archivo y agrega una descripción");
      return;
    }

    const newEvidence: Evidence = {
      id: `ev-${Date.now()}`,
      companyId: company.id,
      certificationId: company.certifications[0] || "ISO 9001:2018", // Usar la primera certificación o default
      requirementId: requirement.id,
      fileName: selectedFile.name,
      fileUrl: "#",
      uploadedAt: new Date().toISOString(),
      uploadedBy: user.name,
      description: uploadDescription
    };

    setEvidences([...evidences, newEvidence]);
    setSelectedFile(null);
    setUploadDescription("");
    
    // Reset file input
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";

    toast.success("Evidencia cargada exitosamente");
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comm-${Date.now()}`,
      companyId: company.id,
      requirementId: requirement.id,
      authorId: user.id,
      authorName: user.name,
      authorRole: user.role,
      content: newComment,
      createdAt: new Date().toISOString()
    };

    setComments([...comments, comment]);
    setNewComment("");
    toast.success("Comentario agregado");
  };

  // Separar comentarios del consultor
  const consultorComments = comments.filter(c => c.authorRole === "admin");
  const hasConsultorFeedback = consultorComments.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={onBack} variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al checklist
              </Button>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{requirement.clause}</span>
                  <h1>{requirement.title}</h1>
                </div>
                <p className="text-sm text-gray-600">{requirement.category}</p>
              </div>
            </div>
            <Badge className={statusColors[status]}>
              {statusLabels[status]}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requirement Description */}
            <Card>
              <CardHeader>
                <CardTitle>¿Qué se requiere?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{requirement.description}</p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-900">
                    <strong>💡 Consejo:</strong> Asegúrate de documentar claramente cómo tu empresa cumple con este requisito. 
                    Incluye procedimientos, registros, políticas o cualquier evidencia que demuestre el cumplimiento.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feedback from Consultor */}
            {hasConsultorFeedback && (
              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Comentarios del Consultor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {consultorComments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-white rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">{comment.authorName}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleString('es-ES')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Upload Evidence */}
            <Card>
              <CardHeader>
                <CardTitle>Cargar Evidencia</CardTitle>
                <CardDescription>
                  Sube documentos, procedimientos, registros o cualquier archivo que demuestre el cumplimiento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Seleccionar archivo</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    onChange={handleFileSelect}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  />
                  {selectedFile && (
                    <p className="text-sm text-gray-600">
                      Archivo seleccionado: {selectedFile.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción de la evidencia</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe brevemente qué documenta este archivo..."
                    value={uploadDescription}
                    onChange={(e) => setUploadDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={handleUploadEvidence} className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Subir evidencia
                </Button>
              </CardContent>
            </Card>

            {/* Evidences List */}
            <Card>
              <CardHeader>
                <CardTitle>Evidencias Cargadas ({evidences.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {evidences.length > 0 ? (
                  <div className="space-y-3">
                    {evidences.map((evidence) => (
                      <div
                        key={evidence.id}
                        className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <FileText className="w-5 h-5 text-gray-600 mt-0.5" />
                          <div className="flex-1">
                            <h4>{evidence.fileName}</h4>
                            <p className="text-sm text-gray-600">{evidence.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>
                                {new Date(evidence.uploadedAt).toLocaleString('es-ES')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Subido
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p>Aún no has cargado evidencias</p>
                    <p className="text-sm">Sube tu primera evidencia arriba</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Comments */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Comunicación
                </CardTitle>
                <CardDescription>
                  Consulta con tu asesor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.length > 0 && (
                  <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className={`p-3 rounded-lg ${
                          comment.authorRole === "admin"
                            ? "bg-indigo-50 border border-indigo-100"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{comment.authorName}</span>
                            <Badge 
                              variant={comment.authorRole === "admin" ? "default" : "outline"}
                              className="text-xs"
                            >
                              {comment.authorRole === "admin" ? "Consultor" : "Tú"}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{comment.content}</p>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {new Date(comment.createdAt).toLocaleString('es-ES')}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <Textarea
                    placeholder="Escribe una pregunta o comentario..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={handleAddComment} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm">Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Estado:</strong> {statusLabels[status]}
                </p>
                <p>
                  <strong>Evidencias:</strong> {evidences.length}
                </p>
                <p>
                  <strong>Comentarios:</strong> {comments.length}
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs">
                    Los archivos y comentarios se sincronizarán automáticamente cuando se implemente la integración con Supabase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
