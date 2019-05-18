import { KeyValidation } from './types';

function required(value: any) {
  return value !== '' && value !== undefined && value !== null;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

function createValidator(check: (arg: any) => boolean, errorMessage: string) {
  return function(value: any): KeyValidation {
    const isValid = check(value);
    return { isValid, validationErrors: isValid ? [] : [errorMessage] };
  };
}

const commonValidators = {
  required: createValidator(required, 'value is missing'),
  isString: createValidator(isString, 'value has to be a string'),
  isNumber: createValidator(isNumber, 'value has to be a number'),
  isBoolean: createValidator(isBoolean, 'value has to be a boolean')
};

export default commonValidators;
