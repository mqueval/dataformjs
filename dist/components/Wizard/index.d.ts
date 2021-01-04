import { FC, ReactNode } from 'react';
import { FormProps } from '../Form';
export interface WizardProps {
    backStatus?: string;
    backIcon?: ReactNode;
    backIconColor?: string;
    backLabel?: string;
    backClassName?: string;
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
declare const Wizard: FC<WizardProps>;
export default Wizard;
