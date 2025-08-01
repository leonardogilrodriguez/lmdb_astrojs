# LMDB AstroJS Project

Aplicación web para explorar películas/series, desarrollada con Astro y React.

## Características principales
- Búsqueda de contenido multimedia
- Detalles de películas, series y personas
- Diseño responsive con módulos CSS
- Enrutamiento dinámico para páginas de detalles
- Integración con API externa (implícito por estructura de código)

## 🚀 Instalación y uso

1. Clonar repositorio
```bash
git clone https://github.com/LennyGR/lmdb_astrojs.git
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar servidor de desarrollo
```bash
npm run dev
```

## Tecnologías principales
- Astro (v5.1.1)
- React (v19)
- Módulos CSS
- Enrutamiento dinámico
- Componentes Astro/React

## Estructura clave
```
/src
├── components/     # Componentes reutilizables
├── pages/          # Enrutamiento automático
├── API/            # Lógica de servicios
├── reactjs/        # Componentes React específicos
└── layouts/        # Plantillas de página
```

## Mejoras futuras
- Implementar sistema de caché para API
- Añadir testing con Playwright
- Internacionalización (i18n)
- Optimizar carga de imágenes (source sets)
- Mejoras CSS con Tailwind
- Virtualizar listados largos
- Mejoras de SEO (figure...)
- Más islas
- Dockerización

📌 **Nota:** Requiere variables de entorno para configuración de API (ver .env.example)
