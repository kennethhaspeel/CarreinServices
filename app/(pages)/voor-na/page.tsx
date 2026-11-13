import { SliderComponent } from "./SliderComponent";
import after0 from "./Afbeeldingen/0-after.png";
import before0 from "./Afbeeldingen/0-before.png";
import after1 from "./Afbeeldingen/1-after.png";
import before1 from "./Afbeeldingen/1-before.png";
import after2 from "./Afbeeldingen/2-after.png";
import before2 from "./Afbeeldingen/2-before.png";
import after3 from "./Afbeeldingen/3-after.png";
import before3 from "./Afbeeldingen/3-before.png";
export default function VoorNaPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4">
        <div className="h-96 w-full">
          <SliderComponent foto_voor={before0} foto_na={after0} />
        </div>
        <div className="h-96 w-full">
          <SliderComponent foto_voor={before1} foto_na={after1} />
        </div>
        <div className="h-96 w-full">
          <SliderComponent foto_voor={before2} foto_na={after2} />
        </div>
        <div className="h-96 w-full">
          <SliderComponent foto_voor={before3} foto_na={after3} />
        </div>
      </div>
    </>
  );
}
