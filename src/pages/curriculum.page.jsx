import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';
import { DefinitionList } from '../components/02-molecules/DefinitionList';
import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";

const title = "Curriculum";
const mainImage = "/images/scott-backfist.png";
const topParagraphs = [
    "Students of the Sinking Moon School of Kung Fu can expect to learn theory, mechanics, application, and ethics of fighting. While our focus is on Chinese Kung Fu, we teach a variety of techniques from other styles, including Aikido, Karate, Ninjitsu, Judo/Jujitsu, Tai Chi, Boxing/Kickboxing, Wrestling, and Jeet Kune Do.",
];

const classPhases = [
    "Rolls and Breakfalls",
    "Warmup Exercises",
    "Striking Practice",
    "Stretching",
    "Conditioning",
    "Cardio Workout",
    "Drills",
    "Water Break",
    "Lesson",
    "Sparring",
];

const classPhaseDefinitions = [
    "We begin class with a series of tumbles and breakfalls designed to teach agility and how to properly fall.",
    "Next, we warm up through a series of floor exercises in a 'follow-the-leader' pattern around the mats within the school.",
    "We practice our kicks and hand strikes on the hanging bags to perfect our ability to generate power and reinforce the methodology of each individual strike.",
    "We perform a number of stretching and flexibility exercises. Flexibility is an important component of the martial arts, and students are encouraged to push themselves through deeper and more intense stretches each class.",
    "Strength training and conditioning is a vital component of success in the martial arts. Conditioning can vary from class to class, but typically involves strength training (push-ups, crunches, etc...), body hardening (iron vest training, forearm hardening exercises, etc...), and muscle toning (stance training, held kicks, etc...).",
    "We colloquially refer to our cardio workout as 'torture', but it's actually a fun, high-impact, workout to music led by an instructor. The purpose of this workout is to help students develop cardiovascular health and stamina, which is necessary to be successful at sparring.",
    "We have a series of drills that vary from class to class. We tend to emphasize two- or three-person interaction during these drills to help students apply theoretical knowledge against a real opponent in a controlled environment.",
    "In order to encourage proper hydration, we take a short (3-5 min) water break between our cardio workout and other areas of class. This is also time used by instructors to make any relevant announcements and to share stories about the history and tradition of our organization.",
    "After the water break, we go over a short review of topics covered in recent classes, then proceed into a specific topic for that day's class. The topics covered during lessons are usually focused on specific requirements at the belt ranks of the students attending the class in question. Sometimes, more advanced topics, or topics that are not in the rank requirements, are covered, especially if a visiting instructor is present.",
    "Toward the end of class, we'll have one or two sparring sessions. These sessions are timed boxing or kickboxing rounds where students have the ability to develop the skills they've acquired over the past several classes. Since we don't have time for each student to spar every class, we have an informal rotation schedule that we follow. While the matches are timed, often there will be short breaks in the exercise for instructors to give feedback and tips.",
];

const lessonTopics = [
    "Forms",
    "Strikes",
    "Kicks",
    "Blocks",
    "Stances",
    "Techniques",
    "Ground Defenses",
    "Theory",
    "Chi Kung",
    "Sparring",
];

const lessonTopicDefinitions = [
    "A 'form' is a predetermined sequence of techniques simulating a combat situation used by an individual to learn, apply, and recall techniques. We often compare forms as 'dictionaries' of techniques - you will never use the words in a dictionary in the order they are presented in the dictionary, but you will take specific items from different places within to form a cohesive set. Forms, by themselves, are only marginally useful. We also teach the applications that correspond to the movements in the form, in order to decouple the choreographed aspects from the fighting techniques they represent. Students are taught forms in which every sequence of moves has a fighting application - there are no wasted aspects to our forms.",
    "Strikes, in this sense, mean the fundamental hand positions and physical movements involved in striking an opponent. Hand configuration is taught, as are potential targets and body-positioning necessary before and after the strike in order to effect maximum potential with minimum effort.",
    "Kicks are strikes performed with the legs and lower body. In a way similar to strikes, we teach not only the fundamentals of the kick, but also balance, power generation, stance and body positioning, and flexibility in order to enable students to maximize their benefit while kicking.",
    "Blocks are a way of stopping, deflecting, or absorbing a strike made by an opponent in order to minimize damage to oneself. We teach the motions associated with blocks at each level, but also how to utilize blocks as transformations into strikes, or even as strikes in and of themselves.",
    "Stances train the legs and body, provide a mechanism for teaching balance to the student, and generate power through transition from one stance to another. We are rigorous in our stance training and often employ methods of strengthening the legs in order for students to deepen their stances. While stance training is often repetitive, it is core to a student's development and stance training should be undertaken with maximum attention paid to detail.",
    "All technical applications of the art consisting of a sequence of steps necessary to execute a complicated move we refer to as 'techniques'. This includes joint locks, throws, submission holds, striking combinations, and blocking/redirection maneuvers. All of our techniques are derived directly from the forms we teach. Students learn not only the theoretical basis for a defense, but also the parts of the defense that make it practical to use in an actual combat situation.",
    "Much of the art of Kung Fu is centered around how to defend oneself from a standing position. Unfortunately, there are times when it is inevitable that even the best fighters will end up on the ground. We teach a number of techniques related to falling safely, defending oneself while on the ground, and recovering from a fall or takedown to regain an upright posture.",
    "In addition to the applications of the fighting art of Kung Fu ('techniques'), we also teach the theoretical basis for the art. This theory component covers topics such as positioning and strategy while in combat, the ethics of when to use what one has learned, the historical basis for our techniques, and traditions surrounding our art. As it is traditional for more experienced students to pass on what they have learned, we also have a number of topics on teaching and learning that are specific to the martial arts.",
    "Chi Kung, or Qigong, literally means 'life energy cultivation'. It is a methodology of meditation, simple exercises, repetition, and mental visualization techniques designed to focus students' minds and internal energy ('Chi'). Practioners of T'ai Chi will find similarities in the movements within the art of T'ai Chi to our Chi Kung exercises.",
    "Sparring is our method of applying theoretical concepts and physical techniques in real-time against an opponent. Students at the rank of white belt are introduced to sparring through two-person drills and basic boxing in a controlled environment. Orange, yellow, and green belts are expected to extend their knowledge in boxing, as well as add the use of their feet for executing kicks. At blue, purple, red, and black belts, students are introduced to more open-hand techniques, and begin to practice the use of these techniques in a controlled combat situation.",
];

const CurriculumPage = (props) => {
    return (
        <InfoPage
            title={title}
            mainImage={mainImage}
            topParagraphs={topParagraphs}
            menu={topMenu}
            sidebar={sidebar}
            sitemap={sitemap}>
                <section className="subsection">
                    <h3 className="subsection-title">Class Structure</h3>
                    <p>Our classes are generally divided into the following phases. Some classes deviate slightly from this paradigm in order to focus on special curricula (especially when a visiting instructor is present), but, in general, each class tends to follow this pattern.</p>
                    <p>Classes always begin and end with a traditional salute, which is a pattern that clearly demarcates the beginning and ending of class and acts as a 'contract' between instructor and student that both will pay attention and exercise discipline during the class.</p>
                    <DefinitionList terms={classPhases} definitions={classPhaseDefinitions} />
                </section>
                <section className="subsection">
                    <h3 className="subsection-title">Lesson Syllabus</h3>
                    <p>Our lessons in Kung Fu consist of several subjects which make up our overall curriculum. In a single class, a lesson may cover several of these topics, or it may cover a single topic in more depth. A brief description of the different topic categories is below.</p>
                    <DefinitionList terms={lessonTopics} definitions={lessonTopicDefinitions} />
                </section>
                <section className="subsection">
                    <h3 className="subsection-title">Self-Study Expectations</h3>
                    <p>In addition to class attendance, students are expected to spend time conditioning themselves outside of class. As students progress further in the ranks, this requirement becomes more crucial to success. While each student may require a different amount of time for different concepts, students should strive to practice 2 hours per week outside of class for every hour of class in which they participate.</p>
                    <p>The following is a list of items each student should practice on their own, outside of class:</p>
                    <ul>
                        <li>Stance Training</li>
                        <li>Practice and Review of Known Forms</li>
                        <li>Journaling/Memory Retention Techniques</li>
                        <li>Meditation and Chi Kung Visualizations</li>
                        <li>Conditioning Drills</li>
                        <li>Sparring Review/Self-Critique</li>
                    </ul>
                </section>
        </InfoPage>
    );
}

export default CurriculumPage;
