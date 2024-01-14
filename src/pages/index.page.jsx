import React from "react";
import { HeaderBar } from "../components/02-molecules/HeaderBar";
import { HeroBlock } from "../components/02-molecules/HeroBlock";
import { SitemapFooter } from "../components/03-cells/SitemapFooter";
import { BlockToutList } from "../components/02-molecules/BlockToutList";

import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";
import "./index.scss";

const blockTouts = [
  {
    text: "Meet our instructors",
    image: "/images/instructor-tout.png",
    link: "/instructors",
  },
  {
    text: "Learn About our History and Mission",
    image: "/images/history-tout.png",
    link: "/mission",
  },
  {
    text: "Donate to Our Nonprofit",
    image: "/images/tout-donate.png",
    link: "/donate",
  },
  {
    text: "Join Us for Class",
    image: "/images/join-tout.png",
    link: "/students/prospective",
  },
];

function Page() {
  return (
    <>
        <HeaderBar menu={topMenu}  window={window} />
            <main role="main">
                <HeroBlock
                    image="/images/wudang.jpg"
                    imageAlt="Wudang Mountain, China"
                    tagline="Martial arts, without egos or intimidation"
                    address="13755 Nicollet Ave Suite 203 Burnsville, MN 55337"
                    addressLink="https://maps.app.goo.gl/jESujkKdHnnnJ2y79"
                />
                <BlockToutList blockTouts={blockTouts} />
            </main>
        <SitemapFooter
            logoTitle={"Sinking Moon School of Kung Fu"}
            copyrightInfo={
            "© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved."
            }
            logoLink={"/"}
            imageAcknowledgementsLink={"/acknowledgements"}
            sitemap={sitemap}
        />
    </>
  );
}

export default Page;