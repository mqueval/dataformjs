import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { VFC } from 'react';

import Flex from '../Flex';
import Grid from '../Grid';
import Group from '../Group';
import Data, { DataProps } from './index';

export interface DataWithChildrenProps extends DataProps {
  datas: DataProps | DataProps[];
}

const DefaultCmp = styled.div``;

const DataWithChildren: VFC<DataWithChildrenProps> = ({
  componentType,
  datas,
  formName,
  formValues,
  mode,
  params,
  position,
  wrapper,
  wrapperFunc,
  ...props
}) => {
  let Cmp;

  switch (componentType) {
    case 'flex': {
      Cmp = Flex;
      break;
    }

    case 'group': {
      Cmp = Group;
      break;
    }

    case 'grid': {
      Cmp = Grid;
      break;
    }
    default: {
      Cmp = DefaultCmp;
    }
  }

  const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <Cmp {...props}>
      {newDatas &&
        newDatas.length > 0 &&
        newDatas.map((data, index) => (
          <Data
            key={hash(data)}
            {...data}
            formName={formName}
            formValues={formValues}
            mode={mode}
            params={params}
            position={`${position ? `${position}.` : ''}datas[${index}]`}
            wrapper={wrapper}
            wrapperFunc={wrapperFunc}
          />
        ))}
    </Cmp>
  );
};

export default DataWithChildren;
