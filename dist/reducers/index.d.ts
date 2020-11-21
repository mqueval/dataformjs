export default rootReducer;
declare function rootReducer(extras: any): import("redux").Reducer<import("redux").CombinedState<{
    auth: {
        user: any;
        pathname: undefined;
    } | {
        pathname: any;
        user: undefined;
    };
    form: import("redux-form").FormStateMap;
}>, import("redux").AnyAction | {
    [x: string]: any;
    type: any;
}>;
