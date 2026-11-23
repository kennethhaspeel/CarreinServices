"use client";

import { useEffect, useState, useRef } from "react";

export function FotoPreview({
  foto,
  onRemove,
  disabled,
}: {
  foto: File;
  onRemove: () => void;
  disabled: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [mislukteFoto, setMislukteFoto] = useState<File | null>(null);
  const fout = mislukteFoto === foto;

  useEffect(() => {
    const objectUrl = URL.createObjectURL(foto);
    const img = imgRef.current;

    if (img) img.src = objectUrl;

    return () => {
      img?.removeAttribute("src");
      URL.revokeObjectURL(objectUrl);
    };
  }, [foto]);

  return (
    <li className="overflow-hidden rounded-md border border-white/20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        alt={`Voorbeeld van ${foto.name}`}
        hidden={fout}
        onError={() => setMislukteFoto(foto)}
        className="h-32 w-full object-cover"
      />

      {fout && (
        <div className="flex h-32 items-center justify-center bg-white/10 p-2 text-center text-sm">
          Geen voorbeeld beschikbaar
        </div>
      )}

      <p className="truncate p-2 text-sm" title={foto.name}>
        {foto.name}
      </p>

      <button
        type="button"
        onClick={onRemove}
        disabled={disabled}
        aria-label={`${foto.name} verwijderen`}
        className="m-2 rounded-md border border-white/40 px-3 py-1 text-sm hover:bg-white/10 disabled:opacity-50"
      >
        Verwijderen
      </button>
    </li>
  );
}