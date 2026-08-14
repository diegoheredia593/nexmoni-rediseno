import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  // En vista previa se bloquea el rastreo entero: una demo con tipos de cambio
  // orientativos no debe llegar a los buscadores.
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // La API no tiene nada que indexar.
      disallow: "/api/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
