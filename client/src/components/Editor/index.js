import 'react-quill/dist/quill.snow.css';

import * as S from './style';
import * as T from '../Typography';

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

const Editor = ({ setEditorHtml, editorHtml, label, placeholder, error }) => {
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <>
      {label && (
        <S.Label htmlFor={label}>
          <T.H4 color={error ? 'error' : 'neutral'} m="0" ml="20px" mb="2">
            {label}
          </T.H4>
        </S.Label>
      )}

      <S.Quill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={modules}
        formats={formats}
        bounds={'.app'}
        placeholder={placeholder || 'add your description...'}
        error={error}
      />
      {error && (
        <T.P color="error" style={{ width: '100%' }}>
          {error}
        </T.P>
      )}
    </>
  );
};

export default Editor;
