import { ImageExplanation } from "../../components/02-molecules/ImageExplanation";

export default {
  title: "Molecules/ImageExplanation",
  component: ImageExplanation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const KungFu = {
  args: {
    image: "/images/KungFu.svg",
    size: "small",
    imageDescription: "Kung Fu Kanji",
    explanationParagraphs: [
      "The Chinese characters for 'Kung Fu'. The translation literally means 'hard work' or 'human effort'. Thus, anything can be 'kung fu'. In colloquial terms, we often refer to 'Kung Fu' to mean all Chinese martial arts, of which Wu Chi Ch'uan is a part.",
    ],
  },
};

export const Logo = {
  args: {
    image: "/images/smskf-logo.svg",
    size: "medium",
    imageDescription: "Sinking Moon School of Kung Fu Logo",
    explanationParagraphs: [
      "The logo of the Sinking Moon School of Kung Fu. This is used on all identifying communications and is symbolic of the school as a whole. It is sometimes used, in a modified format, for businesses related to the Sinking Moon School of Kung Fu (e.g. Sinking Moon Athletics, Sinking Moon Diversified). The breakdown of the symbology of the logo is explained below.",
    ],
  },
};

export const SnakeAndPhoenix = {
  args: {
    image: "/images/SnakePhoenix.svg",
    size: "medium",
    imageDescription: "Snake and Phoenix",
    explanationParagraphs: [
      "The Snake and Phoenix at the top of the logo represent the two styles of the founder of the Sinking Moon School of Kung Fu, Lao Shi Scott Johnson. They also embody the two opposing elemental forces of fire and water.",
    ],
  },
};

export const Heptagon = {
  args: {
    image: "/images/Heptagon.svg",
    size: "medium",
    imageDescription: "Heptagon Shape",
    explanationParagraphs: [
      "The shape of the Sinking Moon School of Kung Fu logo is a seven-sided polygon, a heptagon. The seven sides represent the seven precepts of Wu Chi Kung Fu.",
    ],
  },
};

export const Stars = {
  args: {
    image: "/images/Stars.svg",
    size: "medium",
    imageDescription: "36 Stars",
    explanationParagraphs: [
      "The 36 stars in the background of the heptagon represent the 36 vital striking points, a nod to esoteric secrets taught within the closed door chambers of the old temples.",
    ],
  },
};

export const Moon = {
  args: {
    image: "/images/Moon.svg",
    size: "medium",
    imageDescription: "Moon",
    explanationParagraphs: [
      "The moon embodies the Wu Chi circle. It also symbolizes the namesake of the school, taken from the names of our introductory forms: Rising Sun, Sinking Moon.",
    ],
  },
};

export const Water = {
  args: {
    image: "/images/Water.svg",
    size: "medium",
    imageDescription: "Water",
    explanationParagraphs: [
      "The moon is sinking into the water, representing the lakes of Minnesota, where our school was founded. The three sections of water also represent the three layers of chi development: Physical (human), Mental (earth), and Spiritual (heaven).",
    ],
  },
};
