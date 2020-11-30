import React, { FC, ReactNode, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const ButtonSC = styled.button``;

interface ButtonProps {
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({
  children,
  disabled,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
}) => {
  const { sc } = useContext(FormidableContext);

  if ('submit' !== type && !onClick) {
    return <div>la fonction onClick est obligatoire</div>;
  }

  return (
    <ButtonSC
      as={sc && sc.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </ButtonSC>
  );
};

export default Button;
