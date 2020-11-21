import { FC, ReactElement, SyntheticEvent } from 'react';
interface ButtonProps {
    disabled?: boolean;
    iconLeft?: ReactElement;
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit';
}
declare const Button: FC<ButtonProps>;
export default Button;
