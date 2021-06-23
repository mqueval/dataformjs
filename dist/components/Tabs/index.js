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
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
const replaceTestParams_1 = __importDefault(require("../../utils/replaceTestParams"));
const verifyCondition_1 = __importDefault(require("../../utils/verifyCondition"));
const Data_1 = __importDefault(require("../Data"));
const Bar_1 = __importDefault(require("./Bar"));
const TabsSC = styled_components_1.default.div ``;
const Tabs = ({ barClassName, barItemClassName, className, formName, datas, params, tabs, }) => {
    const [searchParams, setSearchParams] = react_1.useState({});
    const { sc } = react_1.useContext(index_1.FormidableContext);
    const [tab, setTab] = react_1.useState(0);
    const [infos, setInfos] = react_1.useState([]);
    const newDatas = react_1.useMemo(() => (datas && !Array.isArray(datas) ? [datas] : datas), [datas]);
    const formValues = react_redux_1.useSelector((state) => state.form && state.form[formName] ? state.form[formName].values : {});
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
            setSearchParams(search);
        }
        setTab(newTab);
    }, []);
    react_1.useEffect(() => {
        if (newDatas) {
            const newInfos = [];
            newDatas.forEach((newData, i) => {
                var _a;
                let addNewTab = true;
                if ('string' !== typeof tabs[i]) {
                    const tmpTab = tabs[i];
                    // On vérifie si il y a une condition
                    if (tmpTab === null || tmpTab === void 0 ? void 0 : tmpTab.condition) {
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
                            : (_a = tabs[i]) === null || _a === void 0 ? void 0 : _a.name,
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
            let location = window && window.location ? window.location.pathname : '/';
            const search = {
                ...searchParams,
                tab,
            };
            location += `?${Object.keys(search)
                .map(key => `${key}=${search[key]}`)
                .join('&')}`;
            window.history.replaceState({ location, tab }, `tab ${tab}`, location);
        }
    };
    return (react_1.default.createElement(TabsSC, { as: sc && sc.tabs, className: className },
        react_1.default.createElement(Bar_1.default, { className: barClassName, handleButtonOnClick: handleButtonOnClick, infos: infos, itemClassName: barItemClassName }),
        newDatas && newDatas.length > tab && (react_1.default.createElement(Data_1.default, Object.assign({}, newDatas[tab], { formName: formName, params: params })))));
};
exports.default = Tabs;
