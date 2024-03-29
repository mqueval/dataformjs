import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { FC, useContext } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { getFormValues } from 'redux-form';

import { FormidableContext } from '../../index';
import replaceTestParams from '../../utils/replaceTestParams';
import verifyCondition from '../../utils/verifyCondition';
import Group from '../Group';
import Data, { DataProps } from './index';

const ConditionSC = styled.div``;

// export type DataContitionOperation = '==' | '!=' | 'in';

export interface DataConditionTestProps {
  field: string;
  operator: string;
  value?: any;
}

interface DataConditionProps extends DataProps {
  className?: string;
  datas: DataProps[];
  formName: string;
  group?: boolean;
  groupProps?: { [key: string]: any };
  test: DataConditionTestProps | DataConditionTestProps[];
  valid?: boolean;
}

const DataCondition: FC<DataConditionProps> = ({
  datas,
  formName,
  formValues,
  group,
  groupProps,
  className,
  params,
  valid,
}) => {
  const { sc } = useContext(FormidableContext);

  if (!valid) {
    return null;
  }

  const ConditionCmp = group ? Group : ConditionSC;
  const props = group ? groupProps : {};

  return (
    <ConditionCmp
      className={className}
      {...props}
      as={!group && sc && sc.condition}
    >
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
    </ConditionCmp>
  );
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
