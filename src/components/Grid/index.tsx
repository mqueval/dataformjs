import React, { FC } from 'react';
import styled from 'styled-components';

export interface GridProps {
  className?: string;
  spacingX?: string;
  spacingY?: string;
}

const GridSC = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
  margin: ${props =>
    `-${
      props.theme.spacing &&
      (props.spacingY
        ? props.theme.spacing[props.spacingY]
        : props.theme.spacing.xs)
    } -${
      props.theme.spacing &&
      (props.spacingX
        ? props.theme.spacing[props.spacingX]
        : props.theme.spacing.xs)
    }`};
`;

const Grid: FC<GridProps> = ({ children, className, spacingX, spacingY }) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacingX, spacingY });
    }

    return child;
  });

  return (
    <GridSC className={className} spacingX={spacingX} spacingY={spacingY}>
      {childrenWithProps}
    </GridSC>
  );
};

export default Grid;
