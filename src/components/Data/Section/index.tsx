import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { FC } from 'react';
import { FormSection } from 'redux-form';

import Data from '../index';
import { DataWithChildrenProps } from '../WithChildren';

const SectionSC = styled.div``;

export interface DataSectionProps extends DataWithChildrenProps {
  name: string;
}

const DataSection: FC<DataSectionProps> = ({
  className,
  datas,
  name,
  formName,
  formValues,
  mode,
  params,
  position,
  wrapper,
  wrapperFunc,
  ...props
}) => {
  const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <SectionSC className={className} {...props}>
      <FormSection name={name}>
        {newDatas &&
          newDatas.length > 0 &&
          newDatas.map((data, index) => (
            <Data
              key={hash({ ...data, datas: null, params: null })}
              {...data}
              formName={formName}
              formValues={formValues}
              mode={mode}
              params={params}
              position={`${position ? `${position}.` : ''}${name}[${index}]`}
              wrapper={wrapper}
              wrapperFunc={wrapperFunc}
            />
          ))}
      </FormSection>
    </SectionSC>
  );
};

export default DataSection;
