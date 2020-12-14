import hash from 'object-hash';
import React, { FC } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { getFormValues } from 'redux-form';

import verifyCondition from '../../utils/verifyCondition';
import Data, { DataProps } from './index';

export type DataContitionOperation = '==' | '!=' | 'in';

export interface DataConditionTestProps {
  field: string;
  operator: DataContitionOperation;
  value: any;
}

interface DataConditionProps extends DataProps {
  datas: DataProps[];
  formName: string;
  test: DataConditionTestProps | DataConditionTestProps[];
  valid?: boolean;
}

const DataCondition: FC<DataConditionProps> = ({ datas, formName, valid }) => {
  if (!valid) {
    return null;
  }

  return (
    <>
      {datas &&
        datas.length > 0 &&
        datas.map(data => (
          <Data key={hash(data)} {...data} formName={formName} />
        ))}
    </>
  );
};

export default connect((state: DefaultRootState, props: DataConditionProps): {
  valid: boolean;
} => {
  if (!props.formName) {
    throw new Error('the formName props est obligatoire');
  }

  const formValues: { [key: string]: any } = getFormValues(props.formName)(
    state,
  );

  const { test } = props;

  return {
    valid: verifyCondition({ formValues, test }),
  };
})(DataCondition);
