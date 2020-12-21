declare const convertParams: (datas?: {
    [key: string]: any;
} | undefined, params?: {
    [key: string]: any;
} | undefined) => {
    [key: string]: any;
};
export default convertParams;
