import styled from '@emotion/styled';
import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';
import HTMLElementProps from '../../props';
import convertParams from '../../utils/convertParams';

export interface GroupProps extends HTMLElementProps {
  bodyRemoveTag?: boolean;
  bodyProps?: { [key: string]: any };
  customInfos?: ReactNode;
  customInfosProps?: { [key: string]: any };
  description?: string;
  descriptionProps?: { [key: string]: any };
  params?: { [key: string]: any };
  title?: string;
  titleProps?: { [key: string]: any };
  titleParams?: { [key: string]: any };
}

const CustomInfosSC = styled.div``;
const GroupSC = styled.fieldset``;
const GroupBodySC = styled.div``;
const GroupDescriptionSC = styled.p``;
const LegendSC = styled.legend``;

const Group: FC<GroupProps> = ({
  bodyRemoveTag = false,
  bodyProps,
  className,
  customInfos,
  customInfosProps,
  children,
  description,
  descriptionProps,
  params,
  title,
  titleProps,
  titleParams,
  ...props
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
    <GroupSC as={sc && sc.group} className={className} {...props}>
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

      <GroupBodyCmp {...groupBodyProps}>{children}</GroupBodyCmp>
    </GroupSC>
  );
};

export default Group;
