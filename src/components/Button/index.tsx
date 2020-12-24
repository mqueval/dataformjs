import React, { FC, ReactNode, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Icon from '../Icon';

const ButtonSC = styled.button``;

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  size?: string;
  status?: string;
  type?: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  iconLeft,
  iconRight,
  onClick,
  size,
  status,
  type = 'button',
  ...props
}) => {
  const { sc } = useContext(FormidableContext);

  if ('submit' !== type && !onClick) {
    return <div>la fonction onClick est obligatoire</div>;
  }

  return (
    <ButtonSC
      as={sc && sc.button}
      className={className}
      disabled={disabled}
      onClick={onClick}
      size={size}
      status={status}
      type={type}
      {...props}
    >
      {iconLeft && <Icon value={iconLeft} />}
      {children && <span>{children}</span>}
      {iconRight && <Icon value={iconRight} />}
    </ButtonSC>
  );
};

export default Button;
