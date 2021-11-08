import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';
import HTMLElementProps from '../../props';

export type FlexProps = HTMLElementProps;

const FlexSC = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props =>
    !props.justify && !props.justifyContent && 'flex-start'};
  align-items: ${props => !props.items && !props.alignItems && 'stretch'};
  align-content: ${props =>
    !props.content && !props.alignContent && 'flex-start'};

  ${createStyles};
`;

const Flex: FC<FlexProps> = ({ children, direction = 'column', ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <FlexSC as={sc && sc.flex} direction={direction} {...props}>
      {children}
    </FlexSC>
  );
};

export default Flex;
