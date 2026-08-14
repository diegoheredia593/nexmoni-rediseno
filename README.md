# webapp

Repositorio de trabajo para la landing de **NextMoni**.

## Contenido actual

- `design_handoff_nextmoni_landing/` — handoff de diseño de la landing (v1c-f1a "Acero / Halftone").
  - `README.md` — especificación completa: tokens, tipografía, secciones, interacciones, datos de contenido y pendientes.
  - `design/NextMoni - Halftone (standalone).html` — build de un solo archivo; ábrelo en el navegador para ver el render real.
  - `design/NextMoni v1c-f1a - Halftone.dc.html` + `design/support.js` — fuente del prototipo (runtime interno, solo referencia; no portar).

Los archivos de `design/` son **referencias de diseño**, no código de producción. La implementación aún no ha comenzado.

## Siguientes pasos sugeridos

1. Elegir stack (Next.js App Router o Astro + Tailwind) e inicializar el proyecto.
2. Extraer el contenido (`steps`, `features`, `stats`, `plans`, `fees`, `terminology`, `security`, `fields`, `footer`, glosario) a un archivo de contenido.
3. Construir las secciones §01–§07 con el sistema de hairlines y los tokens del handoff.
4. Definir breakpoints responsive, conectar el formulario y sustituir los placeholders animados por fotografía en halftone.
