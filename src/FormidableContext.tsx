import { Theme, ThemeProvider } from '@emotion/react';
import { TFunction } from 'i18next';
import React, { FC, ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { DataProps } from './components/Data';
import createStore from './createStore';

interface FormidableStateProps {
  extendData?: (props: DataProps) => ReactElement | null;
  extraArguments?: any;
  extraReducers?: any;
  getControlStyle?: (props: any) => any;
  initializeStore?: (store: Store) => void;
  initialState?: any;
  sc?: { [key: string]: any };
  store?: Store;
  t?: TFunction;
  theme?: Theme;
}

const defaultState: FormidableStateProps = {
  extendData: undefined,
  extraArguments: undefined,
  extraReducers: undefined,
  getControlStyle: undefined,
  initializeStore: undefined,
  initialState: {},
  sc: undefined,
  store: undefined,
  t: undefined,
};

const FormidableContext = React.createContext(defaultState);

const FormidableProvider: FC<FormidableStateProps> = ({
  children,
  extendData,
  extraArguments,
  extraReducers,
  getControlStyle,
  initializeStore,
  initialState = {},
  sc,
  t,
  theme,
}) => {
  const [store] = useState<Store>(
    createStore(initialState, extraReducers, extraArguments),
  );

  console.info('formidable theme', theme);

  if (initializeStore) {
    initializeStore(store);
  }

  return (
    <FormidableContext.Provider
      value={{
        extendData,
        getControlStyle,
        sc,
        store,
        t,
      }}
    >
      <Provider store={store}>
        {theme ? (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ) : (
          children
        )}
      </Provider>
    </FormidableContext.Provider>
  );
};

export default FormidableContext;
export { FormidableProvider };
