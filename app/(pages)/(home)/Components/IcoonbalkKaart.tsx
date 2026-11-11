import { Icoon } from "@/app/types/IcoonSVG";

export default function IcoonbalkKaart({
  icoon,
}: {
  icoon: Icoon;
}) {
  return (
    <div className="relative  w-full  my-2 mx-2 px-2 py-3">
      <div className="flex flex-row">
        <div className="flex items-center justify-center">
          <icoon.icon />
        </div>
        <div className="flex flex-col px-3">
          <p className="mt-2 text-left text-white/85 font-extrabold">{icoon.titel}</p>
          <p className="mt-2 text-left text-white/85">{icoon.omschrijving}</p>
        </div>
      </div>
    </div>
  );
}
