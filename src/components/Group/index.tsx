import React, { FC, ReactNode, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import convertParams from '../../utils/convertParams';
import Columns from '../Columns';
import Grid from '../Grid';

type GroupProps = {
  className?: string;
  columns?: boolean;
  columnsClassName?: string;
  customInfos?: ReactNode;
  customInfosClassName?: string;
  description?: string;
  descriptionClassName?: string;
  grid?: boolean;
  gridClassName?: string;
  params?: { [key: string]: any };
  title?: string;
  titleClassName?: string;
  titleParams?: { [key: string]: any };
};

const GroupSC = styled.fieldset``;
const GroupDescriptionSC = styled.p``;
const LegendSC = styled.legend``;

const Group: FC<GroupProps> = ({
  children,
  className,
  columns,
  columnsClassName,
  customInfos,
  customInfosClassName,
  description,
  descriptionClassName,
  grid,
  gridClassName,
  params,
  title,
  titleClassName,
  titleParams,
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <GroupSC as={sc && sc.group} className={className}>
      {customInfos && <div className={customInfosClassName}>{customInfos}</div>}
      {title && (
        <LegendSC as={sc && sc.groupTitle} className={titleClassName}>
          {t ? t(title, convertParams(titleParams, params)) : title}
        </LegendSC>
      )}

      {description && (
        <GroupDescriptionSC
          as={sc && sc.groupDescription}
          className={descriptionClassName}
        >
          {t ? t(description) : description}
        </GroupDescriptionSC>
      )}
      {columns && <Columns className={columnsClassName}>{children}</Columns>}
      {grid && <Grid className={gridClassName}>{children}</Grid>}
      {!columns && !grid && children}
    </GroupSC>
  );
};

export default Group;
