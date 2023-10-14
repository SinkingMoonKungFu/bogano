import { SitemapFooter } from "../../components/molecules/SitemapFooter";

export default {
  title: "Molecules/SitemapFooter",
  component: SitemapFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    logoTitle: "Sinking Moon School of Kung Fu",
    copyrightInfo:
      "© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved.",
    imageAcknowledgementsLink: "/acknowledgements",
    logoLink: "/",
  },
};
