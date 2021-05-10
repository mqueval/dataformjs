import { FC, ReactNode } from 'react';
declare type GroupProps = {
    bodyRemoveTag?: boolean;
    bodyProps?: {
        [key: string]: any;
    };
    className?: string;
    columns?: boolean;
    columnsProps?: {
        [key: string]: any;
    };
    customInfos?: ReactNode;
    customInfosProps?: {
        [key: string]: any;
    };
    description?: string;
    descriptionProps?: {
        [key: string]: any;
    };
    grid?: boolean;
    gridProps?: {
        [key: string]: any;
    };
    params?: {
        [key: string]: any;
    };
    title?: string;
    titleProps?: {
        [key: string]: any;
    };
    titleParams?: {
        [key: string]: any;
    };
};
declare const Group: FC<GroupProps>;
export default Group;
