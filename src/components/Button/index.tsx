import React, { FC, ReactElement, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const ButtonSC = styled.button``;

interface ButtonProps {
  disabled?: boolean;
  iconLeft?: ReactElement;
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  type = 'button',
}) => {
  const { theme } = useContext(FormidableContext);

  if ('submit' !== type && !onClick) {
    return <div>la fonction onClick est obligatoire</div>;
  }

  return (
    <ButtonSC
      as={theme && theme.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonSC>
  );
};

export default Button;
