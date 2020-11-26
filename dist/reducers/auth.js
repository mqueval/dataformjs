"use strict";
// import UserType from '../types/User';
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    pathname: undefined,
    user: undefined,
};
// interface AuthActionProps {
//   pathname?: string;
//   token?: string;
//   type: string;
//   user?: UserType;
// }
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
            return { ...state, user: payload.user };
        case 'SET_LOCATION':
            return { ...state, pathname: payload.pathname };
        default:
            return state;
    }
};
exports.default = reducer;
