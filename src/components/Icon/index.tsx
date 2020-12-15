import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';

const Icon: FC<{ value?: ReactNode | string }> = ({ value }) => {
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

      case 'remove': {
        console.info('sc', sc);
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
