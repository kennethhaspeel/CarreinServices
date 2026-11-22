// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const basisUrl = "https://carreinservices.be";

  return [
    { url: basisUrl },
    { url: `${basisUrl}/voor-na` },
    { url: `${basisUrl}/over-carrein` },
    { url: `${basisUrl}/faq` },
    { url: `${basisUrl}/contact` },
    { url: `${basisUrl}/diensten/autointerieur` },
    { url: `${basisUrl}/diensten/lederenzetel` },
    { url: `${basisUrl}/diensten/matrassen` },
    { url: `${basisUrl}/diensten/oprittenterrassen` },
    { url: `${basisUrl}/diensten/stoelen` },
    { url: `${basisUrl}/diensten/stoffenzetel` },
    { url: `${basisUrl}/diensten/tapijten` },
    { url: `${basisUrl}/diensten/tuinmeubilair` },
  ];
}
