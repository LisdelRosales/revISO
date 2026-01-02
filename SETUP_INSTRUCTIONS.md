# Instrucciones de Setup - RevISO Frontend

## ✅ Pasos Completados

1. ✅ React, React-DOM y React Router agregados a `package.json`
2. ✅ Componentes UI creados (button, card, badge, progress, input, label, textarea, select, dialog, tabs)
3. ✅ Utilidad `cn` creada en `src/app/lib/utils.ts`
4. ✅ Componente Toaster de sonner ya existe en `src/app/components/ui/sonner.tsx`

## 📦 Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias:

```bash
npm install
```

O si usas pnpm:

```bash
pnpm install
```

## 🚀 Ejecutar el Proyecto

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
│   ├── App.tsx                    # Componente principal
│   ├── components/
│   │   ├── ui/                    # Componentes UI base
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
│   │   ├── AdminDashboard.tsx
│   │   ├── CompanyDashboard.tsx
│   │   ├── LoginPage.tsx
│   │   └── ...
│   ├── data/
│   │   ├── mockData.ts
│   │   └── iso9001Data.ts
│   ├── lib/
│   │   ├── api.ts                 # Utilidades API
│   │   ├── auth.ts                # Utilidades de autenticación
│   │   └── utils.ts               # Utilidad cn para clases
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── main.tsx                       # Entry point
└── index.html
```

## ⚠️ Notas Importantes

1. **Variables de Entorno**: El proyecto usa `VITE_API_URL` para la URL del backend. Por defecto es `http://localhost:8000`. Puedes crear un archivo `.env`:

```env
VITE_API_URL=http://localhost:8000
```

2. **Tailwind CSS**: Ya está configurado con Tailwind CSS 4.x usando el plugin de Vite.

3. **React Router**: Ya está configurado en `main.tsx` con `BrowserRouter`.

## 🔧 Próximos Pasos

Después de instalar las dependencias y ejecutar el proyecto, deberías poder:

1. Ver la página de login
2. Navegar entre las diferentes vistas según el rol del usuario
3. Usar todos los componentes UI creados

Si encuentras errores después de instalar las dependencias, verifica que:
- Todas las dependencias se instalaron correctamente
- El servidor de desarrollo está corriendo
- La configuración de Vite es correcta






