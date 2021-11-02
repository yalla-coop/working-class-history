import { fields, createSchema, validate as _validate } from '..';

const { email, requiredText } = fields;

const signup = createSchema({
  name: requiredText,
  explainer: requiredText,
  credentials: requiredText,
  email,
});

const validate = (data) => {
  _validate(signup, data);
};

export default validate;
