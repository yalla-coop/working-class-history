/* eslint-disable no-console */
import React from 'react';

import Button from '.';
import { Col, Row } from '../Grid';

export default {
  title: 'Common Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Row>
      <Col w={[4, 4, 4]}>
        <Button {...args} handleClick={() => console.log('Clicked')} />
      </Col>
    </Row>
  );
};

export const yellow = Template.bind({});
yellow.args = {
  bgColor: 'primaryMain',
  textColor: 'neutral',
  disabled: false,
  loading: false,
  text: 'Save + Approve',
};

export const Reject = Template.bind({});
Reject.args = {
  bgColor: 'primaryMain',
  textColor: 'neutral',
  disabled: false,
  loading: false,
  text: 'Reject',
  w: '300px',
};

export const yellowNarrow = Template.bind({});
yellowNarrow.args = {
  bgColor: 'primaryMain',
  textColor: 'neutral',
  disabled: false,
  loading: false,
  w: '300px',
};

export const SupportUs = Template.bind({});
SupportUs.args = {
  bgColor: 'neutral',
  textColor: 'primaryMain',
  disabled: false,
  loading: false,
  text: 'Support us',
};

export const Edit = Template.bind({});
Edit.args = {
  bgColor: 'neutral',
  textColor: 'white',
  disabled: false,
  loading: false,
  text: 'Edit',
  w: '300px',
};

export const Approve = Template.bind({});
Approve.args = {
  bgColor: 'tertiaryMain',
  textColor: 'white',
  disabled: false,
  loading: false,
  text: 'Approve',
};

export const Loading = Template.bind({});
Loading.args = {
  disabled: false,
  loading: true,
};

export const Disable = Template.bind({});
Disable.args = {
  disabled: true,
  loading: false,
};
