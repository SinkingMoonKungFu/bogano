import React from 'react';
import { InfoPage } from '../components/05-organisms/InfoPage';
import { sidebar } from '../data/sidebar';
import { topMenu } from "../data/TopMenu";
import { sitemap } from "../data/Sitemap";
import { FAQSection } from '../components/02-molecules/FAQSection';

const title = "Frequently Asked Questions";
const mainImage = "/images/sunset.jpg";
const topParagraphs = ["The following is a list of questions that are frequently asked of instructors regarding how the Sinking Moon School of Kung Fu operates. While these are the most general questions, there are always questions that simply didn't make the list. If you have a question that isn't on this list (or simply would rather talk to an instructor), please don't hesitate to contact us. Our contact information can be found on our <a href=\"/contact/\">contact us page</a>.",
"Please note that many of these questions are targeted toward prospective and new students, as that is the most common source of frequently asked questions. If you are a current student, however, there might be some value in re-reading these once in a while, if for no other reason than they may be asked of you by a newer student as you grow in your knowledge of the art of Kung Fu."
];

const faqSections = [
    {
        title: "New Students",
        questions: [
            {
                question: "What should I wear to my first class?",
                answer: [
                    "Loose-fitting clothing is preferable. Sweatpants and a T-shirt is generally fine, along with a pair of low-tread shoes (wrestling shoes, martial arts shoes, etc.). In order to maintain cleanliness and avoid damage to our equipment, street shoes, especially sneakers, are not allowed on the mats during workouts. If you don't have a pair of low-tread shoes, you may remove your shoes and socks and workout barefoot.",
                    "Avoid clothing that is too constricting, such as button-up shirts and dress pants. It's also good to avoid wearing jeans, if possible, since they don't give the flexibility necessary to perform some of our kicks (as well as being abrasive and uncomfortable)."
                ]
            },
            {
                question: "Is there a 'trial period' where I can determine if the Sinking Moon School of Kung Fu is for me?",
                answer: [
                    "Yes. We don't expect payment from you until the first of the month following your first class. For example, if you come to your first class on March 8th, you're not expected to start making payments for membership until the first of April.",
                    "In addition, the start-up package includes the first month of dues, so as not to create an unreasonable economic burden on new students."
                ]
            },
            {
                question: "Do you pro-rate membership dues for the remainder of a month if I decide to join mid-month?",
                answer: "We can, if you really want, but generally we simply wait to charge you until the first of the following month."
            },
            {
                question: "How do I go about joining the Sinking Moon School of Kung Fu?",
                answer: ["Typically, the first step is to come to one of our <a href=\"/classes\">regularly scheduled classes</a> to see if our classes are what you're looking for, and to meet our current students and instructors. If interested in joining, you will fill out a membership application and have a short interview with our head instructor, Lao Shi Scott Johnson. After approval from our head instructor, and once payment has been received, you will be given the startup package, which includes your uniform, and are welcome to attend all regular classes."]
            },
            {
                question: "Why is an interview necessary prior to joining?",
                answer: "The Sinking Moon School of Kung Fu interviews all students prior to becoming members. The purpose of this interview is to determine if the Sinking Moon School of Kung Fu is a good fit for you as a prospective student, prior to making a commitment to teach you."
            },
            {
                question: "Is it possible that I won't be accepted as a student after the interview?",
                answer: [
                    "It's possible, but very unlikely.",
                    "We reserve the right to refuse to teach anyone we feel isn't a good fit for the organization, or who we believe will utilize the skills we teach in a way detrimental to society as a whole. Further, we also reserve the right to recommend a student to a different martial arts school, should our curriculum not align with what a potential student's goals are.",
                    "So, yes, it is possible that you might not be accepted after the interview process. It's important to note, though, that during the many years that the Wu Chi Kung Fu Association has been in existence, there are only a handful of students for which this right of refusal has been invoked. Generally, students are accepted without reservation."
                ]
            },
            {
                question: "What might cause someone to not be accepted as a student?",
                answer: [
                    "The purpose of the interview serves for the head instructor to become acquainted with new students, including their passions, goals, strengths, and weaknesses. This is used to tailor individual instruction for that student.",
                    "The Sinking Moon School of Kung Fu is not a 'factory' for generating Black Belts. We teach a very devastating art that is rooted in tradition. It's important that new students be ready to receive this knowledge in the way in which it is given. It is not the goal of the organization to simply generate revenue. We keep a small class size, in order to best give individual attention to each student, so there are only a limited number of slots available for new students. As such, students that we don't feel are going to be a good fit for the organization will be gently redirected to another school."
                ]
            },
            {
                question: "If I choose to purchase the standard ('Snake') startup package, can I later pay the difference between that package and the premium ('Phoenix') package to get the sparring gear at the more discounted price?",
                answer: "No. The startup package is actually a fee assessed to the student at the time of joining. We then give the items listed in the package as a 'thank-you gift'. Once a student has joined the Sinking Moon School of Kung Fu, the startup fees have been assessed, and the packages are no longer available. Any new equipment purchases need to be made from one of our staff members, using the standard retail sales process. That said, we do often have sales on equipment, so if you're looking to purchase a specific item of equipment, it might be worth letting one of our staff members know, so we can consider negotiating with Century for a better price."
            }
        ]
    },
    {
        title: "Curriculum",
        questions: [
            {
                question: "What can I expect to learn at the Sinking Moon School of Kung Fu?",
                answer: "You can expect to learn a series of forms, strikes, kicks, locks, holds, throws, defensive applications, drills, tumbles, break-falls, and conditioning exercises, specific to each belt rank, and, to some extent, each student. You can also expect to develop timing and coordination by applying your skills in a controlled combat situation we call 'sparring'."
            },
            {
                question: "What are forms?",
                answer: [
                    "A form is a sequence of moves performed, in order, by a single individual. You can think of a form as a choreographed set of techniques that serve as a 'dictionary' of moves, from which students can take individual pieces.",
                    "Each form has two parts to it - the overall choreography set, which is typically taught first, and the interpretation of the form, which we call 'applications'. Understanding the form as a type of 'dance' is important, as it develops timing, balance, and conditions the student to perform the applications. Understanding the applications of a form, or 'how it fights', is equally important, and students are expected to learn and apply techniques from form in other aspects of class."
                ]
            },
            {
                question: "What is sparring?",
                answer: "Sparring is a controlled fight between two students. It is an opportunity to practice what you have learned at a higher speed. At lower ranks, we practice with 16oz boxing gloves and protective footwear. At the higher ranks, we switch to gloves that allow more finger motion, and thus enable the student to perform more advanced grabs within the sparring environment."
            },
            {
                question: "Are students required to spar?",
                answer: [
                    "Sparring is a requirement at every rank. In order to achieve a belt ranking, each student must demonstrate that they are able to apply the techniques at that rank in a semi-live combat scenario. Thus, sparring is required if students wish to achieve a belt rank.",
                    "There are some students who will simply not want to spar, and those students are still welcome in our class. They will not be eligible to attain belt rankings, but they are welcome to participate to learn all other aspects of class or simply to enjoy the workout.",
                    "If you're reluctant to spar, it's important to note that our sparring is very controlled. We don't allow individuals to spar unless they have proven themselves at least somewhat capable of handling themselves with our techniques. Typically for the first few sparring matches, a student is paired with an instructor to get the feel of what they should expect and how to conduct themselves in the sparring ring. Every student is expected to treat others with respect at all times, and this includes during sparring. We have a zero tolerance policy for intimidation or dangerous behavior, inside or outside of the sparring ring, and all sparring exercises are conducted in a manner that is controlled, safe, and (generally speaking), fun."
                ]
            },
            {
                question: "Will I get hurt sparring?",
                answer: [
                    "While we can't guarantee that you won't be hurt in any aspect of class, it should be noted that injuries in our martial arts classes, including in sparring, are very rare. Of the injuries sustained, most are simple bruises, cuts, loss of breath (i.e. getting one's 'wind knocked out'), muscle pulls, and joint soreness. There have only been a handful of injuries in the history of our style that have been more substantial than these.",
                    "We take great care to make every aspect of class as safe as possible. For sparring, we always have lower ranks spar with more experienced individuals, so those individuals can guide the lower ranks through techniques, and give opportunities to the student to achieve success. We also have an instructor timing the match, as well as keeping an eye on the intensity level of the match. If the match gets too intense, the instructor will stop it to prevent any incidental injury. The purpose of sparring is not to defeat the other person in the ring. Rather, the purpose is for both students to assist each other in learning the art of Kung Fu."
                ]
            },
            {
                question: "What if I don't want to spar?",
                answer: [
                    "It's not uncommon for students to not initially want to spar. In order to achieve a belt ranking, sparring is required. We won't force you to do anything you don't want to do, but we definitely encourage you to try it. Sparring, like many other aspects of class, is an exercise, and it's designed to teach very specific things that can't be learned as quickly elsewhere. You might be surprised at how much fun you have while sparring.",
                    "If you're adamantly opposed to sparring, it might be worth speaking with our instruction staff to see if there is another drill or exercise that can help you achieve your goals within the school."
                ]
            },
            {
                question: "Do you train students for competitions or tournaments?",
                answer: [
                    "We don't specifically train for tournaments or competitions, no. Our style is designed to teach a practical fighting art - one that can be used to defend oneself in dire situations. As such, it doesn't fit well to competition.",
                    "We don't discourage students from attending competitions on their own, however. Several students of Wu Chi Chu'an Kung Fu schools have participated in tournaments in the past. We simply don't train with the goal of competition in mind.",
                    "We do participate in an annual tournament that is internal to the Wu Chi Kung Fu Association - the Ryan Carden Memorial Tournament. While this is technically a competition, the purpose of this event is focused more toward developing camraderie among students who do not attend the same Wu Chi school."
                ]
            },
            {
                question: "Do you teach mixed martial arts (MMA)?",
                answer: [
                    "Not in the sense that it has been commercialized. You won't find an octagon ring in the Sinking Moon School of Kung Fu, and we don't train our students to fight in some type of ultimate fighting competition.",
                    "We do, however, blend a number of different martial art styles to achieve an effective, consistent, and rigorous curriculum. We teach what works, and include tactics from a number of different martial art styles. In this sense, we are a 'mixed' martial art, but we do not teach what you're likely to see on TV."
                ]
            },
            {
                question: "Is there a workout involved in the classes at the Sinking Moon School of Kung Fu?",
                answer: "Yes, we have a number of strength training and conditioning drills that we do during each class. In addition, we have a cardiovascular workout to music through which we guide students during some classes."
            }
        ]
    },
    {
        title: "Equipment",
        questions: [
            {
                question: "What equipment do I need to start training at the Sinking Moon School of Kung Fu?",
                answer: "All the required equipment is included in the startup package, so you will be able to start training immediately. It is recommended that all students purchase their own sparring equipment, including boxing gloves, a sparring helmet, foot protection, and shin protection. Students who aren't able to purchase these items, or who don't wish to invest in the equipment immediately are able to use the school protective equipment during sparring. It's simply recommended to purchase one's own, since the school equipment gets kind of beat-up and dirty."
            },
            {
                question: "Can I use sparring gear that I have purchased from another martial arts school?",
                answer: "Possibly. We require 16oz boxing gloves, protective headgear designed for boxing or kickboxing, padded sparring shoes, and a mouthguard. Some students optionally wear a chest protector, shin pads, and elbow/forearm pads, but these are not required. If your sparring gear meets these criteria, then you're welcome to use it in our class, even if it has logos or advertising from another school on it."
            },
            {
                question: "If I already have the equipment specified in the startup package, do I still need to purchase a startup package?",
                answer: [
                    "Yes. The startup package is a fee assessed to new students to offset the cost the Sinking Moon School of Kung Fu incurs as a result of taking on a new student for training. The items you receive as part of the startup package can be thought of as 'thank-you gifts' that you receieve as part of the fee assessment.",
                    "If you are transferring from another Wu Chi Kung Fu Association school, please speak with one of our staff members, as in some cases, the startup fee is discounted to reflect the fact that a current Wu Chi student doesn't have the same impact on costs to the Sinking Moon School of Kung Fu as a completely new student."
                ]
            },
            {
                question: "Can I order extra equipment not in the startup package from the Sinking Moon School of Kung Fu?",
                answer: [
                    "Yes. You can purchase equipment that we have in stock directly at the school. If we don't have it in stock, we'll be happy to order it for you.",
                    "Most of our equipment is supplied through Century Martial Arts, and students of the Sinking Moon School of Kung Fu receive a 10% discount on the retail price of all items in the Century catalog. Please note that we are required to collect a 7.125% sales tax on all sales of non-clothing."
                ]
            },
            {
                question: "Can I order Sinking Moon School of Kung Fu branded apparel even if I'm not a member?",
                answer: "Absolutely. Please contact our <a href=\"mailto:info@sinkingmoon.com\">information list</a> for information on how to place an order."
            },
            {
                question: "What is your return/exchange policy for equipment and apparel purchased through the Sinking Moon School of Kung Fu?",
                answer: [
                    "In general, we don't offer returns on equipment, but, in some cases, we're willing to take equipment back, depending on the individual situation of the student.",
                    "We do offer exchanges on equipment, even exchanges for different items or credit towards a future order with us, provided the equipment purchased is a normally salable item by the Sinking Moon School of Kung Fu. In other words, if you purchase something that isn't likely to be re-salable by the school (e.g. the fully functional ninja outfit), we reserve the right to refuse to take it back or exchange it, except in the case of a defect. We also require that the equipment is in the condition you original received it. (Common sense plays into this. If, for example, you have used your new boxing gloves in one or two matches before you find a defect, that's fine, and we'll still allow for the exchange, but in general, equipment needs to be in the condition it was when you first purchased it).",
                    "If an item you purchased is defective or damaged during shipping, we will exchange it for the same item without any hassle."
                ]
            },
            {
                question: "Do you sell used equipment?",
                answer: [
                    "From time to time, we may sell some of the equipment that we have acquired that is used as community equipment. Some students sell their older, used equipment through the school, as well. Please contact us at our <a href=\"mailto:info@sinkingmoon.com\">information list<a> if you are looking for something specific."
                ]
            },
            {
                question: "How do I go about ordering a piece of equipment or apparel through the Sinking Moon School of Kung Fu?",
                answer: [
                    "If you're a current student, it's easiest to speak with one of our staff members at your next class or open time. If you're not a current student, or can't make it to classes for a while, please contact our information list, and we'll get back to you as soon as possible.",
                    "If the item or item(s) you want are in stock, we'll take payment either in person or via our website, then you can take the item home that day (if in person), or we'll mail it to you within 1 business day (if not able to show up in person). If the item you want is not in stock, we typically request at least a 50% down payment for your order prior to placing the order with Century. The remaining 50% is payable at time of delivery, which is normally 5-7 business days after the order is placed.",
                    "We do incur shipping costs from Century, but these are normally waived for students. The only exception is if you order something very heavy or bulky, like a heavy bag, and want it delivered to your home. In this case, shipping costs may be incurred since we'll need to order the items and re-ship them to you."
                ]
            }
        ]
    },
    {
        title: "Governance",
        questions: [
            {
                question: "Is the Sinking Moon School of Kung Fu a non-profit?",
                answer: "Yes, we are a registered non-profit in the state of Minnesota. We are currently awaiting our 501(c)(3) status from the federal government."
            },
            {
                question: "Who makes decisions for the organization?",
                answer: "The organization has a board of directors who make decisions of an administrative nature to the organization. The head instructor, Scott, makes all decisions regarding curriculum and teaching."
            }
        ]
    },
    {
        title: "Class Rules",
        questions: [
            {
                question: "Is it required for students to wear uniforms?",
                answer: "Yes. All students, with the exception of those participating in class for the first time, must wear black martial arts pants, a cross-over Gi top with the Sinking Moon School of Kung Fu logo on the left breast, and a belt indicative of their rank. Many students also choose to wear a base-layer shirt underneath their uniform top, and RingStar sparring shoes. Street shoes are not allowed on the mats, but a pair of low-tread (e.g. wrestling) shoes is acceptable, provided they are worn only during Kung Fu classes, and not outside a gym. If preferred, students may participate in class barefoot."
            },
            {
                question: "What should I do if I forget my uniform?",
                answer: "In general, students should strive to wear their uniform every class. However, accidents do happen, and sometimes one leaves one's uniform at home. In this situation, an instructor can provide you with a uniform top to use for the current class. Students are allowed to participate in class, even if a uniform is not available, since simple mistakes shouldn't hold students back from participation."
            }
        ]
    },
    {
        title: "Ranks and Advancement",
        questions: [
            {
                question: "Does the Sinking Moon School of Kung Fu award belt ranks?",
                answer: "Yes. Please see <a href=\"/ranks\">Belt Rankings</a> for more information."
            },
            {
                question: "What is the purpose of handing out belt ranks?",
                answer: [
                    "There are a number of reasons we award belt rankings to students. The first is tradition. Historically, training in the martial arts requires training in discipline. One aspect of discipline is to present a consistent look among all members of the school. Part of the uniform that was expected to be worn involved a belt, which, when new, was white. After years of hard training, the belt would slowly turn from white to yellow, from yellow to brown, and from brown to black. Thus, one could tell the length of a student's training by looking at the color of the belt.",
                    "Another reason is recognition. A student should have the opportunity to feel as though they achieved something. They should be proud of their accomplishments, and it should be easily visible to others in the organization.",
                    "Finally, belts (more specifically the belt colors) give instructors the opportunity to teach through both symbolism (each belt represents a specific aspect of a student's training) and by giving other students something to strive toward."
                ]
            },
            {
                question: "How long does it take for someone to achieve the rank of Black Belt?",
                answer: [
                    "The Wu Chi Kung Fu Association, of which the Sinking Moon School of Kung Fu is a member school, mandates that a student must spend a minimum of five years of active training before being eligible for the rank of Black Belt, 1st Dan. That said, few students achieve this rank in the minimum time. It is not uncommon for students to require six or seven years to attain the rank of first level Black Belt. With uninterrupted training, however, it is also unlikely to take more than seven years.",
                    "It's important to remember, though, that not everyone will receive a Black Belt. The rank is awarded through the successful completion of the training curriculum, and not solely based on time attending classes in the school."
                ]
            },
            {
                question: "What is a 'high rank'?",
                answer: [
                    "A 'high rank' is a student that has achieved a blue belt or higher in our school. These are students that have been with the organization for a substantial amount of time, and have experience in all aspects of the art. They are often called upon to assist instructors in teaching less experienced students during class."
                ]
            },
            {
                question: "How can I identify a high rank student?",
                answer: [
                    "A high rank will wear a blue, purple, red, or black belt along with their student uniform. In addition, they will have a chevron patch underneath the school patch on the front of their uniform.",
                    "All students should be able to gain advice from any student that is higher in rank than they are, but high ranks are especially good sources for advice if an instructor isn't immediately present. Part of the high rank curriculum is learning how to teach other students."
                ]
            }
        ]
    },
    {
        title: "Other Martial Arts Schools",
        questions: [
            {
                question: "Will my belt rank in a different martial arts school transfer to the Sinking Moon School of Kung Fu?",
                answer: [
                    "In general, no. However, there are some exceptions to this rule.",
                    "If you are a student of another member school of the Wu Chi Kung Fu Association, then it's very likely your rank will transfer, at least in part, to the Sinking Moon School of Kung Fu. Each member school of the Wu Chi Kung Fu Association is given fairly wide latitude in specifying the belt ranking system within their school. There is, however, a core curriculum shared among all member schools within the Wu Chi Kung Fu Association, so typically students transferring from one member school to another will be within one to two rank levels of their rank at their previous school.",
                    "Students of schools which are not chartered members of the Wu Chi Kung Fu Association will be required to start from the rank of white belt at the Sinking Moon School of Kung Fu. The purpose of the belt ranking system is to rank students' knowledge and experience within the curriculum of the Sinking Moon School of Kung Fu. Since curricula vary widely amongst martial art schools within the same style, (and even moreso between styles), it's not possible to determine an appropriate rank for a student from another style or school. That said, students who have previous martial art experience tend to make their way through the lower ranks more quickly than those students starting without any fighting experience."
                ]
            }
        ]
    },
    {
        title: "Wu Chi Kung Fu Association",
        questions: [
            {
                question: "What is the Wu Chi Kung Fu Association?",
                answer: "The Wu Chi Kung Fu Association is a national organization that oversees the teaching of the Wu Chi style of Kung Fu. Its purpose is to establish core curricula that each member school will teach."
            },
            {
                question: "What does it mean for the Sinking Moon School of Kung Fu to be a chartered member school of the Wu Chi Kung Fu Association?",
                answer: [
                    "The curriculum for the Sinking Moon School of Kung Fu adheres to the requirements set forth by the Wu Chi Kung Fu Association, in terms of minimum required knowledge necessary for the advancement of a student from White Belt through Black Belt.",
                    "As a chartered member school of the Wu Chi Kung Fu Association, the students of the Sinking Moon School of Kung Fu are given special privileges. Among these are:",
                    {
                        type: "embedded-list",
                        elements: [
                            "the ability to visit other Wu Chi Kung Fu Association member schools and attend classes",
                            "invitation to Wu Chi Kung Fu Association national events (e.g. the Ryan Carden Memorial Tournament)",
                            "access to instruction from the Wu Chi Kung Fu Association's College of Black Belts (in the event a student wishes to train in an area of expertise that the instructors of the Sinking Moon School of Kung Fu aren't adept at)",
                            "recommendation to become a member of the College of Black Belts, upon completion of the required curriculum of the Sinking Moon School of Kung Fu and advancement to the rank of Black Belt"
                        ]
                    }
                ]
            },
            {
                question: "How is the Wu Chi Kung Fu Association goverened?",
                answer: "The Wu Chi Kung Fu Association is governed by the College of Black Belts. Each member of the College is given a certain number of votes, depending on their ranking within the overarching association."
            }
        ]
    },
    {
        title: "Pricing and Billing",
        questions: [
            {
                question: "Why is there a startup cost?",
                answer: "The Sinking Moon School of Kung Fu incurs a cost for each student it teaches. New students are actually more expensive to the organization than students who are already established, mostly in the form of additional supplies required (e.g. uniforms, belts, sparring equipment). In order to offset this additional expense, the Sinking Moon School of Kung Fu charges a one-time startup fee for all new students. As part of this cost, students are given a uniform, a school base-layer shirt, a white belt, a water bottle, and new-student orientation documents."
            },
            {
                question: "If I pay the startup fee, and then discountinue my membership, but resume it at a later date, do I need to pay the startup fee again?",
                answer: "No. The startup fee is a one-time cost, charged to each student, designed to offset the expenses the Sinking Moon School of Kung Fu incurs to train new students."
            },
            {
                question: "What happens if I'm late on my membership dues payment?",
                answer: [
                    "We'll gently remind you that payment is expected on the first of each month. No late fees will be charged, but students who are behind by several months may be asked to make arrangements to pay for back-payments before attending further classes.",
                    "Because the Sinking Moon School of Kung Fu runs very lean on its accounting, it is important that all students pay membership dues on time, so that the organization can meet its expenses for the given month (e.g. rent)."
                ]
            },
            {
                question: "Can discounts be stacked on top of one another?",
                answer: "No. Only one discount can be applied per individual. However, if there are multiple individuals on the same bill, then each individual on the bill can have one discount applied."
            },
            {
                question: "Can I get a refund for membership dues or startup packages?",
                answer: [
                    "No, we don't offer refunds for either membership dues or startup packages.",
                    "If you have problems with the equipment you received as part of the startup package (e.g. defective equipment, wrong size uniform, etc...), we will gladly exchange it for a different piece of equipment, provided it's in the same condition as when it was given to you."
                ]
            },
            {
                question: "If I discontinue my membership mid-subscription, can I receive a refund for the portion of the subscription I haven't used?",
                answer: [
                    "No. We don't offer refunds on membership dues or startup fees. If you know you won't be able to make it to class for a large amount of time (e.g. a month), we recommend you notify us in advance, and we'll suspend your membership dues.",
                    "This seems like a strict policy, but it's mostly to protect our organization, as our operating costs are completely supported by membership. In fact, it's often the case that our membership costs are insufficient to cover our operating expenses, and, as such, we require outside investment to keep classes in operation. We simply don't have the resources to offer refunds based on members changing their minds mid-payment cycle. The reason we offer discounts on the subscription packages that are more long-term is to aid us in planning our budget well in advance, and this benefit to the organization would be offset if we had to consider whether any given student is going to discontinue their membership mid-billing cycle."
                ]
            },
            {
                question: "Can I make a donation to the Sinking Moon School of Kung Fu?",
                answer: "Absolutely. Thank you for thinking of us. Please contact our <a href=\"mailto:info@sinkingmoon.com\">information list</a> to find out how we can process your donation. Please note that, since we are not currently a federally registered 501(c)(3), donations to the Sinking Moon School of Kung Fu are not tax-deductible on your federal taxes."
            },
            {
                question: "Once I've activated a subscription, can I suspend my subscription and go back to paying monthly?",
                answer: "Of course. It's usually easier to accomplish this by letting one of our staff know, rather than trying to cancel the subscription through our payment processor, though. Simply talk to one of our staff members next time you come to class and we can cancel it for you."
            }
        ]
    }
]

const FAQPage = (props) => {
    let renderedFaqSections = [];
    faqSections.forEach((faqSection, index) => {
        renderedFaqSections.push((
            <FAQSection title={faqSection.title} questions={faqSection.questions} />
        ))
    });

    return (
        <InfoPage
            title={title}
            mainImage={mainImage}
            topParagraphs={topParagraphs}
            menu={topMenu}
            sidebar={sidebar}
            sitemap={sitemap}>
            {renderedFaqSections}
        </InfoPage>
    );
}

export default FAQPage;
