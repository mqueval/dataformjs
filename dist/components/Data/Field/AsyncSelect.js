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
exports.Input = exports.SelectSC = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_select_1 = require("react-select");
const async_1 = __importDefault(require("react-select/async"));
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
exports.SelectSC = styled_components_1.default(async_1.default) `
  .DataFieldSelect__value-container {
    padding-bottom: 0;
    padding-top: 0;
    padding-left: 0;
  }

  .DataFieldSelect__control {
    padding-right: 0 !important;
  }

  .DataFieldSelect__value-container div {
    margin-left: 0;
  }

  .DataFieldSelect__value-container div:last-child {
    //.DataFieldAsyncSelect__value-container--has-value + div,
    //.DataFieldAsyncSelect__single-value + div,
    //.DataFieldAsyncSelect__placeholder + div {
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
  }

  .DataFieldSelect__multi-value {
    line-height: 2;
  }
`;
const Input = props => (react_1.default.createElement(react_select_1.components.Input, Object.assign({}, props, { autoComplete: "new-password" })));
exports.Input = Input;
const FieldAsyncSelect = ({ cacheOptions = false, className, customOption, defaultOptions = false, defaultValue, formatOptionLabel, formName, getOptionLabel, getOptionValue, handleOnChange, hideSelectedOptions = false, id, input, isClearable = false, isMulti, isOptionDisabled, isOptionSelected, isSearchable = true, loadOptions, loadingMessage, meta, meta: { error, touched }, noOptionsMessage, placeholder, ...others }) => {
    const ref = react_1.useRef();
    let newValue;
    const dispatch = react_redux_1.useDispatch();
    const { getControlStyle, t } = react_1.useContext(index_1.FormidableContext);
    if (!formName) {
        return react_1.default.createElement("div", null, "async-select : erreur de param\u00E8tre : formName obligatoire");
    }
    if (!loadOptions) {
        return (react_1.default.createElement("div", null, "async-select : erreur de param\u00E8tre : loadOptions obligatoire"));
    }
    const { name, value } = input;
    const handleOnBlur = () => {
        console.info('handleOnBlur');
        input.onBlur(newValue || value);
    };
    const handleInnerOnChange = (changeValue) => {
        newValue = changeValue;
        if (handleOnChange) {
            handleOnChange({
                change: (...props) => dispatch(redux_form_1.change(...props)),
                value: changeValue,
            });
        }
        dispatch(redux_form_1.change(formName, name, changeValue, true));
    };
    const handleOnFocus = (event) => {
        if (undefined !== ref && value) {
            if (formatOptionLabel) {
                ref.current.select.state.inputValue = formatOptionLabel(value, {
                    context: 'value',
                });
            }
            else if (getOptionLabel) {
                ref.current.select.state.inputValue = getOptionLabel(value);
            }
            else if (value.label) {
                ref.current.select.state.inputValue = value.label;
            }
        }
        input.onFocus(event);
    };
    const handleOnMenuClose = () => {
        console.info('handleOnMenuClose');
        // if (undefined !== ref) {
        //   ref.current.select.blur();
        // TODO pour que cela fonctionne sur mobile
        // }
    };
    const newComponents = {};
    if (customOption) {
        newComponents.Option = customOption;
    }
    newComponents.Input = exports.Input;
    // const SelectContainer: FC<ContainerProps<any>> = ({ children, ...props }) => (
    //   <div>
    //     <components.SelectContainer {...props}>
    //       {children}
    //     </components.SelectContainer>
    //   </div>
    // );
    //
    // newComponents.SelectContainer = SelectContainer;
    const styles = {
        control: (base) => getControlStyle
            ? getControlStyle({
                ...others,
                status: touched && error ? 'error' : undefined,
            })
            : base,
    };
    return (react_1.default.createElement(exports.SelectSC, { ref: ref, autoComplete: "new-password", cacheOptions: cacheOptions, className: className, classNamePrefix: "DataFieldSelect", components: newComponents, defaultOptions: defaultOptions, defaultValue: defaultValue, formatOptionLabel: formatOptionLabel, getOptionLabel: getOptionLabel, getOptionValue: getOptionValue, hideSelectedOptions: hideSelectedOptions, inputId: id, isClearable: isClearable, isMulti: isMulti, isOptionDisabled: isOptionDisabled, isOptionSelected: isOptionSelected, isSearchable: isSearchable, loadOptions: loadOptions, loadingMessage: loadingMessage, noOptionsMessage: noOptionsMessage, onBlur: handleOnBlur, onChange: handleInnerOnChange, onFocus: handleOnFocus, onMenuClose: handleOnMenuClose, placeholder: t && placeholder ? t(placeholder) : placeholder, styles: styles, value: value }));
};
exports.default = FieldAsyncSelect;
