import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";
import { TitledSubsection } from '../components/01-atoms/TitledSubsection';
import { PricingBlock } from '../components/01-atoms/PricingBlock';

const PricingPage = () => {
    const title = "Pricing";
    const mainImage = "/images/chinese-coins.jpg";
    const topParagraphs = [
        "The Sinking Moon School of Kung Fu charges a monthly membership fee to all students. In addition, all new students are charged a one-time startup fee that covers costs of equipment necessary for the student to begin training at the Sinking Moon School of Kung Fu.",
        "You will find that our membership fees and startup costs are very competitive with other martial arts schools in the Twin Cities. While it's important to be competitive, our rates are based on the costs we pay for goods and services. None of our instructors receive a salary from the Sinking Moon Scbool of Kung Fu. All of the income generated from equipment sales and membership dues is reinvested into the organization for the benefit of the members."
    ];

    const prices = [
        {
            name: "Adult In-Person Membership",
            price: "$85/month"
        }
    ];

    return (
        <InfoPage
            title={title}
            mainImage={mainImage}
            sitemap={sitemap}
            menu={topMenu}
            topParagraphs={topParagraphs}
            >
                <TitledSubsection title="Membership Dues">
                    <p>Members of the Sinking Moon School of Kung Fu are required to pay a monthly recurring membership fee. This fee is due on the first of every month and is paid in advance for classes during that month (e.g the fees charged on the first of January are for January's classes).</p>
                    <PricingBlock title={"Student Membership Dues"} description={"Our standard membership fee, before any discounts are applied."} prices={prices} />
                </TitledSubsection>
                <TitledSubsection title="Startup Packages">
                    <p>Every new in-person student is required to purchase one of our startup packages. This is a one-time fee incurred when students begin training at the Sinking Moon School of Kung Fu. If a student suspends their training for whatever reason, and then later begins again, the startup fee will not be re-assessed.</p>
                    <p>The purpose of this is to provide the student with the necessary equipment to begin training at the Sinking Moon School of Kung Fu. There is a significant discount offered on the equipment in both packages versus if the student were to purchase these items separately.</p>
                </TitledSubsection>
        </InfoPage>

    );
}

export default PricingPage;