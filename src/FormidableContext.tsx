import { TFunction } from 'i18next';
import React, { FC, ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { DataProps } from './components/Data';
import createStore from './createStore';

const defaultState: {
  extendData?: (
    props: DataProps & { formName: string; params?: { [key: string]: any } },
  ) => ReactElement<any, any> | null;
  store?: Store;
  t?: TFunction;
  theme?: { [key: string]: any };
} = {
  extendData: undefined,
  store: undefined,
  t: undefined,
  theme: undefined,
};

const FormidableContext = React.createContext(defaultState);

const FormidableProvider: FC<{
  extendData: (
    props: DataProps & { formName: string; params?: { [key: string]: any } },
  ) => ReactElement<any, any> | null;
  t?: TFunction;
  theme?: { [key: string]: any };
}> = ({ extendData, children, t, theme }) => {
  const [store] = useState<Store>(createStore({}));

  return (
    <FormidableContext.Provider
      value={{
        extendData,
        store,
        t,
        theme,
      }}
    >
      <Provider store={store}>{children}</Provider>
    </FormidableContext.Provider>
  );
};

export default FormidableContext;
export { FormidableProvider };
