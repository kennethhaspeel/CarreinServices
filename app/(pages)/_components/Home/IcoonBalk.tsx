import Image from "next/image";

const iconen = [
  { src: "/images/iconen/01_zetels_en_salons.png", label: "Zetels en salons", width: 297, height: 222 },
  { src: "/images/iconen/02_tapijten.png", label: "Tapijten", width: 252, height: 228 },
  { src: "/images/iconen/03_matrassen.png", label: "Matrassen", width: 289, height: 221 },
  { src: "/images/iconen/04_auto-interieur.png", label: "Auto-interieur", width: 292, height: 223 },
  { src: "/images/iconen/05_stoelen.png", label: "Stoelen", width: 195, height: 248 },
  { src: "/images/iconen/06_opritten_en_terrassen.png", label: "Opritten en terrassen", width: 306, height: 243 },
  { src: "/images/iconen/07_tuinmeubelen.png", label: "Tuinmeubelen", width: 306, height: 232 },
];

export default function IcoonBalk() {
  return (
    <div className="flex flex-nowrap items-stretch bg-background px-4 py-6 text-white sm:px-6 lg:px-8">
      {iconen.map((icoon) => (
        <div
          key={icoon.src}
          className="flex min-w-0 flex-1 flex-col items-center justify-between border-l border-white/20 px-1 first:border-l-0 sm:px-2"
        >
          <Image
            src={icoon.src}
            alt={icoon.label}
            width={icoon.width}
            height={icoon.height}
            className="h-8 w-auto max-w-full object-contain sm:h-12 lg:h-16"
          />
          <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-wide sm:text-sm lg:text-base">
            {icoon.label}
          </p>
        </div>
      ))}
    </div>
  );
}