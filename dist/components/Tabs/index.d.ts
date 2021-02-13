import React from 'react';
import { DataProps } from '../Data';
declare type TabType = {
    name: string;
    condition: {
        field: string;
        operator: '==' | '!=';
        value: any;
    };
};
declare type TabProps = string | TabType;
export interface TabsProps extends DataProps {
    barClassName?: string;
    barItemClassName?: string;
    formName: string;
    tabs: TabProps[];
}
export interface TabsPageInfoProps {
    index: number;
    isActive?: boolean;
    title: string;
}
declare const _default: import("react-redux").ConnectedComponent<React.VFC<TabsProps & {
    formValues: {
        [key: string]: any;
    };
}>, Pick<TabsProps & {
    formValues: {
        [key: string]: any;
    };
}, "label" | "title" | "name" | "className" | "required" | "formName" | "componentType" | "params" | "actions" | "actionsClassName" | "customInfos" | "datas" | "test" | "barClassName" | "barItemClassName" | "tabs"> & TabsProps>;
export default _default;
