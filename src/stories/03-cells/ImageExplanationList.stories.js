import { ImageExplanationList } from "../../components/03-cells/ImageExplanationList";
import symbologyJson from "../../data/symbology.json";

export default {
  title: "Cells/ImageExplanationList",
  component: ImageExplanationList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: symbologyJson.logoBreakdown.title,
    description: symbologyJson.logoBreakdown.description,
    images: symbologyJson.logoBreakdown.images,
  },
};
