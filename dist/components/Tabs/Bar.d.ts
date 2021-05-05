import { FC, SyntheticEvent } from 'react';
import { TabsPageInfoProps } from './index';
interface TabsBarProps {
    className?: string;
    handleButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
    infos: TabsPageInfoProps[];
    itemClassName?: string;
}
declare const TabsBar: FC<TabsBarProps>;
export default TabsBar;
