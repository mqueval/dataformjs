import classnames from 'classnames';
import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const ColumnSC = styled.div`
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: 0;
  width: 100%;
`;

const Column: FC<{ sticky?: number }> = ({ children, sticky, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <ColumnSC as={sc && sc.column} {...props}>
      {sticky ? (
        <div className={classnames('sticky', `top-${sticky}`)}>{children}</div>
      ) : (
        children
      )}
    </ColumnSC>
  );
};

export default Column;
