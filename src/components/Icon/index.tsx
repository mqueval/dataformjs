import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';

const Icon: FC<{ value?: ReactNode }> = ({ value }) => {
  const { t, sc } = useContext(FormidableContext);

  let IconCmp = value;
  if ('string' === typeof value) {
    switch (value) {
      case 'add': {
        if (sc && sc.iconAdd) {
          return sc.iconAdd;
        }
        IconCmp = t ? t('add') : 'add';
        break;
      }

      case 'back': {
        if (sc && sc.iconBack) {
          return sc.iconBack;
        }
        IconCmp = t ? t('back') : 'back';
        break;
      }

      case 'next': {
        if (sc && sc.iconNext) {
          return sc.iconNext;
        }
        IconCmp = t ? t('next') : 'next';
        break;
      }

      case 'remove': {
        if (sc && sc.iconRemove) {
          return sc.iconRemove;
        }
        IconCmp = t ? t('remove') : 'remove';

        break;
      }

      default:
    }
  }

  return <div>{IconCmp}</div>;
};
export default Icon;
