import { AppStoreButton } from "@/components/ui/app-store-button";
import { PlayStoreButton } from "@/components/ui/play-store-button";
import { storeUrl } from "@/content/brand";
import type { Dictionary } from "@/content/dictionary";

/**
 * Botones de las tiendas de aplicaciones — el final del embudo.
 *
 * ⚠ ESTOS SIGUEN SIN SER LOS DISTINTIVOS OFICIALES. Llevan la manzana y el
 *   triángulo de Play redibujados en SVG, no los archivos que Apple y Google
 *   publican en sus páginas de recursos de marca. Ambas exigen el distintivo
 *   oficial con sus proporciones y su espacio libre mínimo, y prohíben
 *   expresamente recomponerlo. Sigue pendiente antes de publicar.
 *
 * Mientras `stores.published` sea `false` no hay ficha a la que enlazar: el
 * botón se pinta deshabilitado y el rótulo superior anuncia que llega pronto,
 * en vez de prometer una descarga que no existe.
 */
export function StoreButtons({ dict, size = "lg" }: { dict: Dictionary; size?: "lg" | "sm" }) {
  const t = dict.download;

  const appUrl = storeUrl("appStore");
  const playUrl = storeUrl("googlePlay");

  // En el pie los botones van algo más chicos que en la sección de descarga.
  const escala = size === "sm" ? "h-10" : "";

  return (
    <div className="stores">
      <AppStoreButton
        href={appUrl}
        className={escala}
        pre={appUrl ? t.appStorePre : t.soon}
        name={t.appStoreName}
        disabled={!appUrl}
      />
      <PlayStoreButton
        href={playUrl}
        className={escala}
        pre={playUrl ? t.googlePlayPre : t.soon}
        name={t.googlePlayName}
        disabled={!playUrl}
      />
    </div>
  );
}
