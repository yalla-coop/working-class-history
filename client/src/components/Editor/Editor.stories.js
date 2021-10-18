import React, { useState } from 'react';

import Editor from '.';

export default {
  title: 'Common Components/Editor',
  component: Editor,
};

const Template = (args) => {
  const [editorHtml, setEditorHtml] = useState('');
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Editor editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: editorHtml }}
        style={{ border: '1px solid gold', marginTop: 50 }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
