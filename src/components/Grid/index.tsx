import React, { FC } from 'react';
import styled from 'styled-components';

export interface GridProps {
  className?: string;
}

const GridSC = styled.div<GridProps>`
  display: grid;
  column-gap: 1.5rem;
`;

const Grid: FC<GridProps> = ({ children, className }) => (
  // const childrenWithProps = React.Children.map(children, child => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, { spacingX, spacingY });
  //   }
  //
  //   return child;
  // });

  <GridSC className={className}>{children}</GridSC>
);
export default Grid;
