export default rootReducer;
declare function rootReducer(extras: any): import("redux").Reducer<import("redux").CombinedState<{
    auth: {
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
    form: import("redux-form").FormStateMap;
}>, import("redux").AnyAction | {
    [x: string]: any;
    type: any;
}>;
