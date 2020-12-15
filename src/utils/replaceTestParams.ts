import { DataConditionTestProps } from '../components/Data/Condition';

export default (
  test: DataConditionTestProps | DataConditionTestProps[],
  params: { [key: string]: any },
): DataConditionTestProps[] => {
  const newTest = !Array.isArray(test) ? [test] : test;

  return newTest.map(t => {
    let { field } = t;
    if (field && params.name) {
      field = field.replace(/{{name}}/gi, params.name);
    }

    return {
      ...t,
      field,
    };
  });
};
