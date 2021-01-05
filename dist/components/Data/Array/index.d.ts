import { ReactNode, VoidFunctionComponent } from 'react';
import { DataProps } from '../index';
export interface DataArrayProps extends DataProps {
    addButtonClassName?: string;
    addButtonIcon?: ReactNode | string;
    addButtonId?: string;
    addButtonPosition?: string;
    addButtonLabel?: string;
    addButtonSize?: string;
    addButtonStatus?: string;
    datas: DataProps[];
    defaultValue?: string;
    formName: string;
    group?: boolean;
    groupTitle?: string;
    groupClassName?: string;
    params?: {
        [key: string]: any;
    };
    removeButtonClassName?: string;
    removeButtonIcon?: ReactNode | string;
    removeButtonLabel?: string;
    removeButtonSize?: string;
    removeButtonStatus?: string;
}
declare const DataArray: VoidFunctionComponent<DataArrayProps & {
    name: string;
}>;
export default DataArray;
