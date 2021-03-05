"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const replaceTestParams_1 = __importDefault(require("../../utils/replaceTestParams"));
const verifyCondition_1 = __importDefault(require("../../utils/verifyCondition"));
const Data_1 = __importDefault(require("../Data"));
const Bar_1 = __importDefault(require("./Bar"));
const Tabs = ({ barClassName, barItemClassName, className, formName, formValues, datas, params, tabs, }) => {
    const [tab, setTab] = react_1.useState(0);
    const [infos, setInfos] = react_1.useState([]);
    const newDatas = react_1.useMemo(() => (datas && !Array.isArray(datas) ? [datas] : datas), [datas]);
    react_1.useEffect(() => {
        let newTab = 0;
        if (typeof window !== 'undefined' &&
            window.location &&
            window.location.search) {
            const search = {};
            window.location.search
                .slice(1)
                .split('&')
                .forEach(option => {
                const [key, value] = option.split('=');
                search[key] = value;
            });
            if (search.page) {
                newTab = parseInt(search.page, 10);
            }
        }
        setTab(newTab);
    }, []);
    react_1.useEffect(() => {
        if (newDatas) {
            const newInfos = [];
            newDatas.forEach((newData, i) => {
                let addNewTab = true;
                if ('string' !== typeof tabs[i]) {
                    const tmpTab = tabs[i];
                    // On vérifie si il y a une condition
                    if (tmpTab?.condition) {
                        const newTest = params
                            ? replaceTestParams_1.default(tmpTab.condition, params)
                            : tmpTab.condition;
                        addNewTab = verifyCondition_1.default({ formValues, test: newTest });
                    }
                }
                if (addNewTab) {
                    newInfos.push({
                        index: i,
                        isActive: tab === i,
                        title: 'string' === typeof tabs[i]
                            ? tabs[i]
                            : tabs[i]?.name,
                    });
                }
            });
            setInfos(newInfos);
        }
    }, [formValues, newDatas, params, tab, tabs]);
    const handleButtonOnClick = (event) => {
        const newTab = event.currentTarget.getAttribute('data-tab');
        if (newTab) {
            setTab(parseInt(newTab, 10));
        }
    };
    return (react_1.default.createElement("div", { className: classnames_1.default(className, 'w-full') },
        react_1.default.createElement(Bar_1.default, { className: barClassName, handleButtonOnClick: handleButtonOnClick, infos: infos, itemClassName: barItemClassName }),
        newDatas && newDatas.length > tab && (react_1.default.createElement(Data_1.default, Object.assign({}, newDatas[tab], { formName: formName, params: params })))));
};
const mapStateToProps = (globalState, ownProps) => {
    const { values } = globalState.form[ownProps.formName];
    return {
        formValues: values,
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Tabs);
