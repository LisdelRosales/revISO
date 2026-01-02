import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Company, CertificationType, availableCertifications } from "../data/mockData";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface AddCertificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  company: Company;
  onAddCertifications: (certifications: CertificationType[]) => void;
}

export function AddCertificationDialog({ 
  open, 
  onOpenChange, 
  company, 
  onAddCertifications 
}: AddCertificationDialogProps) {
  const [selectedCertifications, setSelectedCertifications] = useState<CertificationType[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const availableToAdd = availableCertifications.filter(
    cert => !company.certifications.includes(cert.value)
  );

  const toggleCertification = (cert: CertificationType) => {
    setSelectedCertifications(prev => 
      prev.includes(cert) 
        ? prev.filter(c => c !== cert)
        : [...prev, cert]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (selectedCertifications.length === 0) {
      toast.error("Debes seleccionar al menos una certificación");
      return;
    }

    // Mostrar confirmación
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    onAddCertifications(selectedCertifications);
    toast.success(`${selectedCertifications.length} certificación(es) agregada(s) exitosamente a ${company.name}`);
    onOpenChange(false);
    setSelectedCertifications([]);
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agregar Certificaciones</DialogTitle>
          <DialogDescription>
            Asignar nuevas certificaciones ISO a {company.name}
          </DialogDescription>
        </DialogHeader>
        
        {availableToAdd.length === 0 ? (
          <div className="py-8 text-center text-gray-600">
            <p>Esta empresa ya tiene todas las certificaciones disponibles asignadas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-3">
              <Label>Selecciona certificaciones *</Label>
              <div className="space-y-2">
                {availableToAdd.map((cert) => (
                  <div key={cert.value} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id={`add-${cert.value}`}
                      checked={selectedCertifications.includes(cert.value)}
                      onCheckedChange={() => toggleCertification(cert.value)}
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`add-${cert.value}`}
                        className="text-sm cursor-pointer"
                      >
                        <div>{cert.label}</div>
                        <div className="text-xs text-gray-600">{cert.description}</div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => {
                onOpenChange(false);
                setSelectedCertifications([]);
                setShowConfirm(false);
              }}>
                Cancelar
              </Button>
              <Button type="submit">
                Agregar certificaciones
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>

      {/* Diálogo de confirmación */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <DialogTitle>Confirmar Agregar Certificaciones</DialogTitle>
            </div>
            <DialogDescription>
              ¿Estás seguro de que deseas agregar {selectedCertifications.length} certificación(es) a <strong>{company.name}</strong>?
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">Certificaciones a agregar:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedCertifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button type="button" onClick={handleConfirm}>
              Sí, agregar certificaciones
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
