import React, { FC, ReactElement, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Columns from '../Columns';

type GroupProps = {
  className?: string;
  columns?: boolean;
  columnsClassName?: string;
  customInfos?: ReactElement | ReactElement[];
  customInfosClassName?: string;
  description?: string;
  descriptionClassName?: string;
  title?: string;
};

const GroupSC = styled.div``;
const GroupDescriptionSC = styled.p``;

const Group: FC<GroupProps> = ({
  children,
  className,
  columns,
  columnsClassName,
  customInfos,
  customInfosClassName,
  description,
  descriptionClassName,
  title,
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <GroupSC as={sc && sc.group} className={className}>
      {title && <legend>{t ? t(title) : title}</legend>}
      {customInfos && <div className={customInfosClassName}>{customInfos}</div>}
      {description && (
        <GroupDescriptionSC
          as={sc && sc.groupDescription}
          className={descriptionClassName}
        >
          {t ? t(description) : description}
        </GroupDescriptionSC>
      )}
      {columns ? (
        <Columns className={columnsClassName}>{children}</Columns>
      ) : (
        children
      )}
    </GroupSC>
  );
};

export default Group;
