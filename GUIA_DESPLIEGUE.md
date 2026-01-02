# 🚀 Guía de Despliegue - RevISO Frontend

Esta guía te ayudará a desplegar el proyecto RevISO en GitHub Pages para compartirlo con tus compañeros.

---

## 📋 Tabla de Contenidos

1. [Preparación del Proyecto](#preparación-del-proyecto)
2. [Qué Copiar en USB](#qué-copiar-en-usb)
3. [Configuración para GitHub Pages](#configuración-para-github-pages)
4. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
5. [Verificación](#verificación)
6. [Solución de Problemas](#solución-de-problemas)

---

## 📦 Preparación del Proyecto

### Paso 1: Verificar que el proyecto funciona localmente

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre `http://localhost:5173` y verifica que todo funciona correctamente.

### Paso 2: Crear build de producción

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos optimizados para producción.

---

## 💾 Qué Copiar en USB

### ✅ **ARCHIVOS Y CARPETAS A COPIAR:**

```
revISO/
├── src/                          ✅ TODA la carpeta src
├── index.html                    ✅ Archivo raíz
├── vite.config.ts                ✅ Configuración de Vite
├── package.json                  ✅ Dependencias del proyecto
├── package-lock.json              ✅ Lock file (opcional pero recomendado)
├── tailwind.config.js            ✅ Si existe
├── tsconfig.json                  ✅ Si existe
├── .gitignore                     ✅ Archivo de exclusión
├── favicon.svg                    ✅ Favicon
└── GUIA_DESPLIEGUE.md            ✅ Esta guía
```

### ❌ **ARCHIVOS Y CARPETAS QUE NO DEBES COPIAR:**

```
revISO/
├── node_modules/                 ❌ NO copiar (muy pesado, se reinstala)
├── dist/                         ❌ NO copiar (se genera con npm run build)
├── .vscode/                      ❌ NO copiar (configuración del IDE)
├── .idea/                        ❌ NO copiar (configuración del IDE)
├── *.log                         ❌ NO copiar (archivos de log)
├── *.tmp                         ❌ NO copiar (archivos temporales)
├── migrations/                   ❌ NO copiar (si no lo usas)
└── scripts/                      ❌ NO copiar (scripts temporales)
```

### 📝 **Archivos Opcionales (decide según necesidad):**

```
revISO/
├── Lista de verificacion 9001-2015.xls  ⚠️ Opcional (archivo fuente)
├── *.md (documentación)                  ⚠️ Opcional (pero útil)
└── README.md                             ⚠️ Recomendado crear uno
```

### 💡 **Resumen Rápido:**

**Copia SOLO:**
- Todo el código fuente (`src/`)
- Archivos de configuración (`package.json`, `vite.config.ts`, etc.)
- Archivos estáticos (`index.html`, `favicon.svg`)
- `.gitignore`

**NO copies:**
- `node_modules/` (se reinstala con `npm install`)
- `dist/` (se genera con `npm run build`)
- Archivos temporales o de IDE

---

## ⚙️ Configuración para GitHub Pages

### Paso 1: Actualizar `vite.config.ts`

El archivo ya está configurado, pero verifica que tenga esta estructura:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  // IMPORTANTE: Agregar base para GitHub Pages
  base: '/reviso-frontend/', // Cambia esto por el nombre de tu repositorio
});
```

**⚠️ IMPORTANTE:** Cambia `/reviso-frontend/` por el nombre real de tu repositorio en GitHub.

### Paso 2: Actualizar `package.json`

Agrega un script para el despliegue:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Paso 3: Instalar `gh-pages` (opcional, método alternativo más abajo)

```bash
npm install --save-dev gh-pages
```

---

## 🌐 Despliegue en GitHub Pages

### **Método 1: Usando GitHub Actions (Recomendado)**

Este método es automático y se ejecuta cada vez que haces push.

#### Paso 1: Crear carpeta `.github/workflows/`

```bash
mkdir -p .github/workflows
```

#### Paso 2: Crear archivo `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # o 'master' según tu rama principal

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Paso 3: Habilitar GitHub Pages en el repositorio

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

#### Paso 4: Hacer commit y push

```bash
git add .
git commit -m "Configurar despliegue en GitHub Pages"
git push origin main
```

GitHub Actions construirá y desplegará automáticamente tu sitio.

---

### **Método 2: Usando gh-pages (Manual)**

#### Paso 1: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

#### Paso 2: Actualizar `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### Paso 3: Ejecutar despliegue

```bash
npm run deploy
```

#### Paso 4: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En **Source**, selecciona la rama `gh-pages` y carpeta `/ (root)`
4. Guarda los cambios

---

### **Método 3: Subir carpeta `dist/` manualmente**

#### Paso 1: Generar build

```bash
npm run build
```

#### Paso 2: Subir carpeta `dist/` a GitHub

1. Crea una nueva rama llamada `gh-pages`:

```bash
git checkout -b gh-pages
```

2. Copia el contenido de `dist/` a la raíz del repositorio:

```bash
# En Windows PowerShell
Copy-Item -Path dist\* -Destination . -Recurse -Force

# En Linux/Mac
cp -r dist/* .
```

3. Haz commit y push:

```bash
git add .
git commit -m "Desplegar en GitHub Pages"
git push origin gh-pages
```

4. Configura GitHub Pages:
   - Ve a **Settings** → **Pages**
   - Selecciona rama `gh-pages` y carpeta `/ (root)`

---

## ✅ Verificación

Después del despliegue, tu sitio estará disponible en:

```
https://[tu-usuario].github.io/[nombre-repositorio]/
```

Por ejemplo:
```
https://johndoe.github.io/reviso-frontend/
```

### Checklist de Verificación:

- [ ] El sitio carga correctamente
- [ ] Los estilos (Tailwind CSS) se aplican correctamente
- [ ] Las imágenes se muestran
- [ ] La navegación funciona
- [ ] El login funciona (con datos mock)
- [ ] Los dashboards se muestran correctamente

---

## 🔧 Solución de Problemas

### Problema: Las rutas no funcionan (404 al navegar)

**Solución:** Verifica que el `base` en `vite.config.ts` coincida con el nombre de tu repositorio.

### Problema: Los estilos no se cargan

**Solución:** 
1. Verifica que `base` en `vite.config.ts` esté configurado
2. Reconstruye el proyecto: `npm run build`
3. Verifica que los archivos CSS estén en `dist/`

### Problema: Las imágenes no se muestran

**Solución:** 
1. Verifica las rutas de las imágenes en el código
2. Asegúrate de que las imágenes estén en `src/assets/`
3. Reconstruye: `npm run build`

### Problema: Error 404 en GitHub Pages

**Solución:**
1. Verifica que GitHub Pages esté habilitado en Settings
2. Espera unos minutos (puede tardar hasta 10 minutos)
3. Verifica que la rama `gh-pages` o `main` tenga los archivos correctos

### Problema: El sitio muestra contenido en blanco

**Solución:**
1. Abre la consola del navegador (F12)
2. Revisa los errores en la consola
3. Verifica que todas las rutas sean relativas (no absolutas)
4. Reconstruye: `npm run build`

---

## 📝 Notas Importantes

1. **Base Path:** El `base` en `vite.config.ts` DEBE coincidir con el nombre de tu repositorio en GitHub.

2. **Rutas Relativas:** Asegúrate de usar rutas relativas en tu código, no absolutas.

3. **Variables de Entorno:** Si usas variables de entorno, configúralas en GitHub Secrets (Settings → Secrets).

4. **Actualizaciones:** Cada vez que hagas cambios y quieras actualizar el sitio:
   - Haz commit y push (si usas GitHub Actions)
   - O ejecuta `npm run deploy` (si usas gh-pages)

5. **Privacidad:** GitHub Pages es público por defecto. Si necesitas privacidad, considera usar GitHub Pages con repositorio privado (requiere GitHub Pro) o usar otro servicio.

---

## 🎯 Resumen Rápido

1. **Preparar proyecto:** `npm install` → `npm run build`
2. **Copiar en USB:** Solo código fuente y configs (sin `node_modules/` ni `dist/`)
3. **Configurar:** Actualizar `vite.config.ts` con `base: '/nombre-repo/'`
4. **Desplegar:** Usar GitHub Actions (recomendado) o gh-pages
5. **Verificar:** Acceder a `https://[usuario].github.io/[repo]/`

---

## 📞 Contacto y Soporte

Si tienes problemas, revisa:
- La consola del navegador (F12)
- Los logs de GitHub Actions (si usas ese método)
- La documentación de Vite: https://vitejs.dev/guide/static-deploy.html#github-pages

---

**¡Listo! Tu proyecto RevISO estará disponible para compartir con tus compañeros.** 🎉

