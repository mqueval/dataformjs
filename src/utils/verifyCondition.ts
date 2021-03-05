import { DataConditionTestProps } from '../components/Data/Condition';
import testCondition from './testCondition';

export default ({
  formValues,
  test,
}: {
  formValues: { [key: string]: any };
  test: DataConditionTestProps | DataConditionTestProps[];
}): boolean => {
  const valid: boolean[] = [];

  const testArray: DataConditionTestProps[] = !Array.isArray(test)
    ? [test]
    : test;

  testArray.forEach(({ field, operator, value }) => {
    if (field && formValues) {
      const fieldArray = field.split('.');

      const fieldValue = fieldArray.reduce(
        (acc, tmp) => {
          if (acc) {
            if (tmp && tmp.split('[').length > 1) {
              // c'est un tableau
              const [newTmp, index] = tmp.slice(0, tmp.length - 1).split('[');
              if (Object.keys(acc).includes(newTmp) && acc[newTmp][index]) {
                return acc[newTmp][index];
              }
            } else if (Object.keys(acc).includes(tmp)) {
              return acc[tmp];
            }
          }

          return undefined;
        },

        formValues,
      );

      // if (undefined !== fieldValue) {
      valid.push(testCondition({ fieldValue, operator, value }));
      // } else {
      // valid.push(false);
      // }
    }
  });

  return !valid.some(val => !val);
};
