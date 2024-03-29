import styled from '@emotion/styled';
import queryString from 'query-string';
import React, {
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { submit } from 'redux-form';

import { DataProps, FormidableContext } from '../../index';
import initializeValues from '../../utils/initializeValues';
import Form, { FormProps } from '../Form';
import ProgressBar from './ProgressBar';

export interface WizardProps {
  backProps?: { [key: string]: any };
  className?: string;
  pages?: Partial<FormProps> | Partial<FormProps>[];
  id?: string;
  name: string;
  params?: { [key: string]: any };
  progressProps?: { [key: string]: any };
  progressItemProps?: { [key: string]: any };
  progressItemIconProps?: { [key: string]: any };
  progressShowStep?: boolean;
  showProgress?: boolean;
}

export interface WizardPageInfoProps {
  isCompleted?: boolean;
  inProgress?: boolean;
}

const WizardSC = styled.div``;

const Wizard: FC<WizardProps> = ({
  backProps,
  className,
  id,
  pages,
  name,
  params,
  progressProps,
  progressItemProps,
  progressItemIconProps,
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

      const search = queryString.parse(window.location.search);
      console.info('search', search);

      if (search) {
        search.page = String(newPage);
      }
      location += `?${queryString.stringify(search)}`;

      window.history.replaceState(
        { location, page: newPage },
        `page ${newPage}`,
        location,
      );
    }
  };

  let newDatas: DataProps[] = [];

  if (newPages) {
    newPages.forEach(({ datas }) => {
      const tmpDatas = datas && !Array.isArray(datas) ? [datas] : datas;

      if (tmpDatas) {
        newDatas = [...newDatas, ...tmpDatas];
      }
    });
  }

  const initialValues = initializeValues(newDatas);

  const newBackProps = backProps ?? {};
  newBackProps.onClick = page > 0 ? handleBackOnClick : undefined;

  return (
    <WizardSC as={sc && sc.wizard} className={className}>
      {showProgress && newPages && (
        <ProgressBar
          {...progressProps}
          handleStepButtonOnClick={handleStepButtonOnClick}
          iconStep={sc && sc.iconStep}
          iconSuccess={sc && sc.iconSuccess}
          infos={infos}
          itemIconProps={progressItemIconProps}
          itemProps={progressItemProps}
          page={page}
          pages={newPages}
          showStep={progressShowStep}
        />
      )}
      {newPages && newPages.length > page && (
        <Form
          cancelProps={newBackProps}
          id={`${id}--page_${page}`}
          initialValues={initialValues}
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
