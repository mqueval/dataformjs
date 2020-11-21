import React, { FC } from 'react';
import AsyncSelect from 'react-select/async';

import { DataProps } from '../index';

const DataSearchAndForm: FC<DataProps> = ({ name }) => {
  const handleLoadOptions = (inputValue: string): Promise<any> =>
    new Promise((resolve, reject) => {
      console.info('inputValue', inputValue);

      return resolve([{ label: 'Hello world', value: 'hello-world' }]);
    });

  return (
    <div>
      Search+Form
      {name}
      <AsyncSelect defaultOptions loadOptions={handleLoadOptions} />
    </div>
  );
};
export default DataSearchAndForm;
