import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';

const Icon: FC<{ color?: string; size?: number; value: ReactNode }> = ({
  color,
  size,
  value,
}) => {
  const { t, sc } = useContext(FormidableContext);

  if (typeof React.Component === typeof value) {
    const IconCmp: any = value as React.ReactElement;

    return <IconCmp color={color} size={size} />;
  }

  let IconCmp;

  switch (value) {
    case 'add': {
      if (sc && sc.iconAdd) {
        const IconAdd = sc.iconAdd;

        return <IconAdd color={color} size={size} />;
      }

      IconCmp = t ? t('add') : 'add';
      break;
    }

    case 'back': {
      if (sc && sc.iconBack) {
        const IconBack = sc.iconBack;

        return <IconBack color={color} size={size} />;
      }
      IconCmp = t ? t('back') : 'back';
      break;
    }

    case 'next': {
      if (sc && sc.iconNext) {
        const IconNext = sc.iconNext;

        return <IconNext color={color} size={size} />;
      }
      IconCmp = t ? t('next') : 'next';
      break;
    }

    case 'remove': {
      console.info('button remove');
      if (sc && sc.iconRemove) {
        const IconRemove = sc.iconRemove;

        return <IconRemove color={color} size={size} />;
      }
      IconCmp = t ? t('remove') : 'remove';

      break;
    }

    default:
  }

  return <div>{IconCmp}</div>;
};
export default Icon;
