import React from "react";
import { InfoPage } from "../components/05-organisms/InfoPage";
import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";
import symbologyJson from '../data/symbology.json';
import { ImageExplanationList } from "../components/03-cells/ImageExplanationList";
import { EthicsPyramidChart } from "../components/01-atoms/EthicsPyramidChart";
import { NumericList } from "../components/02-molecules/NumericList";

import colors from "../assets/scss/colors.module.scss";
const { FlamePea, Ronchi } = colors;

import './philosophy.scss';

const title = "Philosophy and Ethics";
const topParagraphs = [
    "Within any martial arts system, fighting and the use of force are the underlying skill being taught. In learning these techniques, students are given knowledge that has been handed down for centuries. That knowledge has the power, when focused, to turn the weak stronger and places a check on the power of those who were given natural ability.",
    "As with any powerful skill, its usage comes with a responsibility to be wielded only in times of immense threat. We learn martial arts to ensure peace, not to cause it to become under threat.",
    "The ethics surrounding the study of martial arts has also been passed down, from master to student, over many generations. As time has gone on, we have refined and added to our ethical premises in order to form a concise, coherent methodology of teaching an otherwise abstract concept. The learning of these ethical lessons is not optional. If a student does not show progress in learning the philosophical side of the art of Wu Chi Ch'uan Kung Fu, he or she will stagnate in what their instructors will be willing to pass down to them."
];

const FourTenets = [
    {
        title: "Have Faith",
        description: "Have faith in your instructors, your fellow students, the organization at large, and the structures put in place to help you. Learn to sometimes let things go and simply be along for the ride. Others have come before you and been successful. Trust that your instructor and the students alongside you have your best interests at heart, even if at times it doesn't seem obvious."
    },
    {
        title: "Be Mindful",
        description: "Learn to help other students and instructors. Do not interfere with another person's training and learning. Know that you are not competing against others, so sabotaging their training and path will bring no benefit to you. Help others to grow, as they should be helping you. Learn to identify negativity in your life and attempt to excise it gracefully from affecting you."
    },
    {
        title: "Be Adaptable",
        description: "Not every path is a straight line from A to B. Know that your path will often take you in directions you did not expect. Some will be light and others dark, but always be willing to change. If your strategy for handling a given problem is not working, strive to change in order to be a better version of yourself in the future. Always be open to critique and know that plans are always subject to change."
    },
    {
        title: "Follow the Way",
        description: "Generations of practitioners have come before you. The teaching method laid out by the Sinking Moon School of Kung Fu and Wu Chi Kung Fu Association is well-developed over years of practice, study, and testing. Know that there are times when your instructor has a plan for you and what you are learning, even if that plan is not visible. Follow this path laid out for you, and help others to follow it, as well."
    }
];

const SevenPrecepts = [
    {
        title: "Be Aware",
        description: "Strive to be aware of your surroundings at all times. This not only means physical surroundings, but also mental and emotional contexts into which one might find oneself. Learn to be aware of how you are feeling, your breathing, and your instincts. Often, your instincts will guide you away from danger and risky situations, but you need to learn to trust them."
    },
    {
        title: "Suspend Judgement",
        description: "Learn to wait to judge situations until you have enough information to make an ethical determination. Suspending judgement doesn't mean not making a judgement, it simply means tha you wait until you have enough data. It also means to resist your emotional drive to immediately judge others based on single sets of actions and instead find the trends of behavior."
    },
    {
        title: "Maintain Integrity",
        description: "Strive to avoid being untruthful or deceptive. Be ethical in your actions. Develop an internal code of ethics that you build upon and learn to follow."
    },
    {
        title: "Be Sincere",
        description: "Avoid speaking in a condescending or insincere manner. Learn to communicate in a way that reflects how you actually feel and describes what you want out of a situation."
    },
    {
        title: "Unify Word and Deed",
        description: "Strive to do what you stated you would do and state what you actually intend to do. Avoid lies, deception, and prevarication. Honor commitments you have made and strive to perform actions that you have committed to, regardless if they are difficult."
    },
    {
        title: "Know Yourself",
        description: "Learn your characteristics, emotions, strengths, and weaknesses. Strive to be truthful to yourself and admit faults, while celebrating strengths. Admit mistakes and use them as opportunities for growth and development. Always be willing to change and adapt, but know where you stand with yourself at any given time."
    },
    {
        title: "Be Responsible",
        description: "Use knowledge wisely. Take what you have learned within the Wu Chi Organization (and elsewhere), and disseminate it with care in the manner it was given to you. Always use the least amount of force possible when in a situation. Do not willingly put yourself into situations that threaten yourself or others. Be cautious with whom you associate, but also be willing to help those you choose to associate with when they need it."
    }
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
                        <a name="four-tenets-of-wu-chi-kung-fu"></a>
                        <h4>Four Tenets of Wu Chi Kung Fu</h4>
                        <p>The Four Tenets of Wu Chi Kung Fu are the philosophical basis upon which our organization is based. These four principles guide our curriculum, teaching methodology, and general expectations of conduct and behavior. While we all strive to follow these principles in our daily lives, we are still human, and thus constantly battle with our own self-development while striving to maintain our ability to follow the path laid before us.</p>
                            <NumericList
                                color={Ronchi}
                                items={FourTenets} />

                    </div>

                    <div style={{marginLeft: "1rem" }}>
                        <a name="seven-precepts-of-wu-chi-kung-fu"></a>
                        <h4>Seven Precepts of Wu Chi Kung Fu</h4>
                        <p>The Seven Precepts of Wu Chi Kung Fu are a more detailed description of the code of ethics and personal development that we expect members to strive to follow. They build on the Four Tenets of Wu Chi Kung Fu, and should support a student's path of study and development. While the Four Tenets are overarching and broad, the Seven Precepts are intended to be succint but also expand on the general concepts described in the Four Tenets. Where the Creed of the Sinking Moon is detailed, the Seven Precepts are designed to be easier for members to remember.</p>
                        <NumericList
                            color={FlamePea}
                            items={SevenPrecepts} />
                    </div>
                </section>
                <section className="subsection">
                    <a name="creed-of-the-sinking-moon"></a>
                    <h3 className="subsection-title">The Creed of the Sinking Moon</h3>
                    <p>The Creed of the Sinking Moon represents a statement that each member of the organization should strive to uphold throughout their life. It depicts the values we, as members share. While it is not required that members memorize the contents of the Creed word-for-word, it is required that members seek to embody the spirit of the Creed and integrate it into their day-to-day life.</p>
                    <blockquote>
                        <h5>As a student in the way of the Sinking Moon, I</h5>
                        <ul>
                            <li>fight with my eyes open,</li>
                            <li>strive for justice through peace and peace through justice,</li>
                            <li>stand on mountains that I did not create and climb towers I did not build,</li>
                            <li>constantly seek enlightenment so I may conquer the darkness,</li>
                            <li>sharpen fellow practicioners as iron sharpens iron,</li>
                            <li>see crisis as an opportunity to better myself,</li>
                            <li>test my mettle through fire but never lose hope,</li>
                            <li>empty myself so I may be filled,</li>
                            <li>look beyond the obvious to see the interplay between chaos and order,</li>
                            <li>maintain self control because I realize emotion is not the same as strength,</li>
                            <li>allow my enemies to create my victories,</li>
                            <li>face my fears for they are but shadows,</li>
                            <li>and remember that I am, before all else, human.</li>
                        </ul>
                    </blockquote>
                    <p><a href="/creed-of-the-sinking-moon.pdf">Printable version of the Creed of the Sinking Moon</a></p>
                </section>
                <section className="subsection">
                    <h3 className="subsection-title">Symbols</h3>
                    <p>The symbols of our organization visually represent our ethics and philosophy. These symbols are unique to the Sinking Moon School of Kung Fu and the Wu Chi Kung Fu Association. Use of these symbols should be restricted to items that follow the values of the greater organizations and should not be used in a context that reflects poorly on the Sinking Moon School of Kung Fu, the Wu Chi Kung Fu Association, the greater martial arts community, or any participants or leaders of these organizations.</p>
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