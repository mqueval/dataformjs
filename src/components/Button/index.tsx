import React, { FC, ReactNode, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Icon from '../Icon';

const ButtonSC = styled.button``;

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  iconColor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  id?: string;
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  size?: string;
  status?: string;
  tooltip?: string;
  type?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  iconColor,
  iconLeft,
  iconRight,
  id,
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

  console.info('iconLeft', iconLeft);

  return (
    <ButtonSC
      as={sc && sc.button}
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
      size={size}
      status={status}
      type={type}
      {...props}
    >
      {iconLeft && <Icon color={iconColor} value={iconLeft} />}
      {children && <span>{children}</span>}
      {iconRight && <Icon color={iconColor} value={iconRight} />}
    </ButtonSC>
  );
};

export default Button;
