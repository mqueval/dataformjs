import { ReactNode } from 'react';
import { DataProps } from '../Data';
interface FormProps {
    bodyClassName?: string;
    children?: ReactNode;
    className?: string;
    datas?: DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    errorValues?: any;
    forceUnregisterOnUnmount?: boolean;
    formValues?: any;
    footerClassName?: string;
    name: string;
    submitLabel?: string;
}
declare const _default;
export default _default;
