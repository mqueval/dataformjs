import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';
import HTMLElementProps from '../../props';

export interface BoxProps extends HTMLElementProps {
  sticky?: number;
}

const BoxSC = styled.div<BoxProps>`
  display: flex;
  align-self: ${props => !props.self && !props.alignSelf && 'auto'};
  flex-direction: ${props =>
    !props.direction && !props.flexDirection && 'column'};
  width: 100%;

  div:not(.grid) > & {
    margin-bottom: ${props => props.theme.spacing[props.theme.defaultSpace]};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  div.grid + & {
    margin-top: ${props => props.theme.spacing[props.theme.defaultSpace]};
  }

  ${createStyles}
`;

const Box: FC<BoxProps> = ({ children, order = 0, sticky, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <BoxSC as={sc && sc.box} order={order} {...props}>
      {sticky ? (
        <div className={`sticky top-${sticky}`}>{children}</div>
      ) : (
        children
      )}
    </BoxSC>
  );
};

export default Box;
