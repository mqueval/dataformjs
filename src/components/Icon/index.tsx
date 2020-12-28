import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';

const Icon: FC<{ value?: ReactNode }> = ({ value }) => {
  const { t, sc } = useContext(FormidableContext);

  let IconCmp = value;
  if ('string' === typeof value) {
    switch (value) {
      case 'add': {
        if (sc && sc.iconAdd) {
          const IconAdd = sc.iconAdd;

          return <IconAdd />;
        }

        IconCmp = t ? t('add') : 'add';
        break;
      }

      case 'back': {
        if (sc && sc.iconBack) {
          const IconBack = sc.iconBack;

          return <IconBack />;
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
  }

  return <div>{IconCmp}</div>;
};
export default Icon;
