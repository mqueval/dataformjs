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
  datasClassName?: string;
  description?: string;
  descriptionClassName?: string;
  grid?: boolean;
  gridClassName?: string;
  params?: { [key: string]: any };
  title?: string;
  titleAs?: 'div';
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
  customInfos,
  customInfosClassName,
  datasClassName,
  description,
  descriptionClassName,
  grid,
  params,
  title,
  titleAs,
  titleClassName,
  titleParams,
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <GroupSC as={sc && sc.group} className={className}>
      {customInfos && <div className={customInfosClassName}>{customInfos}</div>}
      {title && (
        <LegendSC as={titleAs} className={titleClassName}>
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
      {columns && <Columns className={datasClassName}>{children}</Columns>}
      {grid && <Grid className={datasClassName}>{children}</Grid>}
      {!columns && !grid && <div className={datasClassName}>{children}</div>}
    </GroupSC>
  );
};

export default Group;
