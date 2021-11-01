import { fields, createSchema, validate as _validate } from '..';

const { email, requiredText } = fields;

const login = createSchema({
  PIN: requiredText,
  email,
});

const validate = (data) => {
  _validate(login, data);
};

export default validate;
