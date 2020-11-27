import { Validator } from 'redux-form';

export const addValidator = (
  validator: Validator,
  validators?: Validator[],
): Validator[] => {
  const newValidators = validators || [];
  newValidators.push(validator);

  return newValidators;
};

export const isEmail = (value: string): string | undefined =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'email.required'
    : undefined;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isRequired = (value: any): undefined | string =>
  value || 'number' === typeof value ? undefined : 'required';
