import 'react-quill/dist/quill.snow.css';

import * as S from './style';
import * as T from '../Typography';

const modules = {
  toolbar: [['bold', 'italic', 'underline', 'blockquote'], ['link'], ['clean']],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

//  have kept formats that are not in the toolbar so we're aware of them if we want to add them in the future
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
  'clean',
];

const Editor = ({
  setEditorHtml,
  editorHtml,
  label,
  placeholder,
  small,
  error,
}) => {
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
        small={small}
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
