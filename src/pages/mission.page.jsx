import React from 'react';

import { InfoPage } from '../components/05-organisms/InfoPage';

import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";

import "./mission.scss";

const title = "History and Mission";
const mainImage = "/images/history-hero.png";
const topParagraphs = [
    "The Sinking Moon School of Kung Fu is a community-based organization dedicated to personal development through the martial arts. Formally established in 2016, we are connected to a lineage of schools dating back to the earliest known records of martial arts in China.",
    "We teach Wu Chi style Kung Fu, which has roots in Goju Karate and Southern Shaolin Kung Fu. Our style is influenced by Aikido, Ninjitsu, Jeet Kune Do, and Kickboxing. Students of the Sinking Moon School of Kung Fu learn a number of Kung Fu animal styles, including Snake, Crane, Leopard, Tiger, Dragon, and Phoenix variants, as well as practical self-defense techniques.",
    "The Sinking Moon School of Kung Fu is a chartered member school of the Wu Chi Kung Fu Association. Our regular instruction staff are fully certified members of the Wu Chi Kung Fu Association's College of Black Belts."
];

function MissionPage(props) {
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
                        <h3 className="subsection-title">Mission Statement</h3>
                        <p>To provide exceptional instruction in the martial arts and associated activities to students of all walks of life with the end goal of enhancing physical abilities, building discipline and self-esteem, learning honor and respect, promoting good citizenship, and having fun.</p>
                    </section>
                    <section className="subsection">
                        <h3 className="subsection-title">History</h3>
                        <p>In 1990, Rev. Dr. Gary Cecil founded the Fire and Water Martial Arts Society in Grand Forks, ND. This organization, which would later become the Wu Chi Martial Arts Society, was founded with the simple purpose of promoting friendship and brotherhood through training in the martial arts. After Dashi Cecil left Grand Forks in 1993, Loren Ness and Ryan Carden took over the teaching at the Grand Forks chapter.</p>
                        <p>In the fall of 1999, Lao Shi Scott Johnson started his studies at the school in Grand Forks, earning his black belt in 2006 alongside Lao Shi Rod Huus. That same year, Lao Shi Rod took over the Grand Forks chapter, and is still the head instructor in Grand Forks today.</p>
                        <p>In 2011, Sifu Ryan Carden chose to open his own school, Wu Chi Fighting Arts, in Burnsville, MN. He asked Lao Shi Scott Johnson to assist him in teaching at this new school, where he taught from 2011, until his tragic passing in 2013, at which time Lao Shi Scott stepped down from the Assistant Instructor role at this school and Sifu Loren Ness took over teaching as the Head Instructor of this school. The Burnsville chapter of the organization, named 'Wu Chi Martial Arts', was in operation beginning in July of 2013, and Lao Shi Paul Ough served as the Assistant Instructor for this school.</p>
                        <p>In February of 2017, Lao Shi Scott Johnson opened the newest chapter of the Wu Chi Kung Fu Association, the Sinking Moon School of Kung Fu, in Rosemount, MN. The charter for the Sinking Moon School of Kung Fu was actually granted in 2015, but our first location wasn't opened until 2017. In 2019, the Sinking Moon School of Kung Fu moved from Rosemount, MN to our current location in Burnsville, MN. The Sinking Moon School of Kung Fu is dedicated to the rigorous training of students in the ancient ways of Kung Fu within our modern world.</p>
                        <p>Unfortunately, Wu Chi Martial Arts in Burnsville, MN closed at the end of December of 2018. As part of this transition, Lao Shi Paul Ough moved to the Sinking Moon School of Kung Fu to be the Assistant Instructor serving our students, and Sifu Loren Ness became an adjunct instructor for the Sinking Moon School of Kung Fu.</p>
                        <p>As of 2019, the Sinking Moon School of Kung Fu moved from Rosemount, MN to Burnsville, MN, and is now located at 13755 Nicollet Ave. S. Ste. 203, Burnsville, MN 55337.</p>
                        <p>In total, the Wu Chi Kung Fu Association is now comprised of five member schools within the United States, ranging from North Dakota to New Jersey.</p>
                    </section>

                    <section className="subsection">
                        <h3 className="subsection-title">Map & Directions</h3>
                        <div className="layout-two-side-by-side">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.2852295948824!2d-93.2797263878763!3d44.7545973803829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f63364be86889f%3A0x80b2bb0375d20ba8!2sSinking%20Moon%20School%20of%20Kung%20Fu!5e0!3m2!1sen!2sus!4v1698677949869!5m2!1sen!2sus" width="600" height="450" style={{"border": 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className="directions">
                                <p>You can park anywhere in front of or behind the building. If you have difficulty with stairs, it's recommended to park in the rear of the building and enter through the back, since the back entrance is at the same story as the Sinking Moon School of Kung Fu.</p>
                            </div>
                        </div>
                    </section>
                </InfoPage>
        </>
    );
}

export default MissionPage;
