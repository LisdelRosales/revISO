import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Company, CertificationType, availableCertifications } from "../data/mockData";

interface CreateCompanyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateCompany: (company: Company) => void;
}

export function CreateCompanyDialog({ open, onOpenChange, onCreateCompany }: CreateCompanyDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    taxId: "",
    email: "",
    phone: ""
  });
  const [selectedCertifications, setSelectedCertifications] = useState<CertificationType[]>(["ISO 9001:2018"]);

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
      alert("Debes seleccionar al menos una certificación");
      return;
    }

    const newCompany: Company = {
      id: `comp-${Date.now()}`,
      name: formData.name,
      taxId: formData.taxId,
      email: formData.email,
      phone: formData.phone,
      certifications: selectedCertifications,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onCreateCompany(newCompany);
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      taxId: "",
      email: "",
      phone: ""
    });
    setSelectedCertifications(["ISO 9001:2018"]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nueva Empresa</DialogTitle>
          <DialogDescription>
            Registra una nueva empresa y asigna las certificaciones ISO
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Nombre de la empresa *</Label>
            <Input
              id="company-name"
              placeholder="Ej: TechSolutions SAC"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tax-id">CIF/NIF *</Label>
            <Input
              id="tax-id"
              placeholder="B12345678"
              value={formData.taxId}
              onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
              required
              maxLength={9}
            />
            <p className="text-xs text-gray-500">CIF para empresas, NIF para autónomos</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              placeholder="contacto@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+34 912 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-3 pt-2">
            <Label>Certificaciones a asignar *</Label>
            <div className="space-y-2">
              {availableCertifications.map((cert) => (
                <div key={cert.value} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Checkbox
                    id={cert.value}
                    checked={selectedCertifications.includes(cert.value)}
                    onCheckedChange={() => toggleCertification(cert.value)}
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={cert.value}
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

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Crear empresa
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}