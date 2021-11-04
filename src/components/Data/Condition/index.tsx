import React, { FC } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { getFormValues } from 'redux-form';

import replaceTestParams from '../../../utils/replaceTestParams';
import verifyCondition from '../../../utils/verifyCondition';
import { DataProps } from '../index';
import DataWithChildren, { DataWithChildrenProps } from '../WithChildren';

export interface DataConditionTestProps {
  field: string;
  operator: string;
  value?: any;
}

export interface DataConditionProps extends DataProps, DataWithChildrenProps {
  test: DataConditionTestProps | DataConditionTestProps[];
  valid?: boolean;
}

const DataCondition: FC<DataConditionProps> = ({ datas, valid, ...props }) => {
  if (!valid) {
    return null;
  }

  return <DataWithChildren {...props} datas={datas} />;
};

export default connect(
  (
    state: DefaultRootState,
    props: DataConditionProps,
  ): {
    valid: boolean;
  } => {
    if (!props.formName) {
      throw new Error('the formName props est obligatoire');
    }

    const formValues: { [key: string]: any } = getFormValues(props.formName)(
      state,
    );

    const { params, test } = props;

    const newTest = params ? replaceTestParams(test, params) : test;

    const valid = verifyCondition({ formValues, test: newTest });

    return {
      valid,
    };
  },
)(DataCondition);
