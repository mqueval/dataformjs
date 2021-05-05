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
    params?: {
        [key: string]: any;
    };
    title?: string;
    titleClassName?: string;
    titleParams?: {
        [key: string]: any;
    };
};
declare const Group: FC<GroupProps>;
export default Group;
