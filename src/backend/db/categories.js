import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Car Mats",
    description: "featured category",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737759638/tim_logo_draft_1_towmh6.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Car Tyres",
    description: "featured category",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Vehicle Cleaners",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Car Lighting",
    description: "featured category",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Car Covers",
    description: "featured category",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Glass Cleaner",
    description: "car cleaning equipment",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Pressure Washer",
    description: "car cleaning equipment",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Air Purifiers",
    description: "car cleaning equipment",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
  {
    _id: uuid(),
    categoryName: "Vacuum Cleaner",
    description: "car cleaning equipment",
    image:
      "https://res.cloudinary.com/chameleon-techie/image/upload/v1737758879/COMING_SOON_iacpdb.png",
  },
];
