import { FC } from 'react';
import { FormProps } from '../Form';
export interface WizardProps {
    backProps?: {
        [key: string]: any;
    };
    className?: string;
    pages?: Partial<FormProps> | Partial<FormProps>[];
    id?: string;
    name: string;
    params?: {
        [key: string]: any;
    };
    progressProps?: {
        [key: string]: any;
    };
    progressItemProps?: {
        [key: string]: any;
    };
    progressItemIconProps?: {
        [key: string]: any;
    };
    progressShowStep?: boolean;
    showProgress?: boolean;
}
export interface WizardPageInfoProps {
    isCompleted?: boolean;
    inProgress?: boolean;
}
declare const Wizard: FC<WizardProps>;
export default Wizard;
