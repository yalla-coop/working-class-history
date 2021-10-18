import React, { useState } from 'react';
import { Row, Col } from '../Grid';
import { BasicInput, Textarea } from './index';

export default {
  title: 'Common Components/Input',
  argTypes: {},
};

// BASIC INPUT
const BasicExample = (args) => {
  const [value, setValue] = useState('');

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <BasicInput {...args} value={value} handleChange={setValue} />
      </Col>
    </Row>
  );
};

export const basic = BasicExample.bind({});
basic.args = {
  color: '',
  label: 'Title (Max 50 characters)',
  w: '100%',
  disabled: false,
  error: '',
  placeholder: 'Type the title here...',
  type: 'text',
  m: { mt: '0' }, // mt, mtT, mtM, mb, mbT, ....
};

// TEXT AREA INPUT
const TextareaExample = (args) => {
  const [value, setValue] = useState('');

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <Textarea {...args} value={value} handleChange={setValue} />
      </Col>
    </Row>
  );
};

export const textArea = TextareaExample.bind({});
textArea.args = {
  color: '',
  label: 'Sources (optional)',
  w: '100%',
  disabled: false,
  error: '',
  placeholder: 'Sources...',
  type: 'text',
  rows: 5,
  m: { mt: '0' }, // mt, mtT, mtM, mb, mbT, ....
};
