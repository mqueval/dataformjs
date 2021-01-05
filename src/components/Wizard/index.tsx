import hash from 'object-hash';
import React, {
  FC,
  ReactNode,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { submit } from 'redux-form';
import styled, { css } from 'styled-components';

import { FormidableContext } from '../../index';
import Form, { FormProps } from '../Form';

export interface WizardProps {
  backIcon?: ReactNode;
  backIconColor?: string;
  backLabel?: string;
  backClassName?: string;
  backStatus?: string;
  className?: string;
  pages?: Partial<FormProps> | Partial<FormProps>[];
  id?: string;
  name: string;
  params?: { [key: string]: any };
  progressClassName?: string;
  progressItemClassName?: string;
  progressItemIconClassName?: string;
  progressShowStep?: boolean;
  showProgress?: boolean;
}

interface WizardPageInfoProps {
  isCompleted?: boolean;
  inProgress?: boolean;
}

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

const WizardSC = styled.div``;

const Wizard: FC<WizardProps> = ({
  backClassName,
  backIcon,
  backIconColor,
  backLabel,
  backStatus,
  className,
  id,
  pages,
  name,
  params,
  progressClassName,
  progressItemClassName,
  progressItemIconClassName,
  progressShowStep = false,
  showProgress,
}) => {
  const { sc } = useContext(FormidableContext);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(0);
  const [infos, setInfos] = useState<WizardPageInfoProps[]>([]);
  const newPages: Partial<FormProps>[] | undefined =
    pages && !Array.isArray(pages) ? [pages] : pages;

  useEffect(() => {
    let newPage = 0;
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
        newPage = parseInt(search.page, 10);
      }
    }
    setPage(newPage);
  }, []);

  useEffect(() => {
    if (newPages) {
      const newInfos = newPages.map((newPage, i) => ({
        inProgress: page === i,
        isConfirmed: false,
      }));
      setInfos(newInfos);
    }
  }, [newPages, page]);

  const handleStepButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ) => {
    const i = event.currentTarget.getAttribute('data-page');

    if (i) {
      if (parseInt(i, 10) <= page) {
        setPage(parseInt(i, 10));
      } else {
        dispatch(submit(name));
      }
    }
  };

  const handleBackOnClick = () => {
    const newPage = Math.max(page - 1, 0);
    setPage(newPage);

    let location = window && window.location ? window.location.pathname : '/';
    location += `?page=${newPage}`;

    window.history.replaceState(
      { location, page: newPage },
      `page ${newPage}`,
      location,
    );
  };

  const handleNextOnClick = () => {
    if (newPages) {
      const newPage = Math.max(page + 1, newPages.length - 1);
      setPage(newPage);

      let location = window && window.location ? window.location.pathname : '/';
      location += `?page=${newPage}`;

      window.history.replaceState(
        { location, page: newPage },
        `page ${newPage}`,
        location,
      );
    }
  };

  const IconSuccess = sc && sc.iconSuccess;
  const IconStep = sc && sc.iconStep;

  return (
    <WizardSC className={className}>
      {showProgress && newPages && (
        <ProgressBarSC className={progressClassName}>
          {infos.map((info, i) => (
            <ProgressBarItemSC
              key={`${hash(newPages[i].datas)}`}
              className={progressItemClassName}
              {...info}
              isCompleted={i < page}
            >
              <button
                data-page={i}
                onClick={handleStepButtonOnClick}
                type="button"
              >
                <ProgressBarItemIconSC
                  aria-label={`step ${i + 1}`}
                  className={progressItemIconClassName}
                  {...info}
                  isCompleted={i < page}
                >
                  {i < page && IconSuccess && <IconSuccess size={16} />}
                  {i >= page && progressShowStep && IconStep && (
                    <IconStep size={12} />
                  )}
                  {i >= page && (!progressShowStep || !IconStep) && (
                    <span>{i + 1}</span>
                  )}
                </ProgressBarItemIconSC>

                {progressShowStep && (
                  <ProgressBarItemStepSC>
                    {`step ${i + 1}`}
                  </ProgressBarItemStepSC>
                )}
                <ProgressBarItemTitleSC>
                  {newPages[i].title}
                </ProgressBarItemTitleSC>
              </button>
            </ProgressBarItemSC>
          ))}
        </ProgressBarSC>
      )}
      {newPages && newPages.length > page && (
        <Form
          cancelClassName={backClassName}
          cancelIcon={backIcon}
          cancelIconColor={backIconColor}
          cancelLabel={backLabel}
          cancelOnClick={page > 0 ? handleBackOnClick : undefined}
          cancelStatus={backStatus}
          id={`${id}--page_${page}`}
          onSubmit={handleNextOnClick}
          {...newPages[page]}
          destroyOnUnmount={false} // <------ preserve form data
          forceUnregisterOnUnmount // <------ unregister fields on unmount
          name={name}
          params={params}
        />
      )}
    </WizardSC>
  );
};

export default Wizard;
