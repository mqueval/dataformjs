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
      const newArray = !Array.isArray(value) ? [value] : value;

      return undefined !== fieldValue && Boolean(newArray.includes(fieldValue));
    }

    case 'is': {
      return Boolean(fieldValue);
    }

    case 'not': {
      return !fieldValue;
    }
  }

  return false;
};
