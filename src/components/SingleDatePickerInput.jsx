import React, { PropTypes } from 'react';

import DateInput from './DateInput';

const propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string, // also used as label
  dateValue: PropTypes.string,
  border: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDownShiftTab: PropTypes.func,
  onKeyDownTab: PropTypes.func,
};

const defaultProps = {
  placeholder: 'Select Date',
  dateValue: '',
  border: false,
  focused: false,
  disabled: false,

  onChange() {},
  onFocus() {},
  onKeyDownShiftTab() {},
  onKeyDownTab() {},
};

export default function SingleDatePickerInput(props) {
  const {
    id,
    placeholder,
    dateValue,
    focused,
    disabled,
    onChange,
    onFocus,
    onKeyDownShiftTab,
    onKeyDownTab,
  } = props;

  return (
    <div class="button__wrapper Dropdown" id={id}>
    <div class="button button_theme_link">
        <div class="button__label">{dateValue}</div>
        <div class="button__icon button__icon_arrow"><i class="icon icon_type_arrow-down"></i></div>
    </div>
</div>

  );
}

SingleDatePickerInput.propTypes = propTypes;
SingleDatePickerInput.defaultProps = defaultProps;
