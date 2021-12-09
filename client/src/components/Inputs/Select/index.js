import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const Select = ({
  type = 'text',
  name,
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  options,
  color = 'neutral',
  w, // width
  disabled,
  autoComplete,
  selected,
  m, // margins,
  allowClear = true,
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };
  const onChange = (val, opt) => {
    handleChange(val, opt);
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
      <S.Select
        type={type}
        onSelect={onChange}
        showArrow
        allowClear={allowClear}
        disabled={disabled}
        error={error}
        value={selected || undefined}
        {...props}
      >
        {options.map((option) => (
          <S.Option key={option.value} value={option.value}>
            {option.label}
          </S.Option>
        ))}
      </S.Select>

      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default Select;
