import React from 'react';

import { InfoPage } from '../components/05-organisms/InfoPage';
import { RulesList } from '../components/02-molecules/RulesList';

import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";


const title = "Class Rules";
const mainImage = "/images/rules-hero.png";
const topParagraphs = [
    "The following is a list of rules that everyone is expected to abide by while participating or spectating at the Sinking Moon School of Kung Fu. Generally, these rules are self-explanatory, but in some cases further explanation is given as to the rationale behind the rule. If you have any questions about the rules, or need clarification on one or more of these rules, please contact Lao Shi Scott.",
    "Instructors and high ranks share the duty of enforcing these rules. Recurring refusal to abide by the rules as stated may result in extra physical conditioning (i.e. more pushups, situps, stance holding, etc...). Failure to comply with rules for which we have a zero-tolerance policy (e.g. bullying or harassment) may result in termination of training at the Sinking Moon School of Kung Fu."
];
const rules = [
    {
        title: "Footwear",
        description: "No street shoes (any shoes other than low-tread shoes designed specifically for martial arts or wrestling, or any of the above that have been worn outdoors) are allowed on the mats."
    },
    {
        title: "Timeliness",
        description: "Students should arrive 5-10 minutes early for class. If arriving late, students should prepare for class as quietly as possible and wait in seiza at the edge of the mat until the instructor acknowledges them."
    },
    {
        title: "Participation",
        description: "Students should participate in all aspects of class, to the best of their ability, unless they are unable due to a limitation."
    },
    {
        title: "Attention",
        description: "Students should be engaged in class to the best of their ability and pay attention to instruction given. Some amount of horseplay is acceptable, since part of the class should be to have fun, but students should always provide attention when the instructor is trying to gain it."
    },
    {
        title: "Respect",
        description: "Students should respect one another and instructors. Harrassment of any kind is not acceptable. Constructive criticism is encouraged, as we all want to become more skilled at Kung Fu. Respect for instructors should be apparent in students' behavior and actions. Guest instructors should be treated with the same respect while they are teaching classes at the Sinking Moon School of Kung Fu."
    },
    {
        title: "Uniforms",
        description: "Students are required to wear a uniform including a black crossover gi top with the Sinking Moon School of Kung Fu logo on the left breast, black martial arts pants, high rank chevron patch (if one holds the rank of blue belt or higher), and a rank belt (if one has been awarded) tied in the manner traditional for Wu Chi Kung Fu Association member schools. In the event uniforms are misplaced or forgotten, please speak with an instructor for a temporary replacement."
    },
    {
        title: "Use of Techniques",
        description: "Students should use what they learn in the Sinking Moon School of Kung Fu for the defense of themselves and others, or for teaching/demonstration purposes ONLY. Use of techniques for assault or toward the detriment of society at large may result in termination of instruction."
    },
    {
        title: "Safety and Control",
        description: "All participants should cede to the flow of a technique in order to prevent injury to themselves and others. Higher ranks are expected to perform at the level of their opponent, using control with techniques so as not to make unecessarily hard contact. All participants are expected to demonstrate good self-control and discipline, including paying attention, ceding to the flow of a technique, controlling their skills as appropriate to their rank, and controlling their emotions to better achieve their goals."
    },
    {
        title: "Injuries",
        description: "In the unlikely event of injury, students should notify instructors as quickly as possible so proper first aid and treatment can be arranged. This includes situations where a student is injured during class and the effects of the injury don't manifest themselves until later. Students are expected to notify instructors of injury having happened outside of class that may affect their participation during class."
    },
        {
        title: "Sparring",
        description: "During sparring, individual(s) officiating the match may make use of a whistle or other signaling device. In lieu of this, the official(s) will shout 'STOP' or 'BREAK'. Either signal should indicate that the match has ceased, and participants should wait for instruction before proceeding. Failure to heed the termination signal may result in participants being removed from the match."
    },
        {
        title: "Intimidation",
        description: "Under no circumstances will intimidation tactics or bullying be allowed in the Sinking Moon School of Kung Fu. This is a safe space for students of all walks of life to learn confidence, combat techniques, discipline, citizenship, and self-awareness. We have a zero tolerance policy for acts of intimidation and bullying, since this is not conducive to learning the martial arts."
    },
    {
        title: "Humility",
        description: "Participants should admit their mistakes openly and strive to correct them. All participants should take criticism with an open mind and not become defensive or angry when corrected by an instructor or other student."
    },
    {
        title: "Equipment",
        description: "Participants should respect all equipment and materials provided by the Sinking Moon School of Kung Fu. Students should strive to keep equipment in good condition."
    },
    {
        title: "Outside Ranks",
        description: "Participants should not wear rank belts awarded by schools other than the Sinking Moon School of Kung Fu or another member school of the Wu Chi Kung Fu Association, unless special dispensation is given by instructors OR you are representing another martial arts school at a special event at the Sinking Moon School of Kung Fu."
    },
        {
        title: "Instructor Privileges",
        description: "The wearing of Kung Fu saam (frog button) tops by members of the Sinking Moon School of Kung Fu is restricted to those having earned a black belt in a Wu Chi Kung Fu Association member school. Black belts may, at their option, wear a sash, or in lieu of the saam top, wear the standard crossover gi with their black belt. Guest instructors from other schools are invited to wear the uniform and rank or other insignia traditional for an instructor of his/her level at their home school."
    }
]

function RulesPage(props) {
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
                        <h3 className="subsection-title">Rules of the Sinking Moon School of Kung Fu</h3>
                        <RulesList
                            rules={rules}
                        />
                    </section>
                </InfoPage>
        </>
    );
}

export default RulesPage;