import { VFC } from 'react';
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
    isActive?: boolean;
    title: string;
}
declare const Tabs: VFC<TabsProps>;
export default Tabs;
