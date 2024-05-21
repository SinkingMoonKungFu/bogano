import { BlockBeltRankImage } from "../../components/01-atoms/BlockBeltRankImage";

export default {
  title: "Atoms/BlockBeltRankImage",
  component: BlockBeltRankImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const WhiteBelt = {
  args: {
    color: "white",
    description: "White Belt - Blank Page",
    image: "/images/whitebelt.jpg",
  },
};

export const OrangeBelt = {
  args: {
    color: "orange",
    description: "Orange Belt - Magma",
    image: "/images/orangebelt.jpg",
  },
};

export const YellowBelt = {
  args: {
    color: "yellow",
    description: "Yellow Belt - Minerals",
    image: "/images/yellowbelt.jpg",
  },
};

export const GreenBelt = {
  args: {
    color: "green",
    description: "Green Belt - Growth",
    image: "/images/greenbelt.jpg",
  },
};

export const BlueBelt = {
  args: {
    color: "blue",
    description: "Blue Belt - Water",
    image: "/images/bluebelt.jpg",
  },
};

export const RedBelt = {
  args: {
    color: "red",
    description: "Red Belt - Fire",
    image: "/images/redbelt.jpg",
  },
};

export const BlackBelt = {
  args: {
    color: "black",
    description: "Black Belt - Universe",
    image: "/images/blackbelt.jpg",
  },
};
