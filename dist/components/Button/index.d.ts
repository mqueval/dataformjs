import { FC, ReactNode, SyntheticEvent } from 'react';
export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    iconColor?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconSize?: number;
    id?: string;
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    size?: string;
    status?: string;
    tooltip?: string;
    type?: 'button' | 'submit';
}
declare const Button: FC<ButtonProps>;
export default Button;
