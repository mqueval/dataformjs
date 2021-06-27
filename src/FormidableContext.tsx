import { TFunction } from 'i18next';
import React, { FC, ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { DataProps } from './components/Data';
import createStore from './createStore';

interface FormidableStateProps {
  extendData?: (
    props: DataProps & { formName: string },
  ) => ReactElement<any, any> | null;
  extraArguments?: any;
  extraReducers?: any;
  getControlStyle?: (props: any) => any;
  initializeStore?: (store: Store) => void;
  initialState?: any;
  sc?: { [key: string]: any };
  store?: Store;
  t?: TFunction;
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
}) => {
  const [store] = useState<Store>(
    createStore(initialState, extraReducers, extraArguments),
  );

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
      <Provider store={store}>{children}</Provider>
    </FormidableContext.Provider>
  );
};

export default FormidableContext;
export { FormidableProvider };
