import classnames from 'classnames';
import React, {
  SyntheticEvent,
  useEffect,
  useMemo,
  useState,
  VFC,
} from 'react';

import Data, { DataProps } from '../Data';
import TabsBar from './Bar';

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
  const [tab, setTab] = useState<number>(0);
  const [infos, setInfos] = useState<TabsPageInfoProps[]>([]);
  const newDatas: Partial<DataProps>[] | undefined = useMemo(
    () => (datas && !Array.isArray(datas) ? [datas] : datas),
    [datas],
  );

  console.info('tabs', tabs);

  useEffect(() => {
    let newTab = 0;
    if (window && window.location && window.location.search) {
      const search: { [key: string]: any } = {};
      window.location.search
        .slice(1)
        .split('&')
        .forEach(option => {
          const [key, value] = option.split('=');
          search[key] = value;
        });
      if (search.page) {
        newTab = parseInt(search.page, 10);
      }
    }
    setTab(newTab);
  }, []);

  useEffect(() => {
    if (newDatas) {
      const newInfos = newDatas.map((newData, i) => ({
        isActive: tab === i,
        title:
          'string' === typeof tabs[i]
            ? (tabs[i] as string)
            : (tabs[i] as TabType).name,
      }));
      console.info('newInfos', newInfos);
      setInfos(newInfos);
    }
  }, [newDatas, tab, tabs]);

  const handleButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ): void => {
    const newTab = event.currentTarget.getAttribute('data-tab');

    if (newTab) {
      setTab(parseInt(newTab, 10));
    }
  };

  return (
    <div className={classnames(className, 'w-full')}>
      <TabsBar
        className={barClassName}
        handleButtonOnClick={handleButtonOnClick}
        infos={infos}
        itemClassName={barItemClassName}
      />
      {newDatas && newDatas.length > tab && (
        <Data {...newDatas[tab]} formName={formName} params={params} />
      )}
    </div>
  );
};

export default Tabs;
