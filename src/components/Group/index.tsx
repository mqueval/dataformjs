import styled from '@emotion/styled';
import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';
import convertParams from '../../utils/convertParams';
import Columns from '../Columns';
import Grid from '../Grid';

type GroupProps = {
  bodyRemoveTag?: boolean;
  bodyProps?: { [key: string]: any };
  className?: string;
  columns?: boolean;
  columnsProps?: { [key: string]: any };
  customInfos?: ReactNode;
  customInfosProps?: { [key: string]: any };
  description?: string;
  descriptionProps?: { [key: string]: any };
  grid?: boolean;
  gridProps?: { [key: string]: any };
  params?: { [key: string]: any };
  title?: string;
  titleProps?: { [key: string]: any };
  titleParams?: { [key: string]: any };
};

const CustomInfosSC = styled.div``;
const GroupSC = styled.fieldset``;
const GroupBodySC = styled.div``;
const GroupDescriptionSC = styled.p``;
const LegendSC = styled.legend``;

const Group: FC<GroupProps> = ({
  bodyRemoveTag = false,
  bodyProps,
  children,
  className,
  columns,
  columnsProps,
  customInfos,
  customInfosProps,
  description,
  descriptionProps,
  grid,
  gridProps,
  params,
  title,
  titleProps,
  titleParams,
}) => {
  const { t, sc } = useContext(FormidableContext);

  const GroupBodyCmp = bodyRemoveTag ? React.Fragment : GroupBodySC;
  const groupBodyProps = bodyRemoveTag
    ? {}
    : {
        ...bodyProps,
        as: sc && sc.groupBody,
      };

  return (
    <GroupSC as={sc && sc.group} className={className}>
      {customInfos && (
        <CustomInfosSC as={sc && sc.groupCustomInfos} {...customInfosProps}>
          {customInfos}
        </CustomInfosSC>
      )}
      {title && (
        <LegendSC as={sc && sc.groupTitle} {...titleProps}>
          {t ? t(title, convertParams(titleParams, params)) : title}
        </LegendSC>
      )}

      {description && (
        <GroupDescriptionSC
          as={sc && sc.groupDescription}
          {...descriptionProps}
        >
          {t ? t(description) : description}
        </GroupDescriptionSC>
      )}

      <GroupBodyCmp {...groupBodyProps}>
        {columns && <Columns {...columnsProps}>{children}</Columns>}
        {grid && <Grid {...gridProps}>{children}</Grid>}
        {!columns && !grid && children}
      </GroupBodyCmp>
    </GroupSC>
  );
};

export default Group;
