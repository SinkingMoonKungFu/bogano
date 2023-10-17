import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';

function InstructorsPage(props) {
    const title = "Instructors and Staff";
    const mainImage = "/images/instructors-hero.png";
    const topParagraphs = [
      "Our regular instructors are all fully registered members of the Wu Chi Kung Fu Association's College of Black Belts. Each member of our instruction staff has gone through the rigorous training necessary to be an expert in Wu Chi Chu'an style Kung Fu, and has a particular strength in their teaching different from each of the others",
      "From time to time, we will also allow experts from other styles in the martial arts to teach a series of classes or seminars at the Sinking Moon School of Kung Fu.",
    ];

    return (
        <InfoPage title={title} mainImage={mainImage} topParagraphs={topParagraphs} menu={props.menu} sitemap={props.sitemap} />
    );
}

export default InstructorsPage;