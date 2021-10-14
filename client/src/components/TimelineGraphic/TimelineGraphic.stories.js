import TimelineGraphic from '.';

export default {
  title: 'Common Components/TimelineGraphic',
  component: TimelineGraphic,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <TimelineGraphic {...args} />;

export const Long = Template.bind({});
Long.args = {
  type: 'long',
};

export const Short = Template.bind({});
Short.args = {
  type: 'short',
  number: '1804',
};
