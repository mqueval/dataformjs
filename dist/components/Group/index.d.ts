import { FC, ReactNode } from 'react';
declare type GroupProps = {
    className?: string;
    columns?: boolean;
    columnsClassName?: string;
    customInfos?: ReactNode;
    customInfosClassName?: string;
    description?: string;
    descriptionClassName?: string;
    grid?: boolean;
    gridClassName?: string;
    title?: string;
};
declare const Group: FC<GroupProps>;
export default Group;
