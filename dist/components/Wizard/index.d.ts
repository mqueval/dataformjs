import { FC, ReactNode } from 'react';
import { FormProps } from '../Form';
export interface WizardProps {
    backIcon?: ReactNode;
    backIconColor?: string;
    backLabel?: string;
    backClassName?: string;
    backStatus?: string;
    className?: string;
    pages?: Partial<FormProps> | Partial<FormProps>[];
    id?: string;
    name: string;
    params?: {
        [key: string]: any;
    };
    progressClassName?: string;
    progressItemClassName?: string;
    progressItemIconClassName?: string;
    progressShowStep?: boolean;
    showProgress?: boolean;
}
export interface WizardPageInfoProps {
    isCompleted?: boolean;
    inProgress?: boolean;
}
declare const Wizard: FC<WizardProps>;
export default Wizard;
