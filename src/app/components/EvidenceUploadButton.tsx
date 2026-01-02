import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';
import { api } from '../lib/api';
import { toast } from 'sonner';

interface EvidenceUploadButtonProps {
  submissionId: number;
  onUploadSuccess?: () => void;
}

export function EvidenceUploadButton({ submissionId, onUploadSuccess }: EvidenceUploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await api.uploadEvidence(submissionId, file);
      toast.success('Evidencia cargada exitosamente');
      onUploadSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al cargar evidencia');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        variant="outline"
        size="sm"
      >
        <Upload className="w-4 h-4 mr-2" />
        {isUploading ? 'Subiendo...' : 'Subir evidencia'}
      </Button>
    </>
  );
}

