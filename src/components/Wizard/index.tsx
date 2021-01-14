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
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Form, { FormProps } from '../Form';
import ProgressBar from './ProgressBar';

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

export interface WizardPageInfoProps {
  isCompleted?: boolean;
  inProgress?: boolean;
}

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
  ): void => {
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
      const newPage = Math.min(page + 1, newPages.length - 1);
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

  return (
    <WizardSC className={className}>
      {showProgress && newPages && (
        <ProgressBar
          className={progressClassName}
          handleStepButtonOnClick={handleStepButtonOnClick}
          iconStep={sc && sc.iconStep}
          iconSuccess={sc && sc.iconSuccess}
          infos={infos}
          itemClassName={progressItemClassName}
          itemIconClassName={progressItemIconClassName}
          page={page}
          pages={newPages}
          showStep={progressShowStep}
        />
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
