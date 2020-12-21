"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertParams = (datas, params) => {
    const newDatas = {};
    if (datas && params) {
        Object.keys(params).forEach(paramKey => {
            Object.keys(datas).forEach(dataKey => {
                const regExp = new RegExp(`{{params.${paramKey}}}`, 'gi');
                const result = datas[dataKey].replace(regExp, params[paramKey]);
                if (result.localeCompare(datas[dataKey]) !== 0) {
                    newDatas[dataKey] = result;
                }
            });
        });
    }
    return newDatas;
};
exports.default = convertParams;
