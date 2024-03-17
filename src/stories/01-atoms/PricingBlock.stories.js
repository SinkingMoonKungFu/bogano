import { PricingBlock } from '../../components/01-atoms/PricingBlock';

export default {
  title: 'Atoms/PricingBlock',
  component: PricingBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Some Price Info",
    description: "Some information about pricing for some item. Make sure that you know that the prices themselves will be separated by dots. This is a pretty cool way of explaining price information.",
    prices: [
        {
            name: "Standard",
            price: "$100"
        },
        {
            name: "Premium",
            price: "$225"
        }
    ]
  }
};