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
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const FormidableContext_1 = __importDefault(require("../../FormidableContext"));
const Step_1 = __importDefault(require("../Step"));
const StepsSC = styled_components_1.default.div ``;
const Steps = ({ className, datas, formName, params }) => {
    const { sc } = react_1.useContext(FormidableContext_1.default);
    const [index, setIndex] = react_1.useState(0);
    const handleStepButtonOnClick = (event) => {
        const i = event.currentTarget.getAttribute('data-index');
        if (i) {
            setIndex(parseInt(i, 10));
        }
    };
    const handleBackOnClick = () => {
        setIndex(Math.max(index - 1, 0));
    };
    const handleNextOnClick = () => {
        if (datas) {
            setIndex(Math.max(index + 1, datas.length - 1));
        }
    };
    return (react_1.default.createElement(StepsSC, { as: sc && sc.step, className: className },
        datas && (react_1.default.createElement("ul", { className: "flex-auto flex space-x-4 items-center justify-center mb-4" }, datas.map((data, i) => (react_1.default.createElement("li", { key: `${object_hash_1.default(datas[i].datas)}` },
            react_1.default.createElement("button", { className: classnames_1.default('flex items-center justify-center flex-col', 'outline-none', 'mb-3'), "data-index": i, onClick: handleStepButtonOnClick, type: "button" },
                react_1.default.createElement("span", { className: classnames_1.default('rounded-full mb-1 text-xs', 'flex items-center justify-center', 'h-6 w-6', {
                        'bg-primary-500': index === i,
                        'text-neutral-100': index === i,
                    }, {
                        'bg-neutral-100': index !== i,
                        'text-dark-500': index !== i,
                    }) }, i + 1),
                react_1.default.createElement("span", { className: "text-sm flex mx-2" }, datas[i].title))))))),
        datas && datas.length > index && (react_1.default.createElement(Step_1.default, Object.assign({}, datas[index], { backOnClick: handleBackOnClick, formName: formName, nextOnClick: handleNextOnClick, params: params })))));
};
exports.default = Steps;
