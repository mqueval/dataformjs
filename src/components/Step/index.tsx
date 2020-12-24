import hash from 'object-hash';
import React, { FC, ReactNode, SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';

import FormidableContext from '../../FormidableContext';
import Button from '../Button';
import Data, { DataProps } from '../Data';

interface ActionProps {
  action?: 'back' | 'next' | 'submit';
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  status?: string;
}

interface StepProps extends DataProps {
  actions?: ActionProps | ActionProps[];
  actionsClassName?: string;
  backOnClick?: () => void;
  nextOnClick?: () => void;
  formName: string;
}

const StepSC = styled.div``;

const Step: FC<StepProps> = ({
  actions,
  actionsClassName,
  backOnClick,
  children,
  datas,
  className,
  formName,
  nextOnClick,
  params,
}) => {
  const { sc, t } = useContext(FormidableContext);

  const newActions = actions && (Array.isArray(actions) ? actions : [actions]);

  const handleActionOnClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const index = event.currentTarget.getAttribute('data-index');
    if (newActions && index) {
      switch (newActions[parseInt(index, 10)].action) {
        case 'back':
          return backOnClick && backOnClick();

        case 'next':
          return nextOnClick && nextOnClick();

        case 'submit':
        default:
      }
    }

    return null;
  };

  return (
    <StepSC as={sc && sc.step} className={className}>
      {datas &&
        datas.length > 0 &&
        datas.map(data => (
          <Data
            key={hash(data)}
            {...data}
            formName={formName}
            params={params}
          />
        ))}
      {children}
      {newActions && (
        <div className={actionsClassName}>
          {newActions.map((action, index) => (
            <Button
              key={hash({
                action: action.action,
                className: action.className,
                label: action.label,
                status: action.status,
              })}
              data-index={index}
              iconLeft={action.iconLeft}
              iconRight={action.iconRight}
              onClick={handleActionOnClick}
              status={action.status}
              type={'submit' === action.action ? 'submit' : 'button'}
            >
              {t && action.label ? t(action.label) : action.label}
            </Button>
          ))}
        </div>
      )}
    </StepSC>
  );
};

export default Step;
