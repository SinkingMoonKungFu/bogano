import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';
import { DefinitionList } from '../components/02-molecules/DefinitionList';

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

    return (
        <InfoPage title={title} mainImage={mainImage} topParagraphs={topParagraphs} menu={props.menu} sitemap={props.sitemap}>
            <section className="subsection">
                <h3>Staff Member Category Definitions</h3>
                <p>At the Sinking Moon School of Kung Fu, we have several different categories of staff member, depending on how active a given individual is in the day-to-day activities surrounding the organization.</p>
                <DefinitionList terms={terms} definitions={definitions} />
            </section>
        </InfoPage>
    );
}

export default InstructorsPage;