// import qs, { ParsedQs } from 'qs';
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

import { FormidableContext } from '../../index';
import replaceTestParams from '../../utils/replaceTestParams';
import verifyCondition from '../../utils/verifyCondition';
import Data, { DataProps } from '../Data';
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

export interface TabsProps extends DataProps {
  barClassName?: string;
  barItemClassName?: string;
  formName: string;
  tabs: TabProps[];
}

export interface TabsPageInfoProps {
  index: number;
  isActive?: boolean;
  title: string;
}

const Tabs: VFC<TabsProps> = ({
  barClassName,
  barItemClassName,
  className,
  formName,
  datas,
  params,
  tabs,
}) => {
  const [searchParams, setSearchParams] = useState<{ [key: string]: any }>({});
  const { sc } = useContext(FormidableContext);

  const [tab, setTab] = useState<number>(0);
  const [infos, setInfos] = useState<TabsPageInfoProps[]>([]);
  const newDatas: Partial<DataProps>[] | undefined = useMemo(
    () => (datas && !Array.isArray(datas) ? [datas] : datas),
    [datas],
  );

  const formValues = useSelector((state: any) =>
    state.form && state.form[formName] ? state.form[formName].values : {},
  );

  useEffect(() => {
    let newTab = 0;

    console.info('tabs useEffect');
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

      console.info('tabs useEffect', search);
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
    <TabsSC as={sc && sc.tabs} className={className}>
      <TabsBar
        className={barClassName}
        handleButtonOnClick={handleButtonOnClick}
        infos={infos}
        itemClassName={barItemClassName}
      />
      {newDatas && newDatas.length > tab && (
        <Data {...newDatas[tab]} formName={formName} params={params} />
      )}
    </TabsSC>
  );
};

export default Tabs;
