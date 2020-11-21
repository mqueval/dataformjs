import { ReactElement, VoidFunctionComponent } from 'react';
import { DataProps } from '../index';
export interface DataArrayProps extends DataProps {
    addButtonIcon?: ReactElement;
    addButtonPosition?: string;
    addButtonLabel?: string;
    datas: DataProps[];
    defaultValue?: string;
}
declare const DataArray: VoidFunctionComponent<DataArrayProps & {
    name: string;
}>;
export default DataArray;
