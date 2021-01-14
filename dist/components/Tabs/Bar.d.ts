import { FC, SyntheticEvent } from 'react';
import { TabsPageInfoProps } from './index';
interface TabsBarProps {
    handleButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
    infos: TabsPageInfoProps[];
    className?: string;
    itemClassName?: string;
}
declare const TabsBar: FC<TabsBarProps>;
export default TabsBar;
