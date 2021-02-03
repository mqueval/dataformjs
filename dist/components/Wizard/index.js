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
const query_string_1 = __importDefault(require("query-string"));
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
const initializeValues_1 = __importDefault(require("../../utils/initializeValues"));
const Form_1 = __importDefault(require("../Form"));
const ProgressBar_1 = __importDefault(require("./ProgressBar"));
const WizardSC = styled_components_1.default.div ``;
const Wizard = ({ backClassName, backIcon, backIconColor, backLabel, backStatus, className, id, pages, name, params, progressClassName, progressItemClassName, progressItemIconClassName, progressShowStep = false, showProgress, }) => {
    const { sc } = react_1.useContext(index_1.FormidableContext);
    const dispatch = react_redux_1.useDispatch();
    const [page, setPage] = react_1.useState(0);
    const [infos, setInfos] = react_1.useState([]);
    const newPages = pages && !Array.isArray(pages) ? [pages] : pages;
    react_1.useEffect(() => {
        let newPage = 0;
        if (window && window.location && window.location.search) {
            const search = {};
            window.location.search
                .slice(1)
                .split('&')
                .forEach(option => {
                const [key, value] = option.split('=');
                search[key] = value;
            });
            if (search.page) {
                newPage = parseInt(search.page, 10);
            }
        }
        setPage(newPage);
    }, []);
    react_1.useEffect(() => {
        if (newPages) {
            const newInfos = newPages.map((newPage, i) => ({
                inProgress: page === i,
                isConfirmed: false,
            }));
            setInfos(newInfos);
        }
    }, [newPages, page]);
    const handleStepButtonOnClick = (event) => {
        const i = event.currentTarget.getAttribute('data-page');
        if (i) {
            if (parseInt(i, 10) <= page) {
                setPage(parseInt(i, 10));
            }
            else {
                dispatch(redux_form_1.submit(name));
            }
        }
    };
    const handleBackOnClick = () => {
        const newPage = Math.max(page - 1, 0);
        setPage(newPage);
        let location = window && window.location ? window.location.pathname : '/';
        location += `?page=${newPage}`;
        window.history.replaceState({ location, page: newPage }, `page ${newPage}`, location);
    };
    const handleNextOnClick = () => {
        if (newPages) {
            const newPage = Math.min(page + 1, newPages.length - 1);
            setPage(newPage);
            let location = window && window.location ? window.location.pathname : '/';
            const search = query_string_1.default.parse(window.location.search);
            console.info('search', search);
            if (search) {
                search.page = String(newPage);
            }
            location += `?${query_string_1.default.stringify(search)}`;
            window.history.replaceState({ location, page: newPage }, `page ${newPage}`, location);
        }
    };
    let newDatas = [];
    if (newPages) {
        newPages.forEach(({ datas }) => {
            const tmpDatas = datas && !Array.isArray(datas) ? [datas] : datas;
            if (tmpDatas) {
                newDatas = [...newDatas, ...tmpDatas];
            }
        });
    }
    const initialValues = initializeValues_1.default(newDatas);
    return (react_1.default.createElement(WizardSC, { className: className },
        showProgress && newPages && (react_1.default.createElement(ProgressBar_1.default, { className: progressClassName, handleStepButtonOnClick: handleStepButtonOnClick, iconStep: sc && sc.iconStep, iconSuccess: sc && sc.iconSuccess, infos: infos, itemClassName: progressItemClassName, itemIconClassName: progressItemIconClassName, page: page, pages: newPages, showStep: progressShowStep })),
        newPages && newPages.length > page && (react_1.default.createElement(Form_1.default, Object.assign({ cancelClassName: backClassName, cancelIcon: backIcon, cancelIconColor: backIconColor, cancelLabel: backLabel, cancelOnClick: page > 0 ? handleBackOnClick : undefined, cancelStatus: backStatus, id: `${id}--page_${page}`, initialValues: initialValues, onSubmit: handleNextOnClick }, newPages[page], { destroyOnUnmount: false, forceUnregisterOnUnmount // <------ unregister fields on unmount
            : true, name: name, params: params })))));
};
exports.default = Wizard;
