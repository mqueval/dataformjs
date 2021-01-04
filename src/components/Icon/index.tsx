import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';

const Icon: FC<{ color?: string; value: ReactNode }> = ({ color, value }) => {
  const { t, sc } = useContext(FormidableContext);

  if (typeof React.Component === typeof value) {
    const IconCmp: any = value as React.ReactElement;

    return <IconCmp color={color} />;
  }

  let IconCmp;

  switch (value) {
    case 'add': {
      if (sc && sc.iconAdd) {
        const IconAdd = sc.iconAdd;

        return <IconAdd color={color} />;
      }

      IconCmp = t ? t('add') : 'add';
      break;
    }

    case 'back': {
      if (sc && sc.iconBack) {
        const IconBack = sc.iconBack;

        return <IconBack color={color} />;
      }
      IconCmp = t ? t('back') : 'back';
      break;
    }

    case 'next': {
      if (sc && sc.iconNext) {
        const IconNext = sc.iconNext;

        return <IconNext />;
      }
      IconCmp = t ? t('next') : 'next';
      break;
    }

    case 'remove': {
      if (sc && sc.iconRemove) {
        const IconRemove = sc.iconRemove;

        return <IconRemove />;
      }
      IconCmp = t ? t('remove') : 'remove';

      break;
    }

    default:
  }

  return <div>{IconCmp}</div>;
};
export default Icon;
