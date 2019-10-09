import React from 'react';

const WidgetItem = ({ item, selected, onChange, disabled }) => (
    <li className="widget-dialog__item">
        <label className="checkbox">
            <input
                type="checkbox"
                checked={selected}
                disabled={disabled}
                onChange={onChange}
                className="checkbox__input"
            />
            <span className="checkbox__label">{item}</span>
        </label>
    </li>
)

export default WidgetItem;