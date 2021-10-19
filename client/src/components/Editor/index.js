import 'react-quill/dist/quill.snow.css';

import * as S from './style';

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const Editor = ({ setEditorHtml, editorHtml }) => {
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <S.Quill
      theme="snow"
      onChange={handleChange}
      value={editorHtml}
      modules={modules}
      formats={formats}
      bounds={'.app'}
      placeholder="add your description..."
    />
  );
};

export default Editor;
