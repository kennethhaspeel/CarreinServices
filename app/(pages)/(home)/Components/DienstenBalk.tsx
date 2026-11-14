
import StoffenZetel from "../afbeeldingen/StoffenZetel.png";
import LederenZetel from "../afbeeldingen/LederenZetel.png";
import Stoelen from "../afbeeldingen/Stoelen.png";
import Tapijt from "../afbeeldingen/Tapijt.png";
import matras from "../afbeeldingen/Matras.png";
import AutoInterieur from "../afbeeldingen/AutoInterieur.png";
import OpritTerras from "../afbeeldingen/OpritTerras.png";
import DienstenBalkKaart from "./DienstenBalkKaart";
import Tuinmeubelen from "../afbeeldingen/Tuinmeubelen.png";
export default function DienstenBalk() {
    const diensten = [
        {
            titel: "Stoffen Zetels",
            afbeelding: StoffenZetel,
            omschrijving: "Dieptereiniging en impregneren van stoffen zetels. Verwijdert vlekken, geurtjes en allergenen",
            url: "diensten/stoffenzetel"
        },
        {
            titel: "Lederen Zetels",
            afbeelding: LederenZetel,
            omschrijving: "Reinigen, voeden en beschermen van lederen zetels. Houdt het leder soepel en voorkomt kraken",
            url: "diensten/lederenzetel"
        },
        {
            titel:"Stoelen",
            afbeelding: Stoelen,
            omschrijving: "Reinigen en beschermen van eetkamerstoelen, bureaustoelen en andere stoelen",
            url: "diensten/stoelen"
        },
        {
            titel: "Tapijt",
            afbeelding: Tapijt,
            omschrijving: "Grondige reiniging van tapijten en vloerkleden. Verwijdert vuil, vlekken en geurtjes",
            url: "diensten/tapijten"
        },
        {
            titel: "Matras",
            afbeelding: matras,
            omschrijving: "Dieptereiniging van matrassen. Verwijdert stof, vuil en allergenen voor een frisse nachtrust",
            url: "diensten/matrassen"
        },
        {
            titel: "Auto Interieur",
            afbeelding: AutoInterieur,
            omschrijving: "Reinigen en beschermen van het interieur van auto's. Verwijdert vuil, vlekken en geurtjes",
            url: "diensten/autointerieur"
        },
        {
            titel: "Oprit & Terras",
            afbeelding: OpritTerras,
            omschrijving: "Reinigen van opritten en terrassen. Verwijdert vuil, mos en vlekken voor een frisse uitstraling",
            url: "diensten/oprittenterrassen"
        },
        {
            titel: "Tuinmeubilair",
            afbeelding: Tuinmeubelen,
            omschrijving: "Reinigen en beschermen van tuinmeubilair. Verwijdert vuil, vlekken en geurtjes",
            url: "diensten/tuinmeubilair"
        }
    ]
  return (
    <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-2">
      {
        diensten.map((dienst, index) => (
          <DienstenBalkKaart 
            key={index}
            titel={dienst.titel}
            afbeelding={dienst.afbeelding}
            omschrijving={dienst.omschrijving}
            url={dienst.url}
          />
        ))
      }
    </div>
    </>
  );
}