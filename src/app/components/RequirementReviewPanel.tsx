import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { User, Company, mockEvidences, mockComments, Comment } from "../data/mockData";
import { Requirement, RequirementStatus, statusLabels, statusColors } from "../data/iso9001Data";
import { ArrowLeft, FileText, MessageSquare, Send, Download } from "lucide-react";
import { toast } from "sonner";

interface RequirementReviewPanelProps {
  company: Company;
  requirement: Requirement;
  onBack: () => void;
  user: User;
}

export function RequirementReviewPanel({ company, requirement, onBack, user }: RequirementReviewPanelProps) {
  const [status, setStatus] = useState<RequirementStatus>("pendiente");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(
    mockComments.filter((c) => c.companyId === company.id && c.requirementId === requirement.id)
  );

  const evidences = mockEvidences.filter(
    (e) => e.companyId === company.id && e.requirementId === requirement.id
  );

  const handleStatusChange = (newStatus: RequirementStatus) => {
    setStatus(newStatus);
    toast.success(`Estado actualizado a: ${statusLabels[newStatus]}`);
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
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{requirement.clause}</span>
                  <h1>{requirement.title}</h1>
                </div>
                <p className="text-sm text-gray-600">{company.name}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Requirement Details & Evidences */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requirement Info */}
            <Card>
              <CardHeader>
                <CardTitle>Descripción del Requisito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{requirement.description}</p>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Categoría:</strong> {requirement.category}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Evidences */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Evidencias ({evidences.length})</CardTitle>
                </div>
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
                              <span>Por: {evidence.uploadedBy}</span>
                              <span>
                                {new Date(evidence.uploadedAt).toLocaleString('es-ES')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p>No hay evidencias cargadas</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Comentarios ({comments.length})
                </CardTitle>
                <CardDescription>
                  Comunicación entre consultor y empresa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className={`p-4 rounded-lg ${
                          comment.authorRole === "admin"
                            ? "bg-indigo-50 border border-indigo-100"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{comment.authorName}</span>
                            <Badge variant={comment.authorRole === "admin" ? "default" : "outline"}>
                              {comment.authorRole === "admin" ? "Consultor" : "Empresa"}
                            </Badge>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(comment.createdAt).toLocaleString('es-ES')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <Textarea
                    placeholder="Escribe un comentario..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={handleAddComment} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar comentario
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Status & Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estado del Requisito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Estado actual</p>
                  <Select value={status} onValueChange={(value) => handleStatusChange(value as RequirementStatus)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pendiente">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-500" />
                          Pendiente
                        </div>
                      </SelectItem>
                      <SelectItem value="en_revision">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          En Revisión
                        </div>
                      </SelectItem>
                      <SelectItem value="falta_info">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          Falta Información
                        </div>
                      </SelectItem>
                      <SelectItem value="aprobado">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          Aprobado
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Estadísticas</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Evidencias:</span>
                      <span>{evidences.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Comentarios:</span>
                      <span>{comments.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-sm">Nota</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Los cambios de estado y comentarios se guardarán automáticamente cuando se implemente la integración con Supabase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
