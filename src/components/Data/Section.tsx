import hash from 'object-hash';
import React, { FC } from 'react';
import { FormSection } from 'redux-form';
import styled from 'styled-components';

import Group from '../Group';
import Data, { DataProps } from './index';

const SectionSC = styled.div``;

const DataSection: FC<
  DataProps & {
    className?: string;
    name: string;
    formName: string;
    group?: boolean;
    groupOptions?: { [key: string]: any };
    params?: { [key: string]: any };
  }
> = ({
  className,
  datas,
  name,
  formName,
  formValues,
  group,
  groupOptions,
  params,
}) => {
  const SectionCmp = group ? Group : SectionSC;
  const props = group ? groupOptions : {};

  return (
    <SectionCmp className={className} {...props}>
      <FormSection name={name}>
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
      </FormSection>
    </SectionCmp>
  );
};

export default DataSection;
