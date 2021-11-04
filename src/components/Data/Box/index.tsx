import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { useContext, VFC } from 'react';

import { DataProps, FormidableContext } from '../../../index';
import Data from '../index';
import { DataWithChildrenProps } from '../WithChildren';

export interface DataBoxProps extends DataProps, DataWithChildrenProps {
  order?: number;
  sticky?: number;
}

const BoxSC = styled.div<{ order: number }>`
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: ${props => props.order};
  width: 100%;
`;

const DataBox: VFC<DataBoxProps> = ({
  datas,
  mode,
  order = 0,
  position,
  sticky,
  wrapper,
  wrapperFunc,
  ...props
}) => {
  const { sc } = useContext(FormidableContext);
  const { formName, formValues, params } = props;

  const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;

  const Children =
    newDatas &&
    newDatas.length > 0 &&
    newDatas.map((data, index) => (
      <Data
        key={`${hash(data)}`}
        {...data}
        formName={formName}
        formValues={formValues}
        mode={mode}
        params={params}
        position={`${position ? `${position}.` : ''}datas[${index}]`}
        wrapper={wrapper}
        wrapperFunc={wrapperFunc}
      />
    ));

  return (
    <BoxSC as={sc && sc.column} order={order} {...props}>
      {sticky ? (
        <div className={`sticky top-${sticky}`}>{Children}</div>
      ) : (
        Children
      )}
    </BoxSC>
  );
};

export default DataBox;
