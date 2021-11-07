import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';

export interface FlexProps {
  content?: Property.AlignContent | Property.AlignContent[];
  direction?: Property.FlexDirection | Property.FlexDirection[];
  flex?: Property.Flex | Property.Flex[];
  flow?: Property.FlexFlow | Property.FlexFlow[];
  items?: Property.AlignItems | Property.AlignItems[];
  grow?: Property.FlexGrow | Property.FlexGrow[];
  justify?: Property.JustifyContent | Property.JustifyContent[];
  shrink?: Property.FlexShrink | Property.FlexShrink[];
  wrap?: Property.FlexWrap | Property.FlexWrap[];
  spaceX?: Property.Space | Property.Space[];
  spaceY?: Property.Space | Property.Space[];
}

const FlexSC = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => !props.justify && 'flex-start'};
  align-items: ${props => !props.items && 'stretch'};
  align-content: ${props => !props.content && 'flex-start'};

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
