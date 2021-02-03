import hash from 'object-hash';
import React, { FC } from 'react';
import { connect } from 'react-redux';

import Data, { DataProps } from './index';

interface DataFieldValuesProps extends DataProps {
  formName: string;
  params?: { [key: string]: any };
}
const DataValues: FC<DataFieldValuesProps> = ({
  datas,
  formName,
  formValues,
  params,
}) => {
  console.info('formValues data values', formValues);

  return (
    <div>
      {datas &&
        datas.length > 0 &&
        datas.map(data => (
          <Data
            key={hash(data)}
            {...data}
            formName={formName}
            formValues={formValues}
            params={params}
          />
        ))}
    </div>
  );
};

export default connect(
  (
    { form }: { form: { [key: string]: any } },
    { formName }: DataFieldValuesProps,
  ) => ({
    formValues: form && form[formName] && form[formName].values,
  }),
)(DataValues);
