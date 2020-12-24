import classnames from 'classnames';
import hash from 'object-hash';
import React, { SyntheticEvent, useContext, useState, VFC } from 'react';
import styled from 'styled-components';

import FormidableContext from '../../FormidableContext';
import { DataProps } from '../Data';
import Step from '../Step';

interface StepsProps extends DataProps {
  formName: string;
}

const StepsSC = styled.div``;

const Steps: VFC<StepsProps> = ({ className, datas, formName, params }) => {
  const { sc } = useContext(FormidableContext);
  const [index, setIndex] = useState<number>(0);

  const handleStepButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ) => {
    const i = event.currentTarget.getAttribute('data-index');
    if (i) {
      console.info('i', i);
      setIndex(parseInt(i, 10));
    }
  };

  const handleBackOnClick = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const handleNextOnClick = () => {
    if (datas) {
      setIndex(Math.max(index + 1, datas.length - 1));
    }
  };

  return (
    <StepsSC as={sc && sc.step} className={className}>
      {datas && (
        <ul className="flex-auto flex space-x-4 items-center justify-center mb-4">
          {datas.map((data, i) => (
            <li key={`${hash(datas[i].datas)}`}>
              <button
                className={classnames(
                  'flex items-center justify-center flex-col',
                  'outline-none',
                  'mb-3',
                )}
                data-index={i}
                onClick={handleStepButtonOnClick}
                type="button"
              >
                <span
                  className={classnames(
                    'rounded-full mb-1 text-xs',
                    'flex items-center justify-center',
                    'h-6 w-6',
                    {
                      'bg-primary-500': index === i,
                      'text-neutral-100': index === i,
                    },
                    {
                      'bg-neutral-100': index !== i,
                      'text-dark-500': index !== i,
                    },
                  )}
                >
                  {i + 1}
                </span>
                <span className="text-sm flex mx-2">{datas[i].title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {datas && datas.length > index && (
        <Step
          {...datas[index]}
          backOnClick={handleBackOnClick}
          formName={formName}
          nextOnClick={handleNextOnClick}
          params={params}
        />
      )}
    </StepsSC>
  );
};

export default Steps;
