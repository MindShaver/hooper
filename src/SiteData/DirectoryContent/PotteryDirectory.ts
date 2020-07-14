import { IGridItem } from "../../Domain/IGridItem";

export const PotteryDirectory: IGridItem[] = [
  {
    linkTo: "/mugs",
    imgPath: process.env.PUBLIC_URL + "/images/home-image-three.png",
    altText: "Coffee Mug",
    title: "Mugs",
  },
  {
    linkTo: "/platters-and-more",
    imgPath: process.env.PUBLIC_URL + "/images/home-image-two.png",
    altText: "Platter",
    title: "Planters, Platters, and Plenty More",
  },
];
