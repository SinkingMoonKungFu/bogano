import React from "react";
import { InfoPage } from "../components/05-organisms/InfoPage";
import { sidebar } from './about-utils';
import beltsJson from '../data/belts.json';
import { BeltRankList } from "../components/03-cells/BeltRankList";
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";

const title = "Belt Rankings";
const topParagraphs = [
    "Each student of the Sinking Moon School of Kung Fu holds a rank, denoted by the belt they wear as part of their uniform during class. This rank indicates the level of training they have completed, what they are studying now, and their proficency in the art of Kung Fu.",
    "Ranks exist for a number of reasons, not the least of which is tradition in the martial arts. Students are recognized for their achievement in class, as well as their dedication to the art of Kung Fu, and thus to their own physical, spiritual, and intellectual well-being. Ranks give the ability for newer students to recognize those who are more experienced, so they may know who to ask for assistance. They also give these same students something to look forward to, and to work towards.",
    "While higher ranks do denote a certain amount of trust and privilege, it's important to note that the rank itself should not be the driving factor for a student's desire to enter into the martial way. Instead, our ranking system is meant to distinguish and recognize, and never to demoralize or belittle.",
    "As with many of our traditions and insignia, each belt rank within our school has symbolic significance. Below, you will find one set of symbolic interpretations of our ranks. Additional symbolism is offered to a student when he/she achieves a rank."
];

const mainImage = "/images/belts.jpg";

function BeltsPage(props) {
  return (
    <>
        <InfoPage
            title={title}
            mainImage={mainImage}
            topParagraphs={topParagraphs}
            menu={topMenu}
            sidebar={sidebar}
            sitemap={sitemap}>
                <section className="subsection">
                    <h3 className="subsection-title">List of Belt Ranks</h3>
                    <BeltRankList beltRanks={beltsJson.beltRanks} />
                </section>
        </InfoPage>
    </>
  );
}

export default BeltsPage;