import { ComponentType, FC, SyntheticEvent } from 'react';
import { FormProps } from '../Form';
import { WizardPageInfoProps } from './index';
interface ProgressBarProps {
    handleStepButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
    iconStep?: ComponentType<any>;
    iconSuccess?: ComponentType<any>;
    infos: WizardPageInfoProps[];
    page: number;
    pages: Partial<FormProps>[];
    className?: string;
    itemClassName?: string;
    itemIconClassName?: string;
    showStep?: boolean;
}
declare const ProgressBar: FC<ProgressBarProps>;
export default ProgressBar;
