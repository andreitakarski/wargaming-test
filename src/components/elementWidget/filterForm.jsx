import React from 'react';

const filterOptions = [
    { title: 'Без фильтра', value: 0 },
    { title: 'Номер > 10', value: 10 },
    { title: 'Номер > 100', value: 100 },
    { title: 'Номер > 200', value: 200 }
]

const Input = ({name, label, value, onChange, type }) => (
    <div className="widget-dialog__fieldset">
        {label && <label className="widget-dialog__label">{label}</label>}
        <input
            className="widget-dialog__control"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
)

const Select = ({ name, label, value, onChange, options = [] }) => (
    <div className="widget-dialog__fieldset">
        {label && <label className="widget-dialog__label">{label}</label>}
        <select
            className="widget-dialog__control"
            name={name}
            onChange={onChange}
            value={value}
        >
            {options.map(option => <option value={option.value}>{option.title}</option>)}
        </select>
    </div>
)

const FilterForm = ({ search, filter, onChange }) => (
    <div className="widget-dialog__filter">
        <Input
            label='Поиск'
            name="search"
            type="search"
            value={search}
            onChange={onChange}
        />
        <Select
            label='Фильтр'
            name="filter"
            onChange={onChange}
            value={filter}
            options={filterOptions}
        />
    </div>
)

export default FilterForm;