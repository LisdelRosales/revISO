import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { AlertTriangle, X } from "lucide-react";
import { Company, CertificationType } from "../data/mockData";

interface RemoveCertificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  company: Company;
  certification: CertificationType;
  onRemoveCertification: (certification: CertificationType) => void;
}

export function RemoveCertificationDialog({ 
  open, 
  onOpenChange, 
  company,
  certification,
  onRemoveCertification 
}: RemoveCertificationDialogProps) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);
    try {
      onRemoveCertification(certification);
      onOpenChange(false);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <DialogTitle className="text-red-600">Advertencia: Eliminar Certificación</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Estás a punto de eliminar la certificación <strong>{certification}</strong> de la empresa <strong>{company.name}</strong>.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800 font-medium mb-2">
              ⚠️ Esta acción eliminará permanentemente:
            </p>
            <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
              <li>Toda la documentación subida para esta certificación</li>
              <li>Todos los requisitos y su progreso</li>
              <li>Todas las evidencias y comentarios asociados</li>
              <li>El historial de auditoría de esta certificación</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            Esta acción <strong>no se puede deshacer</strong>. ¿Estás seguro de que deseas continuar?
          </p>
        </div>

        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            disabled={isRemoving}
          >
            Cancelar
          </Button>
          <Button 
            type="button"
            variant="destructive"
            onClick={handleRemove}
            disabled={isRemoving}
            className="bg-red-600 hover:bg-red-700"
          >
            {isRemoving ? "Eliminando..." : "Sí, eliminar certificación"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}



