import PerezArtMuseam from "./assets/images/Perez-museam.png";
import HardRockStadium from "./assets/images/HardRock Stadium.png";
import MathesonHammockPark from "./assets/images/Matheson Hammock Park.png";
import TheWharfMuseam from "./assets/images/The Whard Miami.png";
import MiamiTower from "./assets/images/Miami Tower.png";
import SkyviewMiami from "./assets/images/Skyviews Miami.png";
import * as yup from "yup";

export interface TourType {
  id: string;
  tourLocation: string;
  imgSource: string;
  tourDescription: string;
  tourDescription1: string;
  tourDescription2: string;
  tourCost: string;
  tourDuration: string;
  startDate: string;
  endDate: string;
}

export const toursData: TourType[] = [
  {
    id: "1",
    tourLocation: "Perez Art Museam Miami",
    imgSource: PerezArtMuseam,
    tourDescription:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami. This iconic location houses contemporary and modern international art, showcasing the vibrant cultural spirit of Miami. Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "Visitors can explore immersive exhibitions and enjoy stunning views of Biscayne Bay from the outdoor terraces. The museum also offers a peaceful environment to relax and soak in the creative ambiance. This iconic stadium is the proud home of the Miami Dolphins and the Miami Hurricanes, offering fans an unparalleled experience with its modern amenities.",
    tourDescription2:
      "Don't miss the sculpture garden and the gift shop featuring unique art-inspired merchandise. This destination is perfect for art enthusiasts and families alike. The sculpture garden and cozy gift shop offer a delightful experience for visitors, making this destination perfect for a day filled with creativity and relaxation.",
    tourCost: "$200-$400",
    tourDuration: "3 Days",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
  {
    id: "2",
    tourLocation: "Hard Rock Stadium",
    imgSource: HardRockStadium,
    tourDescription:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city known for its electrifying atmosphere and grand events. Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "Home to the Miami Dolphins and the Miami Hurricanes, the stadium also hosts major concerts, international soccer games, and even the Miami Open tennis tournament. This iconic stadium is the proud home of the Miami Dolphins and the Miami Hurricanes, offering fans an unparalleled experience with its modern amenities.",
    tourDescription2:
      "With its state-of-the-art amenities and vibrant environment, it's a must-visit spot for sports fans and entertainment lovers. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourCost: "$50-$200",
    tourDuration: "1 Day",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
  {
    id: "3",
    tourLocation: "Matheson Hammock Park",
    imgSource: MathesonHammockPark,
    tourDescription:
      "Matheson Hammock Park is a 630-acre urban park in metropolitan Miami, offering a serene retreat from the bustling city. Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "The park features a man-made atoll pool that is flushed naturally with tidal action from Biscayne Bay, creating a perfect spot for swimming and picnicking.",
    tourDescription2:
      "Visitors can also enjoy scenic walking trails, marina access, and breathtaking sunset views, making it an excellent destination for nature lovers. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourCost: "$50-$200",
    tourDuration: "2 Days",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
  {
    id: "4",
    tourLocation: "The Wharf Miami",
    imgSource: TheWharfMuseam,
    tourDescription:
      "An all-new outdoor pop-up event space anchored with live music, food, and waterfront cocktails. The Wharf Miami is a vibrant venue that embodies the lively culture of the city. Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "This trendy spot features local food trucks, craft cocktails, and riverside seating, creating an unforgettable ambiance for both daytime and evening gatherings. This iconic stadium is the proud home of the Miami Dolphins and the Miami Hurricanes, offering fans an unparalleled experience with its modern amenities.",
    tourDescription2:
      "Perfect for socializing, dancing, and enjoying the Miami skyline, The Wharf is a great destination for anyone looking for a fun and memorable experience. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourCost: "$600-$800",
    tourDuration: "4 Days",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
  {
    id: "5",
    tourLocation: "Miami Tower",
    imgSource: MiamiTower,
    tourDescription:
      "The Miami Tower is a 47-story landmark skyscraper in central Downtown Miami, known for its stunning illuminated exterior and breathtaking views.Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "It features a sophisticated lighting system that displays mesmerizing light shows, making it one of Miami's most photographed landmarks. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourDescription2:
      "Inside, the tower offers premium office spaces, dining options, and panoramic views of the city skyline, making it a unique attraction for visitors. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourCost: "$200-$400",
    tourDuration: "3 Days",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
  {
    id: "6",
    tourLocation: "Skyviews Miami",
    imgSource: SkyviewMiami,
    tourDescription:
      "Skyviews Miami offers breathtaking views of Biscayne Bay and the downtown Miami skyline from its climate-controlled glass gondolas. Explore the immersive exhibitions showcasing works from world-renowned artists while enjoying breathtaking views of Biscayne Bay from the museum's terraces.",
    tourDescription1:
      "The observation wheel is a perfect spot for capturing incredible photos and enjoying a tranquil escape above the city. This iconic stadium is the proud home of the Miami Dolphins and the Miami Hurricanes, offering fans an unparalleled experience with its modern amenities.",
    tourDescription2:
      "With its convenient location and stunning vistas, Skyviews Miami is an ideal attraction for couples, families, and adventurers alike. The climate-controlled glass gondolas provide a comfortable ride as you take in stunning vistas, making it a must-visit for photographers and sightseers.",
    tourCost: "$50-$200",
    tourDuration: "2 Days",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
  },
];
export const priceRanges = [
  { value: "$50-$200", label: "$50 - $200" },
  { value: "$200-$400", label: "$200 - $400" },
  { value: "$400-$600", label: "$400 - $600" },
  { value: "$600-$800", label: "$600 - $800" },
  { value: "$800-$1000", label: "$800 - $1000" },
  { value: "$1000+", label: "$1000 Above" },
];

export const popularDestinations = [
  "Istanbul",
  "Dubai",
  "Miami",
  "Chicago",
  "Dallas",
  "Havana",
  "Berlin",
  "London",
  "Ankara",
  "Orlando",
  "Cape Town",
  "Santroni",
  "Madrid",
  "Lisbon",
  "New Orleans",
];

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(
      /^[A-Za-z\s-]+$/,
      "Name can only contain alphabets, spaces, and hyphens"
    )
    .max(50, "Name cannot exceed 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  adults: yup
    .number()
    .required("Number of adults is required")
    .min(1, "At least 1 adult is required")
    .max(9, "Maximum 9 adults"),
  children: yup
    .number()
    .min(0, "Number of children cannot be negative")
    .max(9, "Maximum 9 children"),
  paymentMethod: yup
    .string()
    .required("Payment method is required")
    .oneOf(["mastercard", "visa"], "Invalid payment method"),
});
