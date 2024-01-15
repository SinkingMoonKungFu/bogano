import { BeltRankListItem } from "../../components/02-molecules/BeltRankListItem";

export default {
  title: "Molecules/BeltRankListItem",
  component: BeltRankListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const RedBelt = {
  args: {
    beltColor: "red",
    element: "Fire",
    descriptionParagraphs: [
      "Red Belt, at its core, represents the element of fire. The most prominent example of fire in our everyday lives is that of the sun. The sun is a giant ball of flame: all-consuming and enormous in its mass. While the sun is dangerous and indicative of fire, it is also the most abundant source of energy and warmth. Without the sun, no life would be able to survive on Earth.",
      "Students should be developing their fire style at this rank in the form of Phoenix and/or Tiger styles of Kung Fu. Nerve strikes should be a focus for students at the rank of Red Belt, in order to target points that 'burn like fire' when successfully struck. As the sun is all-consuming, so too should the student be able to consume his or her opponent in the ring. As the sun forces the planets to rotate around it, so too should the student control his or her matches and force opponents to move around them. At this rank, students should also be perfecting their teaching skills, and assisting and helping younger students to achieve their goals.",
      "Upon satisfaction of the requirements at Red Belt and completion of a formal test, students will be advanced to the rank of Black Belt, Yi Dan (White Sash), and recommended to the Wu Chi Kung Fu Association for admittance into the College of Black Belts.",
    ],
  },
};
