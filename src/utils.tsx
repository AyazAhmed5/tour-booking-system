import PerezArtMuseam from "./assets/Perez-museam.png";
import HardRockStadium from "./assets/HardRock Stadium.png";
import MathesonHammockPark from "./assets/Matheson Hammock Park.png";
import TheWharfMuseam from "./assets/The Whard Miami.png";
import MiamiTower from "./assets/Miami Tower.png";
import SkyviewMiami from "./assets/Skyviews Miami.png";

interface Tour {
  id: string;
  tourLocation: string;
  imgSource: string;
  tourDescription: string;
  tourCost: string;
  tourDuration: string;
}

// Use the interface with the toursData array
export const toursData: Tour[] = [
  {
    id: "1",
    tourLocation: "Perez Art Museam Miami",
    imgSource: PerezArtMuseam,
    tourDescription:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami",
    tourCost: "$50-$200",
    tourDuration: "3 Days",
  },
  {
    id: "2",
    tourLocation: "Hard Rock Stadium",
    imgSource: HardRockStadium,
    tourDescription:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city...",
    tourCost: "$50-$200",
    tourDuration: "1 Days",
  },
  {
    id: "3",
    tourLocation: "Matheson Hammock Park",
    imgSource: MathesonHammockPark,
    tourDescription:
      "Matheson Hammock Park is a 630 acres urban park in metropolitan Miami at 9610 Old...",
    tourCost: "$50-$80",
    tourDuration: "2 Days",
  },
  {
    id: "4",
    tourLocation: "The Wharf Miami",
    imgSource: TheWharfMuseam,
    tourDescription:
      "An all new outdoor pop-up event space anchored with live music, eats, cocktails...",
    tourCost: "$50-$100",
    tourDuration: "4 Days",
  },
  {
    id: "5",
    tourLocation: "Miami tower",
    imgSource: MiamiTower,
    tourDescription:
      "The Miami Tower is a 47-story, landmark office skyscraper in Miami, Florida, United States. It is located in central Downtown.  It is located in central Downtown.",
    tourCost: "$50-$150",
    tourDuration: "2 Days",
  },
  {
    id: "6",
    tourLocation: "Skyviews Miami",
    imgSource: SkyviewMiami,
    tourDescription:
      "Views of Biscayne Bay & the downtown Miami skyline from climate-controlled glass gondolas....",
    tourCost: "$50-$200",
    tourDuration: "2 Days",
  },
];
