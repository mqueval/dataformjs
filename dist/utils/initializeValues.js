"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var introspection = function (data) {
    var _a, _b, _c, _d;
    var tmpData = {};
    if (data.datas) {
        data.datas.forEach(function (tmp) {
            var result = introspection(tmp);
            Object.keys(result).forEach(function (temp) {
                // temp est un objet -> on doit iterer sur les key
                if ('object' === typeof temp) {
                    Object.keys(temp).forEach(function (key) {
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
                return _a = {},
                    _a[data.name] = [tmpData],
                    _a;
            }
            return _b = {},
                _b[data.name] = [undefined !== data.defaultValue ? data.defaultValue : ''],
                _b;
        }
        if (Object.keys(tmpData).length > 0) {
            return _c = {},
                _c[data.name] = tmpData,
                _c;
        }
        return _d = {},
            _d[data.name] = undefined !== data.defaultValue ? data.defaultValue : '',
            _d;
    }
    return tmpData;
};
exports.default = (function (data) {
    var value = {};
    var newData = data;
    if (!Array.isArray(data)) {
        newData = [data];
    }
    newData.map(introspection).forEach(function (result) {
        Object.keys(result).forEach(function (temp) {
            // temp est un objet -> on doit iterer sur les key
            value[temp] = undefined !== result[temp] ? result[temp] : '';
            // if ('object' === typeof temp) {
            //   Object.keys(temp).forEach(key => {
            //     value[key] = '';
            //   });
            // } else {
            //   value[temp] = '';
            // }
        });
    });
    return value;
});
