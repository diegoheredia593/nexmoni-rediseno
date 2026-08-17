import { storeUrl } from "@/content/brand";
import type { Dictionary } from "@/content/dictionary";

/**
 * Botones de las tiendas de aplicaciones — el final del embudo.
 *
 * ⚠ ANTES DE PUBLICAR: Apple y Google exigen sus distintivos oficiales, con
 *   su tipografía, su logotipo y sus márgenes mínimos. Estos están compuestos
 *   con el sistema de la marca porque las fichas aún no existen; hay que
 *   sustituirlos por los distintivos oficiales al publicar las aplicaciones.
 *
 * Mientras `stores.published` sea `false`, se muestran sin enlace y anunciados
 * como próximos, en vez de llevar a una página que no existe.
 */
export function StoreButtons({ dict, size = "lg" }: { dict: Dictionary; size?: "lg" | "sm" }) {
  const t = dict.download;

  const tiendas = [
    { id: "appStore" as const, pre: t.appStorePre, name: t.appStoreName },
    { id: "googlePlay" as const, pre: t.googlePlayPre, name: t.googlePlayName },
  ];

  return (
    <div className="stores">
      {tiendas.map((tienda) => {
        const url = storeUrl(tienda.id);
        const clase = `store store--${size}${url ? "" : " store--soon"}`;

        const contenido = (
          <>
            <span className="store__pre">{url ? tienda.pre : t.soon}</span>
            <span className="store__name">{tienda.name}</span>
          </>
        );

        return url ? (
          <a key={tienda.id} href={url} className={clase} rel="noopener">
            {contenido}
          </a>
        ) : (
          <span key={tienda.id} className={clase} aria-disabled="true">
            {contenido}
          </span>
        );
      })}
    </div>
  );
}
