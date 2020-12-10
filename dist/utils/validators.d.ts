import { Validator } from 'redux-form';
export declare const addValidator: (validator: Validator, validators?: Validator[] | undefined) => Validator[];
export declare const isDate: (value: string) => string | undefined;
export declare const isEmail: (value: string) => string | undefined;
export declare const isRequired: (value: any) => undefined | string;
export declare const isTime: (value: string) => string | undefined;
