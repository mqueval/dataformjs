import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const ColumnsSC = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
  margin: ${props =>
    `-${props.spacingY || (props.theme.spacing && props.theme.spacing.xs)} -${
      props.spacingX || (props.theme.spacing && props.theme.spacing.xs)
    }`};
`;

const Columns: FC<GridProps> = ({
  children,
  className,
  spacingX,
  spacingY,
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacingX, spacingY });
    }

    return child;
  });

  return (
    <ColumnsSC className={className} spacingX={spacingX} spacingY={spacingY}>
      {childrenWithProps}
    </ColumnsSC>
  );
};

export default Columns;
