import { VFC } from 'react';
import { DataProps } from '../Data';
interface StepsProps extends DataProps {
    formName: string;
}
declare const Steps: VFC<StepsProps>;
export default Steps;
