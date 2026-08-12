import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/codes", "/beginner-guide", "/seeds-and-crops", "/bank-and-money", "/land-expansion", "/chickens", "/updates", "/sources", "/about", "/privacy-policy", "/terms"];
  return routes.map((path) => ({ url: `${site.siteUrl}${path}`, lastModified: new Date("2026-08-11"), changeFrequency: path === "" || path === "/codes" || path === "/updates" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/codes" || path === "/beginner-guide" ? .9 : .7 }));
}
