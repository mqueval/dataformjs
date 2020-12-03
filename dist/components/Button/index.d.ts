import { FC, ReactNode, SyntheticEvent } from 'react';
interface ButtonProps {
    disabled?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    status?: string;
    type?: 'button' | 'submit';
}
declare const Button: FC<ButtonProps>;
export default Button;
