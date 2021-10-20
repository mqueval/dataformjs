import hash from 'object-hash';
import React, { FC, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import { TabsPageInfoProps } from './index';

const TabsBarSC = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 1.5rem;
`;

const TabsBarItemSC = styled.li<TabsPageInfoProps>`
  font-weight: ${props => (props.isActive ? 600 : 400)};
  margin: 0.375rem 0.75rem;

  button {
    outline: none;
  }
`;

const ItemTitleSC = styled.span``;

interface TabsBarProps {
  className?: string;
  handleButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  infos: TabsPageInfoProps[];
  itemClassName?: string;
}

const TabsBar: FC<TabsBarProps> = ({
  handleButtonOnClick,
  infos,
  itemClassName,
  ...props
}) => {
  const { sc } = useContext(FormidableContext);

  return (
    <TabsBarSC as={sc && sc.tabsBar} {...props}>
      {infos.map(info => (
        <TabsBarItemSC
          key={`${hash({ ...info })}`}
          as={sc && sc.tabsBarItem}
          className={`${itemClassName}${info.isActive ? ' is-active' : ''}`}
          {...info}
        >
          <button
            data-tab={info.index}
            onClick={handleButtonOnClick}
            type="button"
          >
            <ItemTitleSC as={sc && sc.tabsBarItemTitle}>
              {info.title}
            </ItemTitleSC>
          </button>
        </TabsBarItemSC>
      ))}
    </TabsBarSC>
  );
};

export default TabsBar;
