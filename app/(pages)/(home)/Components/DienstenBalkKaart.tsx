import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function DienstenBalkKaart({titel,afbeelding,omschrijving,url}:{titel:string,afbeelding:StaticImageData,omschrijving:string,url:string}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-background text-white">
      <div className="relative aspect-2/1 w-full">
        <Image
          src={afbeelding}
          alt={titel}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-14 w-14 shrink-0"
        >
          <path d="M12 30V20a9 9 0 0 1 9-9h22a9 9 0 0 1 9 9v10" />
          <path d="M12 28a6 6 0 0 0-6 6v11h52V34a6 6 0 0 0-12 0v2H18v-2a6 6 0 0 0-6-6Z" />
          <path d="M11 45v6M53 45v6" />
        </svg> */}

        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-2xl font-bold">{titel}</h3>
          <p className="mt-2 text-base leading-relaxed text-white/85">
            {omschrijving}
          </p>

          <div className="mt-auto pt-5">
            <Link
              href={url}
              className="group inline-flex items-center gap-4 rounded-full border border-white/20 pr-6 font-semibold transition hover:border-[#087cff]"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0868ed] text-2xl transition group-hover:bg-[#0758cb]"
              >
                →
              </span>
              MEER INFO
              <span className="sr-only"> over {titel}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}