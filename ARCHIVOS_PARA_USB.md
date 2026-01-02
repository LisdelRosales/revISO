# 📦 Lista de Archivos para Copiar en USB

## ✅ COPIAR ESTOS ARCHIVOS Y CARPETAS

```
revISO/
├── src/                          ✅ TODA la carpeta (código fuente completo)
│   ├── app/
│   ├── assets/
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html                    ✅ Archivo HTML principal
├── vite.config.ts                ✅ Configuración de Vite
├── package.json                  ✅ Dependencias del proyecto
├── package-lock.json             ✅ Lock file (recomendado)
├── .gitignore                    ✅ Archivo de exclusión
├── favicon.svg                   ✅ Favicon
│
├── GUIA_DESPLIEGUE.md            ✅ Guía de despliegue
├── README.md                     ✅ Documentación básica
└── ARCHIVOS_PARA_USB.md          ✅ Este archivo
```

## ❌ NO COPIAR ESTOS ARCHIVOS Y CARPETAS

```
revISO/
├── node_modules/                 ❌ NO copiar (muy pesado, ~500MB+)
├── dist/                         ❌ NO copiar (se genera con npm run build)
├── build/                        ❌ NO copiar (si existe)
│
├── .vscode/                      ❌ NO copiar (configuración del IDE)
├── .idea/                        ❌ NO copiar (configuración del IDE)
├── .git/                         ❌ NO copiar (historial de git)
│
├── *.log                         ❌ NO copiar (archivos de log)
├── *.tmp                         ❌ NO copiar (archivos temporales)
├── *.cache                       ❌ NO copiar (archivos de caché)
│
├── migrations/                   ❌ NO copiar (si no lo usas)
└── scripts/                      ❌ NO copiar (scripts temporales)
```

## ⚠️ ARCHIVOS OPCIONALES (decide según necesidad)

```
revISO/
├── Lista de verificacion 9001-2015.xls  ⚠️ Opcional (archivo fuente Excel)
├── *.md (documentación adicional)        ⚠️ Opcional (pero útil)
└── .github/                              ⚠️ Opcional (workflows de GitHub)
```

## 📊 Tamaño Aproximado

- **Con `src/` y archivos de configuración:** ~2-5 MB
- **Con `node_modules/`:** ~500+ MB ❌ NO RECOMENDADO

## ✅ Checklist Antes de Copiar

- [ ] Verificar que `src/` esté completo
- [ ] Verificar que `package.json` esté presente
- [ ] Verificar que `vite.config.ts` esté presente
- [ ] Verificar que `index.html` esté presente
- [ ] Verificar que `.gitignore` esté presente
- [ ] NO incluir `node_modules/`
- [ ] NO incluir `dist/`
- [ ] NO incluir archivos temporales

## 🔄 Después de Copiar en USB

1. **En la computadora destino:**
   ```bash
   # Navegar a la carpeta del proyecto
   cd revISO
   
   # Instalar dependencias
   npm install
   
   # Verificar que funciona
   npm run dev
   ```

2. **Para desplegar en GitHub Pages:**
   - Seguir las instrucciones en `GUIA_DESPLIEGUE.md`

## 💡 Notas Importantes

- **`node_modules/`** se regenera con `npm install`, no es necesario copiarlo
- **`dist/`** se genera con `npm run build`, no es necesario copiarlo
- Los archivos de configuración del IDE (`.vscode/`, `.idea/`) son específicos de cada desarrollador
- El archivo `.gitignore` asegura que no se suban archivos innecesarios a Git

---

**Tamaño total estimado:** ~2-5 MB (sin `node_modules/`)

