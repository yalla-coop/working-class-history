import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const BasicInput = ({
  type = 'text',
  name,
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  color = 'neutral',
  w, // width
  disabled,
  autoComplete,
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

  // const Component = type === 'password' ? S.PasswordInput : S.Input;
  return (
    <CS.Field w={w} disabled={disabled} {...m}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.H4 color={error ? 'error' : 'neutral'} m="0" ml="20px" mb="2">
            {label}
          </T.H4>
        </CS.Label>
      )}
      <S.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        color={decideColor()}
        disabled={disabled}
        autoComplete={autoComplete || 'on'}
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

export default BasicInput;
