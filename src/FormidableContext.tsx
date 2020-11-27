import { TFunction } from 'i18next';
import React, { FC, ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';

import { DataProps } from './components/Data';
import createStore from './createStore';

interface FormidableStateProps {
  extendData?: (
    props: DataProps & { formName: string; params?: { [key: string]: any } },
  ) => ReactElement<any, any> | null;
  getControlStyle?: (props: any) => any;
  sc?: { [key: string]: any };
  store?: Store;
  t?: TFunction;
  theme?: { [key: string]: any };
}

const defaultState: FormidableStateProps = {
  extendData: undefined,
  getControlStyle: undefined,
  sc: undefined,
  store: undefined,
  t: undefined,
  theme: undefined,
};

const FormidableContext = React.createContext(defaultState);

const FormidableProvider: FC<FormidableStateProps> = ({
  children,
  extendData,
  getControlStyle,
  sc,
  t,
  theme,
}) => {
  const [store] = useState<Store>(createStore({}));

  return (
    <FormidableContext.Provider
      value={{
        extendData,
        getControlStyle,
        sc,
        store,
        t,
        theme,
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </FormidableContext.Provider>
  );
};

export default FormidableContext;
export { FormidableProvider };
