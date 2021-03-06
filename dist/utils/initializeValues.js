"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const introspection = (data) => {
    const tmpData = {};
    if (data.notDefaultValue) {
        return tmpData;
    }
    if (data.datas) {
        data.datas.forEach((tmp) => {
            const result = introspection(tmp);
            Object.keys(result).forEach(temp => {
                // temp est un objet -> on doit iterer sur les key
                if ('object' === typeof temp) {
                    Object.keys(temp).forEach(key => {
                        tmpData[key] = temp[key];
                    });
                }
                else {
                    tmpData[temp] = result[temp];
                }
            });
        });
    }
    if (data.name) {
        if ('array' === data.componentType) {
            if (Object.keys(tmpData).length > 0) {
                return {
                    [data.name]: [tmpData],
                };
            }
            return {
                [data.name]: [undefined !== data.defaultValue ? data.defaultValue : ''],
            };
        }
        if (Object.keys(tmpData).length > 0) {
            return {
                [data.name]: tmpData,
            };
        }
        return {
            [data.name]: undefined !== data.defaultValue ? data.defaultValue : '',
        };
    }
    return tmpData;
};
exports.default = (data) => {
    const value = {};
    let newData = data;
    if (!Array.isArray(data)) {
        newData = [data];
    }
    newData.map(introspection).forEach((result) => {
        // result est un objet -> on doit iterer sur les key
        Object.keys(result).forEach(temp => {
            if (value[temp]) {
                if (undefined !== result[temp]) {
                    value[temp] = lodash_1.merge(result[temp], value[temp]);
                }
            }
            else {
                value[temp] = undefined !== result[temp] ? result[temp] : '';
            }
        });
    });
    return value;
};
