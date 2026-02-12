# 🏠 RentaOK - Landing Page

Landing page profesional para **RentaOK**, sistema de gestión del ciclo mensual del alquiler.

## 📋 Descripción

RentaOK ordena el ciclo mensual del alquiler mediante un sistema digital que organiza información, automatiza notificaciones con criterio y registra pagos con trazabilidad clara.

**No reemplaza contratos. No ofrece asesoramiento legal. No garantiza cobros.**

Su función: **eliminar desorden, olvidos y fricción operativa.**

## 🎨 Características

- ✅ Diseño profesional y moderno
- ✅ Colores de marca (Azul #2563EB y Verde #10B981)
- ✅ Responsive design completo
- ✅ Animaciones suaves al scroll
- ✅ Formulario de contacto funcional
- ✅ Secciones estratégicas optimizadas para conversión

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/rentaok-landing.git
cd rentaok-landing
```

2. **Abrir la landing page**
- Opción 1: Doble click en `index.html`
- Opción 2: Usar un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

3. **Acceder en el navegador**
```
http://localhost:8000
```

## 📁 Estructura del Proyecto

```
rentaok-landing/
├── index.html              # Página principal
├── styles.css              # Estilos
├── script.js               # JavaScript
├── assets/                 # Recursos visuales
│   ├── logo.svg
│   ├── hero-image.svg
│   ├── problem-desk.svg
│   ├── solution-screens.svg
│   ├── screenshot-dashboard.svg
│   └── screenshot-payments.svg
├── .gitignore
└── README.md
```

## 🎯 Secciones de la Landing

1. **Hero** - Mensaje principal de valor
2. **El Problema** - Desorden operativo en la gestión de alquileres
3. **La Solución** - Cómo RentaOK transforma el desorden
4. **Cómo Funciona** - Flujo de trabajo en 6 pasos
5. **Capacidades** - Funcionalidades principales del sistema
6. **Screenshots** - Vistas del panel operativo
7. **Beneficios** - Resultados concretos
8. **Transparencia** - Límites claros del sistema
9. **CTA Final** - Formulario de contacto
10. **Footer** - Información legal y enlaces

## ✏️ Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #2563EB;    /* Azul principal */
    --color-secondary: #10B981;  /* Verde secundario */
}
```

### Reemplazar Imágenes
1. Guarda tus imágenes en la carpeta `assets/`
2. Actualiza las referencias en `index.html`

### Conectar Formulario
Edita `script.js` línea 21 para conectar con tu backend o servicio de email.

## 🌐 Deploy

### GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu sitio estará disponible en: `https://tu-usuario.github.io/rentaok-landing/`

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el build (no es necesario para este proyecto estático)
3. Deploy automático

### Vercel
```bash
npm i -g vercel
vercel
```

## 📝 Identidad de Marca

Esta landing sigue fielmente el documento maestro de identidad de RentaOK:

- **Tono**: Claro, directo, pedagógico, confiable
- **Mensaje central**: ORDEN, no magia
- **Evita**: Lenguaje inflado, promesas exageradas, términos técnicos
- **Comunica**: Utilidad, control, previsibilidad

## 🤝 Contribuir

Si quieres mejorar la landing:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega nueva sección'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

© 2025 RentaOK by Mentora. Todos los derechos reservados.

---

**Desarrollado con** ❤️ **siguiendo las mejores prácticas de diseño web moderno**
