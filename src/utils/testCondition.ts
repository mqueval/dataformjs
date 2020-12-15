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
      switch (typeof fieldValue) {
        case 'string': {
          return Boolean(0 === String(fieldValue).localeCompare(value));
        }

        case 'number':
        default: {
          console.info(fieldValue, value);

          return Boolean(fieldValue === value);
        }
      }
    }

    case '!=': {
      return Boolean(fieldValue !== value);
    }

    case 'in': {
      const newArray = !Array.isArray(value) ? [value] : value;

      return Boolean(newArray.includes(fieldValue));
    }
  }

  return false;
};
