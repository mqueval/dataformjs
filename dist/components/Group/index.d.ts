import { FC, ReactElement } from 'react';
declare type GroupProps = {
    className?: string;
    columns?: boolean;
    columnsClassName?: string;
    customInfos?: ReactElement | ReactElement[];
    customInfosClassName?: string;
    description?: string;
    descriptionClassName?: string;
    title?: string;
};
declare const Group: FC<GroupProps>;
export default Group;
