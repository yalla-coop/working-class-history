import React, { useState } from 'react';
import { Row, Col } from '../../Grid';
import { DateInput } from '../index';

export default {
  title: 'Common Components/Input/DateInput',
  argTypes: {},
};

// BASIC INPUT
const BasicExample = (args) => {
  const [value, setValue] = useState('');

  return (
    <Row>
      <Col w={[4, 6, 4]}>
        <DateInput {...args} value={value} handleChange={setValue} />
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
  error: 'ssss',
  placeholder: 'Type the title here...',
  type: 'text',
  m: { mt: '0' }, // mt, mtT, mtM, mb, mbT, ....
};
