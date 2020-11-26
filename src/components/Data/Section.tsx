import hash from 'object-hash';
import React, { FC } from 'react';
import { FormSection } from 'redux-form';
import styled from 'styled-components';

import Data, { DataProps } from './index';

const SectionSC = styled.div``;

const DataSection: FC<
  DataProps & {
    name: string;
    formName: string;
    params?: { [key: string]: any };
  }
> = ({ datas, name, formName, params, ...props }) => (
  <SectionSC {...props}>
    <FormSection name={name}>
      {datas &&
        datas.length > 0 &&
        datas.map(data => (
          <Data
            key={hash(data)}
            {...data}
            formName={formName}
            params={params}
          />
        ))}
    </FormSection>
  </SectionSC>
);

export default DataSection;
