import hash from 'object-hash';
import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

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
  handleButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  infos: TabsPageInfoProps[];
  className?: string;
  itemClassName?: string;
}

const TabsBar: FC<TabsBarProps> = ({
  handleButtonOnClick,
  infos,
  className,
  itemClassName,
}) => (
  <TabsBarSC className={className}>
    {infos.map((info, i) => (
      <TabsBarItemSC
        key={`${hash({ ...infos[i], i })}`}
        className={itemClassName}
        {...info}
      >
        <button data-tab={i} onClick={handleButtonOnClick} type="button">
          <ItemTitleSC>{infos[i].title}</ItemTitleSC>
        </button>
      </TabsBarItemSC>
    ))}
  </TabsBarSC>
);

export default TabsBar;
