interface IPotteryData {
  linkTo: string;
  coverImage: string;
  description: string;
  altText: string;
}

export const PotteryData: IPotteryData[] = [
  {
    linkTo: "/mugs",
    coverImage: process.env.PUBLIC_URL + "/images/home-image-three.png",
    altText: "Coffee Mug",
    description: "Mugs",
  },
  {
    linkTo: "/platters-and-more",
    coverImage: process.env.PUBLIC_URL + "/images/home-image-two.png",
    altText: "Platter",
    description: "Planters, Platters, and Plenty More",
  },
];
