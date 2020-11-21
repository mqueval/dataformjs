import { TFunction } from 'i18next';
import React, { FC, ReactElement } from 'react';
import { Store } from 'redux';
import { DataProps } from './components/Data';
declare const FormidableContext: React.Context<{
    extendData?: ((props: DataProps & {
        formName: string;
        params?: {
            [key: string]: any;
        } | undefined;
    }) => ReactElement<any, any> | null) | undefined;
    store?: Store<any, import("redux").AnyAction> | undefined;
    t?: TFunction | undefined;
    theme?: {
        [key: string]: any;
    } | undefined;
}>;
declare const FormidableProvider: FC<{
    extendData: (props: DataProps & {
        formName: string;
        params?: {
            [key: string]: any;
        };
    }) => ReactElement<any, any> | null;
    t?: TFunction;
    theme?: {
        [key: string]: any;
    };
}>;
export default FormidableContext;
export { FormidableProvider };
