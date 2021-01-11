export default reducer;
declare function reducer(state: {
    admin: undefined;
    pathname: undefined;
    user: undefined;
} | undefined, { type, ...payload }: {
    [x: string]: any;
    type: any;
}): {
    admin: any;
    user: undefined;
    pathname: undefined;
} | {
    admin: undefined;
    user: any;
    pathname: undefined;
} | {
    pathname: any;
    admin: undefined;
    user: undefined;
};
