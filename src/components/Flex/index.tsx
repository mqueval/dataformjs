import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { FormidableContext } from '../../index';

export interface FlexProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

const FlexSC = styled.div<FlexProps>`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: ${props => props.direction};
  }

  ${props => {
    switch (props.direction) {
      case 'column':
      case 'column-reverse': {
        return css`
          > * + * {
            margin-top: 1.5rem;

            @media (max-width: 768px) {
              margin-left: 1.5rem;
              margin-top: 0;
            }
          }
        `;
      }

      default:
        return css`
          > * + * {
            margin-left: 1.5rem;
          }
        `;
    }
  }}
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
