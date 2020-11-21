"use strict";
// import UserType from '../types/User';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    pathname: undefined,
    user: undefined,
};
// interface AuthActionProps {
//   pathname?: string;
//   token?: string;
//   type: string;
//   user?: UserType;
// }
var reducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = __rest(_a, ["type"]);
    switch (type) {
        case 'LOG_IN':
            if (payload && payload.token) {
                localStorage.setItem('user', payload.token);
            }
            return state;
        case 'LOG_OUT':
            localStorage.removeItem('user');
            return initialState;
        case 'SET_USER':
            return __assign(__assign({}, state), { user: payload.user });
        case 'SET_LOCATION':
            return __assign(__assign({}, state), { pathname: payload.pathname });
        default:
            return state;
    }
};
exports.default = reducer;
