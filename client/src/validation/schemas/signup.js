import { fields, createSchema, validate as _validate } from '..';

const { email, requiredText } = fields;

const signup = createSchema({
  full_name: requiredText,
  why_join: requiredText,
  academic_credentials: requiredText,
  email,
});

const validate = (data) => {
  _validate(signup, data);
};

export default validate;
