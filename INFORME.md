# Informe de Laboratorio 6.1: Despliegue de Sitio Web Estático con CI/CD

**Estudiante:** Valeria Alexandra Cuellar Coca
**Proyecto:** React App - Despliegue Automatizado

## 1. Descripción del Proyecto y Pipeline

Se ha utilizado una aplicación web en React construida con **Vite**. La infraestructura y despliegue están completamente automatizados mediante un pipeline de CI/CD con **GitHub Actions**. Al procesarse un evento `push` en la rama principal (`main` o `master`), el workflow aprovisiona un entorno Node.js, realiza la compilación estática de la interfaz de usuario (`dist/`), sincroniza los elementos con un bucket optimizado en **Amazon S3** e invalida la caché perimetral de **Amazon CloudFront** de manera automática para garantizar la entrega inmediata de contenido seguro mediante HTTPS.

## 2. Evidencias del Proceso

### A. Configuración de Alojamiento en Amazon S3
![Bucket S3 Configurado](./img/captura_s3.png)

### B. Secretos y Variables de Entorno en GitHub Actions
![Secretos de GitHub Actions](./img/captura_github_secrets.png)

### C. Historial de Pipelines Exitosos e Invalidación
![Workflow Exitoso](./img/captura_actions_success.png)

### D. Distribución Activa de CloudFront
![Distribución CloudFront](./img/captura_cloudfront.png)

## 3. Direcciones URL de Acceso Público

- **Punto de Enlace de S3:** `[INSERTA_TU_URL_DE_S3_AQUI]`
- **URL Pública Segura (CloudFront CDN):** `[INSERTA_TU_URL_DE_CLOUDFRONT_AQUI]`

## 4. Conclusiones

1. **Eficiencia en Arquitecturas Serverless:** El uso combinatorio de aplicaciones de una sola página (SPA) en React con servicios gestionados de almacenamiento en la nube mitiga por completo los costes operativos de servidores tradicionales, garantizando alta disponibilidad.
2. **Ciclo de Entrega Continuo Optimizado:** La automatización de la invalidación de la caché perimetral (`cloudfront create-invalidation`) soluciona las problemáticas comunes de retención de versiones antiguas en CDN, garantizando consistencia de datos global en cada despliegue.
