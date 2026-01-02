import { Badge } from './ui/badge';
import { CheckCircle2, Clock, AlertCircle, XCircle } from 'lucide-react';
import { RequirementStatus } from '../data/iso9001Data';

interface StatusBadgeProps {
  status: RequirementStatus;
}

const statusConfig: Record<RequirementStatus, { label: string; className: string; icon: typeof CheckCircle2 }> = {
  pendiente: {
    label: 'Pendiente',
    className: 'bg-gray-500 text-white',
    icon: Clock,
  },
  en_revision: {
    label: 'En Revisión',
    className: 'bg-blue-500 text-white',
    icon: Clock,
  },
  aprobado: {
    label: 'Aprobado',
    className: 'bg-green-500 text-white',
    icon: CheckCircle2,
  },
  falta_info: {
    label: 'Falta Información',
    className: 'bg-yellow-500 text-white',
    icon: AlertCircle,
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge className={config.className}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
}

