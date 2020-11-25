export default reducer;
declare function reducer(state: {
    pathname: undefined;
    user: undefined;
} | undefined, { type, ...payload }: {
    [x: string]: any;
    type: any;
}): {
    user: any;
    pathname: undefined;
} | {
    pathname: any;
    user: undefined;
};
