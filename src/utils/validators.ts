import moment from 'moment';
import { Validator } from 'redux-form';

export const addValidator = (
  validator: Validator,
  validators?: Validator[],
): Validator[] => {
  const newValidators = validators || [];
  newValidators.push(validator);

  return newValidators;
};

export const isDate = (value: string): string | undefined => {
  console.info('isDate', moment(value));

  return value && !moment(value, 'DD/MM/YYYY').isValid()
    ? 'validator.date.error'
    : undefined;
};

export const isEmail = (value: string): string | undefined =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'validator.email.error'
    : undefined;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isRequired = (value: any): undefined | string =>
  value || 'number' === typeof value ? undefined : 'required';

export const isTime = (value: string): string | undefined =>
  value && !/^([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(value)
    ? 'validator.time.error'
    : undefined;
