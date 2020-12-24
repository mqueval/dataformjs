import { FC, ReactNode } from 'react';
import { DataProps } from '../Data';
interface ActionProps {
    action?: 'back' | 'next' | 'submit';
    label?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    className?: string;
    status?: string;
}
interface StepProps extends DataProps {
    actions?: ActionProps | ActionProps[];
    actionsClassName?: string;
    backOnClick?: () => void;
    nextOnClick?: () => void;
    formName: string;
}
declare const Step: FC<StepProps>;
export default Step;
