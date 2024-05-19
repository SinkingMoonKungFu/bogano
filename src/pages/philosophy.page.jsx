import React from "react";
import { InfoPage } from "../components/05-organisms/InfoPage";
import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";
import symbologyJson from '../data/symbology.json';
import { ImageExplanationList } from "../components/03-cells/ImageExplanationList";
import { EthicsPyramidChart } from "../components/01-atoms/EthicsPyramidChart";

const title = "Philosophy and Ethics";
const topParagraphs = [
    "Within any martial arts system, fighting and the use of force are the underlying skill being taught. In learning these techniques, students are given knowledge that has been handed down for centuries. That knowledge has the power, when focused, to turn the weak stronger and places a check on the power of those who were given natural ability.",
    "As with any powerful skill, its usage comes with a responsibility to be wielded only in times of immense threat. We learn martial arts to ensure peace, not to cause it to become under threat.",
    "The ethics surrounding the study of martial arts has also been passed down, from master to student, over many generations. As time has gone on, we have refined and added to our ethical premises in order to form a concise, coherent methodology of teaching an otherwise abstract concept. The learning of these ethical lessons is not optional. If a student does not show progress in learning the philosophical side of the art of Wu Chi Ch'uan Kung Fu, he or she will stagnate in what their instructors will be willing to pass down to them."
];

const mainImage = "/images/philosophy.jpg";

function PhilosophyPage(props) {
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
                    <h3 className="subsection-title">Ethical Structure</h3>
                    <p>Our structure of ethics is based on the <a href="/philosophy#creed-of-the-sinking-moon">Creed of the Sinking Moon</a>, which is, in turn, based on the fundamental ethics structure of the Wu Chi Kung Fu Association. Students are expected to follow the Creed of the Sinking Moon to the best of their ability, as it outlines what we believe and how we interact with the world.</p>
                    <p>A structural diagram of our philosophical foundation is given below, with the higher levels of the pyramid being based on the lower levels of the pyramid. You may click on any of the levels for more information about that particular component of our ethics and philosophy.</p>
                    <EthicsPyramidChart />
                </section>
                <section className="subsection">
                    <a name="wu-chi-ethical-bases"></a>
                    <h3 className="subsection-title">Wu Chi Ethical Bases</h3>
                    <div style={{marginLeft: "1rem" }}>
                        <a name="seven-precepts-of-wu-chi-kung-fu"></a>
                        <h4>Seven Precepts of Wu Chi Kung Fu</h4>
                    </div>
                    <div style={{marginLeft: "1rem" }}>
                        <a name="four-tenets-of-wu-chi-kung-fu"></a>
                        <h4>Four Tenets of Wu Chi Kung Fu</h4>
                    </div>
                </section>
                <section className="subsection">
                    <a name="creed-of-the-sinking-moon"></a>
                    <h3 className="subsection-title">The Creed of the Sinking Moon School of Kung Fu</h3>
                </section>
                <section className="subsection">
                    <h3 className="subsection-title">Symbols</h3>
                    <ImageExplanationList
                        title={symbologyJson.logoBreakdown.title}
                        description={symbologyJson.logoBreakdown.description}
                        images={symbologyJson.logoBreakdown.images}
                    />
                </section>
        </InfoPage>
    </>
  );
}

export default PhilosophyPage;