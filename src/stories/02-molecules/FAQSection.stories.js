import { FAQSection } from '../../components/02-molecules/FAQSection';

export default {
  title: 'Molecules/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: "New Students",
    questions: [
        {
            question: "What should I wear to my first class?",
            answer: [
                "Loose-fitting clothing is preferable. Sweatpants and a T-shirt is generally fine, along with a pair of low-tread shoes (wrestling shoes, martial arts shoes, etc.). In order to maintain cleanliness and avoid damage to our equipment, street shoes, especially sneakers, are not allowed on the mats during workouts. If you don't have a pair of low-tread shoes, you may remove your shoes and socks and workout barefoot.",
                "Avoid clothing that is too constricting, such as button-up shirts and dress pants. It's also good to avoid wearing jeans, if possible, since they don't give the flexibility necessary to perform some of our kicks (as well as being abrasive and uncomfortable)."
            ]
        }
    ]
  }
};