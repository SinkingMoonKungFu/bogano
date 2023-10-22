import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';
import { DefinitionList } from '../components/02-molecules/DefinitionList';
import { InstructorProfile } from '../components/02-molecules/InstructorProfile';

import { sidebar } from './about-utils';

function InstructorsPage(props) {
    const title = "Instructors and Staff";
    const mainImage = "/images/instructors-hero.png";
    const topParagraphs = [
      "Our regular instructors are all fully registered members of the Wu Chi Kung Fu Association's College of Black Belts. Each member of our instruction staff has gone through the rigorous training necessary to be an expert in Wu Chi Chu'an style Kung Fu, and has a particular strength in their teaching different from each of the others",
      "From time to time, we will also allow experts from other styles in the martial arts to teach a series of classes or seminars at the Sinking Moon School of Kung Fu.",
    ];

    const terms = ["Current Instructors", "Current Staff", "Adjunct Instructors"];
    const definitions = [
      "Individuals who regularly teach classes at the Sinking Moon School of Kung Fu. Typically, these individuals will be available during open time for questions, and typically can have private lessons scheduled with them at any time.",
      "Individuals that assist with the administration of the Sinking Moon School of Kung Fu, but are not instructors and will typically not lead classes.",
      "Individuals that are experts in a specific area of study in the martial arts, but aren't typically around for regular classes. These individuals are recognized as instructors at the Sinking Moon School of Kung Fu and will lead classes from time to time, but are not on a regular instruction schedule and do not make advancement decisions. Adjunct instructors will also sometimes offer private lessons, but their schedule is significantly less flexible than Current Instructors. Often, these are out-of-state individuals that will spend time at the Sinking Moon School of Kung Fu once or twice per year."
    ];

    const scottRoles = [
      "Head Instructor: Sinking Moon School of Kung Fu",
      "President: Sinking Moon Foundation",
      "Secretary: Wu Chi College of Black Belts",
    ];

    const scottBiography = [
      "Lao Shi Scott started his journey in the martial arts in 1999 when he joined what was then called the Fire and Water Martial Arts Society (later Wu Chi Martial Arts Society, and now Wu Chi School of Self Defense). In 2006, Scott received his Black Belt alongside Rod Huus in the school's first instance of testing two candidates for Black Belt at the same time.",
      "Scott moved to the Twin Cities in 2006 to attend graduate studies at the University of Minnesota. Between 2006 and 2010, Scott taught a series of classes around the University of Minnesota campus, including at the St. Paul Gym. Scott was advanced by Dashi Gary Cecil to the rank of 2nd Level Black Belt (Yellow Sash) in 2009. In 2010, Scott was asked by Sifu Ryan Carden to serve as the assistant instructor at Wu Chi Fighting Arts.",
      "Scott was advanced to 3rd Level Black Belt (Green Sash) in 2013 when he took over as interim head instructor of Wu Chi Fighting Arts after Sifu Ryan's tragic and unexpected passing. Lao Shi Scott chose to leave Wu Chi Fighting Arts to found his own school, which was official chartered in 2015. In August of 2018, Scott was advanced to 4th Level Black Belt (Blue Sash), by Dashi Gary Cecil, in recognition of his accomplishments in teaching, as well as his work evolving the Phoenix and Xuan Wu forms.",
      "Lao Shi Scott serves as an officer (Secretary) on the Wu Chi Kung Fu Association's College of Black Belts, the governing body of the Wu Chi Kung Fu Association. He was instrumental in drafting the current Constitution and By-laws of the organization, which provides a framework for all member schools within the Wu Chi Kung Fu Association.",
      "Lao Shi Scott has a wife (Amy), a daughter (Autumn), and a son (Quinn), all of whom he adores. Scott is an accomplished Computer Scientist, holding Bachelor's Degrees in Computer Science and Mathematics and a Master's Degree in Computer Science. During the winter months, Scott works as a hockey official for USAHockey Minnesota districts 6 and 8, as well as the Minnesota State High School League. In what little free time he has, Lao Shi Scott enjoys sailing.",
    ];

    return (
        <InfoPage
            title={title}
            mainImage={mainImage}
            topParagraphs={topParagraphs}
            menu={props.menu}
            sidebar={sidebar}
            sitemap={props.sitemap}>
            <section className="subsection">
                <h3>Staff Member Category Definitions</h3>
                <p>At the Sinking Moon School of Kung Fu, we have several different categories of staff member, depending on how active a given individual is in the day-to-day activities surrounding the organization.</p>
                <DefinitionList terms={terms} definitions={definitions} />
            </section>
            <section className="subsection">
                <h2 className="subsection-title">Current Instructors</h2>
                <InstructorProfile
                    name="Scott Johnson"
                    title="Lao Shi"
                    image="/images/laoshiscott.png"
                    roles={scottRoles}
                    biography={scottBiography}
                />
            </section>
        </InfoPage>
    );
}

export default InstructorsPage;