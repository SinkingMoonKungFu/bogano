import { InstructorProfile } from "../../components/02-molecules/InstructorProfile";

export default {
  title: "Molecules/InstructorProfile",
  component: InstructorProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const LaoShiScottJohnson = {
  args: {
    image: "/images/laoshiscott.png",
    name: "Scott Johnson",
    title: "Lao Shi",
    roles: [
      "Head Instructor: Sinking Moon School of Kung Fu",
      "President: Sinking Moon Foundation",
      "Secretary: Wu Chi College of Black Belts",
    ],
    biography: [
      "Lao Shi Scott started his journey in the martial arts in 1999 when he joined what was then called the Fire and Water Martial Arts Society (later Wu Chi Martial Arts Society, and now Wu Chi School of Self Defense). In 2006, Scott received his Black Belt alongside Rod Huus in the school's first instance of testing two candidates for Black Belt at the same time.",
      "Scott moved to the Twin Cities in 2006 to attend graduate studies at the University of Minnesota. Between 2006 and 2010, Scott taught a series of classes around the University of Minnesota campus, including at the St. Paul Gym. Scott was advanced by Dashi Gary Cecil to the rank of 2nd Level Black Belt (Yellow Sash) in 2009. In 2010, Scott was asked by Sifu Ryan Carden to serve as the assistant instructor at Wu Chi Fighting Arts.",
      "Scott was advanced to 3rd Level Black Belt (Green Sash) in 2013 when he took over as interim head instructor of Wu Chi Fighting Arts after Sifu Ryan's tragic and unexpected passing. Lao Shi Scott chose to leave Wu Chi Fighting Arts to found his own school, which was official chartered in 2015. In August of 2018, Scott was advanced to 4th Level Black Belt (Blue Sash), by Dashi Gary Cecil, in recognition of his accomplishments in teaching, as well as his work evolving the Phoenix and Xuan Wu forms.",
      "Lao Shi Scott serves as an officer (Secretary) on the Wu Chi Kung Fu Association's College of Black Belts, the governing body of the Wu Chi Kung Fu Association. He was instrumental in drafting the current Constitution and By-laws of the organization, which provides a framework for all member schools within the Wu Chi Kung Fu Association.",
      "Lao Shi Scott has a wife (Amy), a daughter (Autumn), and a son (Quinn), all of whom he adores. Scott is an accomplished Computer Scientist, holding Bachelor's Degrees in Computer Science and Mathematics and a Master's Degree in Computer Science. During the winter months, Scott works as a hockey official for USAHockey Minnesota districts 6 and 8, as well as the Minnesota State High School League. In what little free time he has, Lao Shi Scott enjoys sailing.",
    ],
  },
};
