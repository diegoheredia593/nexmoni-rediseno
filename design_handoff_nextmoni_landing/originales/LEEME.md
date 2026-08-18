# Originales fotográficos

Los tres masters tal y como se generaron, antes de procesar. Viven aquí y no
en `src/` porque `src/` lo recorren TypeScript y el rastreo de Tailwind, y
porque estos archivos no entran en el build: lo que sirve el sitio son los
derivados de `public/foto/`.

| Archivo | Qué es | Derivado |
|---|---|---|
| `hero-figura.png` | Figura recortada sobre transparencia, 1792×2400 | `public/foto/hero-figura.webp` |
| `hero-fondo.jpeg` | Fondo de yeso, 1792×2400 | `public/foto/hero-fondo.webp` |
| `testimonio.jpeg` | Retrato, 1792×2400 | `public/foto/testimonio.webp` |

El procesado fue: desaturar (la cuantización a paleta del PNG había dejado
desviaciones de color de hasta 44 niveles), redimensionar y convertir a WebP.
El retrato además se recortó a 1:1 centrado en el rostro, no en el encuadre.
De 7,7 MB a 288 KB.

**Son imágenes generadas por IA, no fotografía.** Conviene conservar aquí los
prompts y la fecha por si alguien pregunta de dónde salieron: hay
jurisdicciones europeas que empujan hacia etiquetar contenido sintético en
comunicación comercial, y esta es la web de un distribuidor de una EMI.
