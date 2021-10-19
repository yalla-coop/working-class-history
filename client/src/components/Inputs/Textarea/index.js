import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const Textarea = ({
  type = 'textarea',
  name = 'textarea',
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  color = 'neutral',
  w, // width
  disabled,
  rows,
  m, // margins
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const onChange = (e) => {
    handleChange(e.target.value, e);
  };

  return (
    <CS.Field w={w} disabled={disabled} {...m}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.H4 color={color} m="0" ml="20px" mb="2">
            {label}
          </T.H4>
        </CS.Label>
      )}
      <S.TextArea
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange && onChange}
        color={decideColor()}
        disabled={disabled}
        rows={rows}
        error={error}
        {...props}
      />

      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default Textarea;
