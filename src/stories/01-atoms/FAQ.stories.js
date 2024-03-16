import { FAQ } from '../../components/01-atoms/FAQ';

export default {
  title: 'Atoms/FAQ',
  component: FAQ,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const OneParagraph = {
  args: {
    question: "Can I use multiple paragraphs in a single FAQ?",
    answer: "Yes."
  }
};

export const MultipleParagraphs = {
    args: {
        question: "What is the square root of -1?",
        answer: [
            "Technically, the square root of -1 doesn't exist. This is because there is no number x such that x*x = -1.",
            "However, this is only true for the set of real numbers. If you consider complex numbers, then the square root of -1 is a number called i, which is an imaginary number."
        ]
    }
}