import { VFC } from 'react';
import { DataProps } from '../Data';
declare type TabProps = string;
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
