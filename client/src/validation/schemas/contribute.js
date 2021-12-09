import { fields, createSchema, validate as _validate } from '..';

const { title, optionalDate, requiredText, optionalText, email } = fields;

const contributeEvent = createSchema({
  title,
  date: optionalDate,
  description: requiredText,
  previewText: requiredText,
  moreInfo: optionalText,
  sources: optionalText,
  latitude: optionalText,
  longitude: optionalText,
  geotagInfo: optionalText,
  geotagDescription: optionalText,
  visitorInformation: optionalText,
  authorName: optionalText,
  authorUrl: optionalText,
  email,
});

const validate = (data) => _validate(contributeEvent, data);

export default validate;
