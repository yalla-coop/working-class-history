import * as S from './style';
import { Typography as T } from '../../index';
import * as CS from '../style';

const DateInput = ({ value, handleChange, error, label, ...props }) => {
  return (
    <>
      {label && (
        <CS.Label htmlFor={label}>
          <T.H4 color="neutral" m="0" ml="20px" mb="2">
            {label}
          </T.H4>
        </CS.Label>
      )}
      <S.DatePicker
        size="large"
        value={value}
        format="DD/MM/YYYY"
        onChange={handleChange}
        {...props}
      />
      {error && <T.P color="error">{error}</T.P>}
    </>
  );
};

export default DateInput;
