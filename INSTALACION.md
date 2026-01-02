# 🚀 Guía de Instalación - RevISO Frontend

## ✅ Preparación Completada

He preparado el proyecto con:

1. ✅ **React y dependencias** agregadas a `package.json`
2. ✅ **Componentes UI** creados (button, card, badge, progress, input, label, textarea, select, dialog, tabs)
3. ✅ **Utilidad `cn`** creada para combinar clases Tailwind
4. ✅ **Estructura de carpetas** organizada

## 📦 Paso 1: Instalar Dependencias

Ejecuta en la terminal:

```bash
npm install
```

O si prefieres pnpm:

```bash
pnpm install
```

Esto instalará:
- React 18.3.1
- React-DOM 18.3.1
- React Router DOM 6.20.0
- Todas las dependencias de Radix UI
- Tailwind CSS y plugins
- Sonner (para toasts)
- Lucide React (iconos)
- Y todas las demás dependencias necesarias

## 🚀 Paso 2: Ejecutar el Proyecto

Después de instalar las dependencias:

```bash
npm run dev
```

O con pnpm:

```bash
pnpm dev
```

El proyecto debería iniciarse en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── App.tsx                    # Componente principal con routing básico
│   ├── components/
│   │   ├── ui/                    # Componentes UI base (shadcn/ui style)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── sonner.tsx
│   │   ├── LoginPage.tsx          # Página de login
│   │   ├── AdminDashboard.tsx     # Dashboard del admin
│   │   ├── CompanyDashboard.tsx  # Dashboard del cliente
│   │   └── layouts/               # Layouts para admin y cliente
│   ├── data/
│   │   ├── mockData.ts            # Datos mock para desarrollo
│   │   └── iso9001Data.ts        # Datos de requisitos ISO 9001
│   ├── lib/
│   │   ├── api.ts                # Utilidades API (fetch wrapper)
│   │   ├── auth.ts               # Utilidades de autenticación
│   │   └── utils.ts              # Utilidad cn() para clases
│   └── styles/
│       ├── index.css             # CSS principal
│       ├── tailwind.css          # Tailwind CSS
│       └── theme.css             # Variables de tema
├── main.tsx                      # Entry point con React Router
└── index.html                    # HTML base
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (opcional):

```env
VITE_API_URL=http://localhost:8000
```

Si no creas este archivo, el proyecto usará `http://localhost:8000` por defecto.

### Tailwind CSS

Ya está configurado con Tailwind CSS 4.x usando el plugin de Vite. Los estilos se importan en `src/app/styles/index.css`.

## 🔍 Verificación Post-Instalación

Después de instalar y ejecutar, verifica:

1. ✅ El servidor inicia sin errores
2. ✅ La página de login se muestra correctamente
3. ✅ Los componentes UI se renderizan sin errores
4. ✅ Las rutas funcionan (aunque aún no hay routing completo)

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module 'react'"
**Solución:** Ejecuta `npm install` nuevamente

### Error: "Cannot find module '@radix-ui/...'"
**Solución:** Todas las dependencias de Radix UI están en package.json. Ejecuta `npm install`

### Error de TypeScript sobre tipos faltantes
**Solución:** Puede que necesites instalar tipos:
```bash
npm install -D @types/react @types/react-dom
```

### Error de Tailwind CSS
**Solución:** Verifica que `src/app/styles/index.css` importe `tailwind.css` y `theme.css`

## 📝 Notas Importantes

1. **Componentes UI:** Los componentes en `src/app/components/ui/` siguen el patrón de shadcn/ui y usan Radix UI como base.

2. **Autenticación:** Los tokens se guardan en `localStorage` con la clave `auth_token`.

3. **API:** Las funciones de API están en `src/app/lib/api.ts` y ya incluyen:
   - Manejo de errores
   - Headers de autenticación automáticos
   - Redirección a login en caso de 401

4. **Mock Data:** El proyecto incluye datos mock en `src/app/data/mockData.ts` para desarrollo sin backend.

## 🎯 Próximos Pasos

Después de que todo funcione:

1. Conectar con el backend real (cambiar `VITE_API_URL` si es necesario)
2. Implementar routing completo con React Router
3. Agregar más funcionalidades según los requisitos
4. Mejorar la UI según sea necesario

## 📚 Archivos de Referencia

- `package.json` - Todas las dependencias
- `vite.config.ts` - Configuración de Vite
- `src/app/lib/api.ts` - Utilidades de API
- `src/app/lib/auth.ts` - Utilidades de autenticación
- `SETUP_INSTRUCTIONS.md` - Instrucciones detalladas
- `RESUMEN_SETUP.md` - Resumen del estado actual






