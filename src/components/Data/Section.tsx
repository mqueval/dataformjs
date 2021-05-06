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
    groupProps?: { [key: string]: any };
    params?: { [key: string]: any };
  }
> = ({
  className,
  datas,
  name,
  formName,
  formValues,
  group,
  groupProps,
  params,
}) => {
  const SectionCmp = group ? Group : SectionSC;
  const props = group ? groupProps : {};

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
