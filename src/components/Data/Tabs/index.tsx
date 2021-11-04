import styled from '@emotion/styled';
import React, {
  SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
  VFC,
} from 'react';
import { useSelector } from 'react-redux';

import { FormidableContext } from '../../../index';
import replaceTestParams from '../../../utils/replaceTestParams';
import verifyCondition from '../../../utils/verifyCondition';
import Data, { DataProps } from '../index';
import { DataWithChildrenProps } from '../WithChildren';
import TabsBar from './Bar';

const TabsSC = styled.div``;

type TabType = {
  name: string;
  condition: {
    field: string;
    operator: '==' | '!=';
    value: any;
  };
};

type TabProps = string | TabType;

export interface DataTabsProps extends DataProps, DataWithChildrenProps {
  barClassName?: string;
  barItemClassName?: string;
  tabs: TabProps[];
}

export interface TabsPageInfoProps {
  index: number;
  isActive?: boolean;
  title: string;
}

const DataTabs: VFC<DataTabsProps> = ({
  componentType,
  barClassName,
  barItemClassName,
  className,
  formName,
  datas,
  mode,
  params,
  position,
  tabs,
  wrapper,
  wrapperFunc,
  ...props
}) => {
  const [searchParams, setSearchParams] = useState<{ [key: string]: any }>({});
  const { sc } = useContext(FormidableContext);

  const [tab, setTab] = useState<number>(0);
  const [infos, setInfos] = useState<TabsPageInfoProps[]>([]);
  const newDatas: DataProps[] | undefined = useMemo(
    () => (datas && !Array.isArray(datas) ? [datas] : datas),
    [datas],
  );

  const formValues = useSelector((state: any) =>
    state.form && formName && state.form[formName]
      ? state.form[formName].values
      : {},
  );

  useEffect(() => {
    let newTab = 0;

    if (
      typeof window !== 'undefined' &&
      window.location &&
      window.location.search
    ) {
      const search: { [key: string]: any } = {};
      window.location.search
        .slice(1)
        .split('&')
        .forEach(option => {
          const [key, value] = option.split('=');
          search[key] = value;
        });
      if (search.tab) {
        newTab = parseInt(search.tab, 10);
      }

      setSearchParams(search);
    }

    setTab(newTab);
  }, []);

  useEffect(() => {
    if (newDatas) {
      const newInfos: TabsPageInfoProps[] = [];
      newDatas.forEach((newData, i) => {
        let addNewTab = true;
        if ('string' !== typeof tabs[i]) {
          const tmpTab = tabs[i] as TabType;
          // On vérifie si il y a une condition
          if (tmpTab?.condition) {
            const newTest = params
              ? replaceTestParams(tmpTab.condition, params)
              : tmpTab.condition;

            addNewTab = verifyCondition({ formValues, test: newTest });
          }
        }

        if (addNewTab) {
          newInfos.push({
            index: i,
            isActive: tab === i,
            title:
              'string' === typeof tabs[i]
                ? (tabs[i] as string)
                : (tabs[i] as TabType)?.name,
          });
        }
      });
      setInfos(newInfos);
    }
  }, [formValues, newDatas, params, tab, tabs]);

  const handleButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ): void => {
    const newTab = event.currentTarget.getAttribute('data-tab');

    if (newTab) {
      setTab(parseInt(newTab, 10));

      let location = window && window.location ? window.location.pathname : '/';
      const search: { [key: string]: any } = {
        ...searchParams,
        tab: newTab,
      };
      location += `?${Object.keys(search)
        .map(key => `${key}=${search[key]}`)
        .join('&')}`;

      window.history.replaceState(
        { location, tab: newTab },
        `tab ${newTab}`,
        location,
      );
    }
  };

  return (
    <TabsSC as={sc && sc.tabs} {...props} className={className}>
      <TabsBar
        className={barClassName}
        handleButtonOnClick={handleButtonOnClick}
        infos={infos}
        itemClassName={barItemClassName}
      />
      {newDatas && newDatas.length > tab && (
        <Data
          {...(newDatas[tab] as DataProps)}
          formName={formName}
          mode={mode}
          params={params}
          position={`${position ? `${position}.` : ''}datas[${tab}]`}
          wrapper={wrapper}
          wrapperFunc={wrapperFunc}
        />
      )}
    </TabsSC>
  );
};

export default DataTabs;
