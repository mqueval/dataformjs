"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    admin: undefined,
    pathname: undefined,
    user: undefined,
};
const reducer = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case 'LOG_IN':
            if (payload && payload.token) {
                localStorage.setItem('token', payload.token);
            }
            return state;
        case 'LOG_OUT':
            localStorage.removeItem('token');
            return initialState;
        case 'SET_USER':
            if (payload.user && payload.user.isAdministrator) {
                return {
                    ...state,
                    admin: payload.user,
                    user: payload.initialize ? undefined : state.user,
                };
            }
            return {
                ...state,
                admin: payload.initialize ? undefined : state.admin,
                user: payload.user,
            };
        case 'SET_LOCATION':
            return { ...state, pathname: payload.pathname };
        default:
            return state;
    }
};
exports.default = reducer;
