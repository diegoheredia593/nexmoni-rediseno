import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Configuración del adaptador de Cloudflare.
 *
 * Se deja al mínimo a propósito. Este sitio no tiene ISR ni revalidación: son
 * 23 páginas estáticas más un route handler que no cachea nada, así que no
 * hace falta declarar caché incremental ni colas.
 */
export default defineCloudflareConfig();
