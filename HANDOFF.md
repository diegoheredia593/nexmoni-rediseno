# Traspaso de sesión — NexMoni

Este archivo recoge lo que **no** está en el código: decisiones tomadas, por
qué, y las trampas que solo se aprenden habiéndolas pisado. El `README.md`
explica cómo funciona el proyecto; esto explica cómo llegamos aquí y qué falta.

Última actualización: commit `e641947`.

---

## 1. Dónde está todo

| | |
|---|---|
| Repositorio | `diegoheredia593/webapp` |
| Rama de producción | `main` — es la que construye Vercel |
| Rama de trabajo | `claude/continue-dev-with-zip-ojh32x` |
| Despliegue | Vercel, equipo `nex`, proyecto `webapp` (plan Hobby) |

**Flujo de trabajo establecido:** se desarrolla en la rama de trabajo, se hace
push, y después `git checkout main && git merge --ff-only <rama> && git push`.
La fusión siempre ha sido de avance rápido. Vercel redespliega al recibir `main`.

### Documentos de esta sesión

- **Ruta a producción** — checklist de 77 tareas para publicar, con lo que
  bloquea marcado: https://claude.ai/code/artifact/bd3319ca-438c-4b25-b73f-5c988c76584e
- **Acero contra Linear** — análisis de diseño que originó el sistema actual:
  https://claude.ai/code/artifact/f7c85049-1269-4d5c-b246-31acdb73760a

Ambos siguen accesibles y se pueden leer con WebFetch.

---

## 2. Qué es esto

Landing de **NexMoni OÜ** (Estonia), distribuidor autorizado de **ConnectPay
UAB**, entidad de dinero electrónico con licencia EMI n.º 24 del Banco de
Lituania. Envíos de dinero desde Europa hacia Latinoamérica.

Next.js 15 (App Router), CSS propio, sin dependencias más allá del framework.
Cuatro idiomas, cuatro páginas, 16 páginas estáticas.

**El objetivo del embudo es la descarga de la aplicación móvil.**

---

## 3. Decisiones tomadas, y por qué

### Diseño: «Acero templado»

Nació de comparar el encargo original con el sistema de Linear. Se copió **la
disciplina** (contención, escala, un acento, aire) y **no la paleta**.

El razonamiento que convenció al cliente y conviene no perder: el lenguaje de
Linear —negro medianoche, acento ácido, Inter apretada— es hoy el uniforme del
software para desarrolladores (Vercel, Cursor, Raycast, Framer). **El público
de NexMoni son migrantes mandando dinero a casa**, muchos desde un Android de
gama baja con la pantalla al sol. El gris claro se lee mejor a plena luz y no
dice «esto no es para ti».

Existe una maqueta estática de esta dirección, entregada al cliente en zip
(`nexmoni-acero-templado`), hoy equivalente a lo que hay en `main`.

### Reglas que hay que respetar al añadir interfaz

1. **Un acento.** El óxido `#8d5217` solo en botones que ejecutan una acción.
   Hoy son cuatro por página. Números, etiquetas y distintivos van en gris.
   El original llegó a 37 referencias decorativas: ese fue el problema.
2. **Escala.** Nueve tamaños declarados en `globals.css`. **No inventar
   valores nuevos en píxeles**, y jamás medios píxeles.
3. **Contención.** Todo dentro de `.wrap` (1200 px). Solo la banda de cifras
   va a sangre.
4. **Radio 0** en todo. Es identidad del encargo, no un descuido.
5. **Nada de rejillas de tres tarjetas** salvo los planes, donde el patrón
   ayuda a comparar precios.

### Contenido

- **La marca es NexMoni**, no NextMoni. El dominio es `nexmoni.com`.
- **La licencia no es de NexMoni.** Es de ConnectPay UAB. Cualquier texto que
  dé a entender lo contrario es una declaración falsa ante el supervisor. Hubo
  que corregirlo en seis sitios. Hay un aviso en `content/locales/es.ts`.
- El español es la **fuente de la forma** del diccionario: si a una traducción
  le falta una clave, el build falla. Es intencionado.

---

## 4. Trampas que ya pisamos

**Vercel bloquea versiones vulnerables de Next.js.** El build sale verde y el
despliegue muere justo después con `Vulnerable version of Next.js detected`.
No es configuración. Se resuelve actualizando Next.

**El proyecto de Vercel se importó apuntando a `main` cuando `main` estaba
vacía**, así que el preset quedó en «Other» y falló. Ya está resuelto, pero si
alguna vez se recrea el proyecto: la rama debe tener `package.json` antes de
importar.

**`NEXT_PUBLIC_PREVIEW=1`** activa `noindex` y bloquea el rastreo. Hace falta
mientras la web sea una demo: la calculadora enseña tipos de cambio
orientativos y no debe indexarse. **Ojo:** la detección automática de Vercel no
salta, porque esta demo es el entorno de *producción* del proyecto.

**Nunca borrar `.next` con el servidor de desarrollo corriendo.** Se queda
sirviendo un CSS vacío y parece que la web está rota en todas las páginas.
Perdimos un rato diagnosticando un fallo que no existía.

**Los estilos en línea vencen a las media queries.** Dos veces apareció
desbordamiento horizontal en móvil por un `style={{ gridTemplateColumns }}`
que se saltaba la regla responsive. Si hay desbordamiento, sospechar de eso
primero.

**Los campos de formulario traen un ancho intrínseco** que impide encoger la
pista de una rejilla. Necesitan `min-width: 0` y `width: 100%`.

---

## 5. Lo que está a medias, con contexto

### Precios — la decisión pendiente más importante

Los corredores fuera de SEPA aplican el **SWIFT de 25 € fijos** del tarifario,
que es el único precio publicado para fuera de la zona euro. En un envío de
**200 € a Colombia el coste total sale 28,50 €, un 14 %**, y el ticket típico
de remesa está entre 100 y 300 €.

La calculadora lo enseña sin piedad, justo debajo de la tabla de tarifas. No es
un fallo de la web: es el tarifario delatándose. Propuse un tramo de remesa
(por ejemplo 1,5 % con mínimo 3 €) separado del SWIFT corporativo. **El cliente
lo dejó aparcado a propósito.**

### Cifras que son invención mía

- **Tipos de cambio** (`content/pricing.ts`): recogidos de prensa financiera el
  14-08-2026 y cruzados vía USD. Cinco (CLP, BOB, PYG, UYU, VES) son
  estimaciones sin cotización del día.
- **Diferenciales por par**: repartidos dentro de la banda 1–3 % que anuncia el
  tarifario, pero **son invención**. El diferencial es una decisión comercial;
  no hay forma de deducirlo.
- **Corredor VES cerrado a propósito**: el bolívar se mueve demasiado y tiene
  control de cambios. Sin proveedor, cualquier cifra estaría mal por un
  múltiplo.

Mientras `ratesArePlaceholder` sea `true`, la calculadora muestra el aviso.

### Traducciones

- **El lituano necesita revisión nativa.** Es el idioma del supervisor y la
  terminología regulada tiene redacción fijada en la normativa lituana. Aviso
  en la cabecera de `locales/lt.ts`.
- **El portugués es pt-PT.** Si el público son brasileños en Europa, hay que
  cambiar vocabulario y `numberLocale`.

### Tiendas de aplicaciones

Las fichas no existen. `stores.published` está en `false`, así que los
distintivos se muestran sin enlace y como «próximamente». Al publicar: pegar
las URL en `content/brand.ts` y poner `published: true`.

**Los distintivos actuales están compuestos con el sistema de la marca. Apple y
Google exigen los suyos oficiales.** Hay que sustituirlos antes de publicar.
El QR es un marcador porque no hay URL que codificar.

### Frontend: lo que la auditoría con navegador dejó sin hacer

Pasada con Chromium sobre las cuatro páginas, a 1440 y a 390 px. Sano: build
verde, cero errores de consola, cero desbordamiento horizontal, el menú
hamburguesa abre y sus objetivos táctiles miden 218×53. Se corrigió el cierre
del embudo. Quedaron dos cosas, ambas conscientes:

- **La FAQ no emite datos estructurados.** Cero bloques `application/ld+json`.
  Las respuestas ya están en el DOM dentro de `<details>`, así que emitir
  `FAQPage` es barato y es lo que habilita el resultado enriquecido.
- **La FAQ se ve vacía a 1440 px.** Ocho acordeones cerrados del mismo peso
  sobre el ancho completo. Es la página más floja para enseñar a un cliente.
  Recomponerla —agrupar por tema, abrir la primera, contener la columna de
  lectura— es el cambio con más riesgo de discusión, y por eso se aparcó.

### Legal — en pausa por decisión del cliente

Faltan Privacidad, Términos, AML/KYC y Quejas. **El cliente no tiene la
documentación todavía y pidió expresamente dejarlo en pausa**, con recordatorio
para más adelante. Las cuatro entradas del pie apuntan de momento a
`/#descargar`.

Es bloqueante para publicar: la FAQ ya promete respuesta a reclamaciones en 15
días hábiles, y el formulario recoge datos personales.

### Formulario

`/api/lead` valida y escribe en el log del servidor. **No envía a ninguna
parte**, y ahora promete enviar un enlace de descarga, así que la promesa es
concreta. Además hay que quitar ese `console.info`: son datos personales en
texto plano.

---

## 6. Qué haría a continuación

**Todo lo de abajo está en pausa esperando la aprobación del cliente sobre el
frontend.** Fue decisión expresa: primero que el cliente valide lo que se ve, y
después se toca la integración. Al retomar, conviene preguntar si esa
aprobación ya llegó antes de arrancar por el punto 1.

Por orden de lo que más desbloquea:

1. **Destino real del formulario.** Es lo único del embudo que está roto.
   Hay un proyecto de Supabase activo en la cuenta (`fgjsmmnlftoixannpiiy`),
   pero hoy aloja otras cosas y no se ha tocado: si se usa, la tabla `leads`
   necesita RLS cerrada e inserción solo desde el servidor.
2. **Cabeceras de seguridad y límite de peticiones.** El sitio ya es público.
3. **Decidir el tramo de remesa.** Sin eso, el tarifario contradice al producto.
4. **Search Console + Analytics con consentimiento** — pero el banner de
   cookies va *antes* que la analítica, no después.
5. Las páginas legales, cuando llegue la documentación.

La lista completa, con las 77 tareas y lo que bloquea marcado, está en el
artifact «Ruta a producción».

---

## 7. Cómo arrancar el chat nuevo

```
Trabajo en el repositorio diegoheredia593/webapp, rama
claude/continue-dev-with-zip-ojh32x. Lee HANDOFF.md y README.md antes de nada:
ahí está el estado del proyecto, las decisiones de diseño y lo que falta.
Desarrolla en esa rama y fusiona a main con --ff-only cuando quieras que
Vercel redespliegue.
```
