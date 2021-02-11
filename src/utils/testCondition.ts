export default ({
  fieldValue,
  operator,
  value,
}: {
  fieldValue: any;
  operator: string;
  value: any;
}): boolean => {
  switch (operator) {
    case '==': {
      if (undefined === fieldValue) {
        return false;
      }

      switch (typeof fieldValue) {
        case 'string': {
          return Boolean(0 === String(fieldValue).localeCompare(value));
        }

        case 'number':
        default: {
          return Boolean(fieldValue === value);
        }
      }
    }

    case '!=': {
      if (undefined === fieldValue) {
        return false;
      }

      switch (typeof fieldValue) {
        case 'string': {
          return Boolean(0 !== String(fieldValue).localeCompare(value));
        }

        case 'number':
        default: {
          return Boolean(fieldValue !== value);
        }
      }
    }

    case 'in': {
      const newArray = !Array.isArray(value) ? value.split(',') : value;

      return undefined !== fieldValue && Boolean(newArray.includes(fieldValue));
    }

    case 'is': {
      return Boolean(fieldValue);
    }

    case 'not': {
      return !fieldValue;
    }

    case 'not-in': {
      const newArray = !Array.isArray(value) ? value.split(',') : value;
      console.info('value', value);
      console.info('fieldValue', fieldValue);
      console.info('newArray', newArray);

      return undefined !== fieldValue && !newArray.includes(fieldValue);
    }
  }

  return false;
};
