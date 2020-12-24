import { FC, ReactNode, SyntheticEvent } from 'react';
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
declare const Button: FC<ButtonProps>;
export default Button;
