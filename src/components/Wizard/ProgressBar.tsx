import hash from 'object-hash';
import React, { ComponentType, FC, SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';

import { FormProps } from '../Form';
import { WizardPageInfoProps } from './index';

const ProgressBarSC = styled.ul`
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
  padding-bottom: 3rem;
`;

const ProgressBarItemSC = styled.li<WizardPageInfoProps>`
  display: table-cell;
  text-align: center;
  vertical-align: top;
  overflow: visible;
  position: relative;
  font-weight: bold;

  &:not(:last-child):before {
    content: '';
    display: block;
    position: absolute;
    left: 60%;
    background-color: ${props =>
      props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
    height: 4px;
    width: 80%;
    border-radius: 4px;
  }

  ${props =>
    props.isCompleted &&
    css`
      &:before {
        background-color: #112255;
      }
    `};

  ${props =>
    props.inProgress &&
    css`
      &:before {
        background: #112255;
        background: linear-gradient(
          to right,
          #112255 0%,
          #112255 50%,
          #e7e9ee 50%
        );
      }
    `};

  > button {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: -13px;
    color: ${props =>
      props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
    margin-left: -15px;
    outline: none;
  }
`;

const ProgressBarItemIconSC = styled.span<WizardPageInfoProps>`
  display: flex;
  border: 2px solid ${props => (props.inProgress ? '#112255' : '#e7e9ee')};
  border-radius: 30px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.375rem;
  color: ${props =>
    props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
  font-weight: 600;

  ${props =>
    props.isCompleted &&
    css`
      border: none;
      background: #112255;
      color: #fff;
    `};
`;

const ProgressBarItemStepSC = styled.span`
  color: #e7e9ee;
`;
const ProgressBarItemTitleSC = styled.span`
  font-weight: 600;
  position: relative;
  left: calc(-50% + 15px);
  color: inherit;
`;

interface ProgressBarProps {
  handleStepButtonOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  iconStep?: ComponentType<any>;
  iconSuccess?: ComponentType<any>;
  infos: WizardPageInfoProps[];
  page: number;
  pages: Partial<FormProps>[];
  className?: string;
  itemClassName?: string;
  itemIconClassName?: string;
  showStep?: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({
  handleStepButtonOnClick,
  iconStep,
  iconSuccess,
  infos,
  page,
  pages,
  className,
  itemClassName,
  itemIconClassName,
  showStep,
}) => {
  const IconStep = iconStep;
  const IconSuccess = iconSuccess;

  return (
    <ProgressBarSC className={className}>
      {infos.map((info, i) => (
        <ProgressBarItemSC
          key={`${hash({ ...infos[i], i })}`}
          className={itemClassName}
          {...info}
          isCompleted={i < page}
        >
          <button data-page={i} onClick={handleStepButtonOnClick} type="button">
            <ProgressBarItemIconSC
              aria-label={`step ${i + 1}`}
              className={itemIconClassName}
              {...info}
              isCompleted={i < page}
            >
              {i < page && IconSuccess && <IconSuccess size={16} />}
              {i >= page && showStep && IconStep && <IconStep size={12} />}
              {i >= page && (!showStep || !IconStep) && <span>{i + 1}</span>}
            </ProgressBarItemIconSC>

            {showStep && (
              <ProgressBarItemStepSC>{`step ${i + 1}`}</ProgressBarItemStepSC>
            )}
            <ProgressBarItemTitleSC>{pages[i].title}</ProgressBarItemTitleSC>
          </button>
        </ProgressBarItemSC>
      ))}
    </ProgressBarSC>
  );
};

export default ProgressBar;
