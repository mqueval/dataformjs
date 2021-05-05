import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const RowsSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  > * + * {
    margin-top: 1.5rem;
  }
`;

const Rows: FC = ({ children, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <RowsSC as={sc && sc.rows} {...props}>
      {children}
    </RowsSC>
  );
};

export default Rows;
