import React, { Component } from 'react';
import memoize from "memoize-one";
import WidgetItem from './widgetItem';
import SelectedElements from './selectedElements';
import { getNumberFromStr, generateElements } from '../../helper';
import FilterForm from './filterForm';

const ELEMENT_LIST = generateElements('Элемент', 300);

class ElementWidget extends Component {
    state = {
        selectedElements:  this.props.result,
        search: '',
        filter: 0
    }

    static getDerivedStateFromProps(props, state) {
        if (props.result !== state.selectedElements) {
            return {
                selectedElements: props.result,
            };
        }
        return null;
    }

    changeSelectedElements = (element) => {
        const { selectedElements } = this.state;
        const idx = selectedElements.findIndex(el => el === element);
        
        if(idx !== -1) {
            selectedElements.splice(idx, 1);
        } else  if(selectedElements.length < 3) {
            selectedElements.push(element)
        }

        this.setState({ selectedElements })
    }

    onSave = () => {
        const { selectedElements } = this.state;
        const { setResult, hideDialog } = this.props;

        setResult(selectedElements);
        hideDialog();
    }

    filter = memoize(
        (search, filter) => ELEMENT_LIST.filter(item => (
            item.toLowerCase().includes(search.toLowerCase())
            && (getNumberFromStr(item) > parseInt(filter))))
    );

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render(){
        const { selectedElements, search, filter } = this.state;
        const { hideDialog } = this.props;

        const filteredElements = this.filter(search, filter);

        return (
            <div className="widget-dialog">
                <div className="widget-dialog__header">
                    <h1 className="widget-dialog__title">Диалог выбора элементов</h1>
                    <button
                        type="button"
                        className="widget-dialog__close"
                        onClick={hideDialog}
                    >
                        <span className="close-icon"/>
                    </button>
                </div>

                <FilterForm onChange={this.handleChange} search={search} filter={filter} />

                <div className="widget-dialog__body">
                    <ul className="widget-dialog__list">
                        {
                            filteredElements.map(element => {
                                const isSelected = selectedElements.indexOf(element) !== -1;
                                const isDisabled = !isSelected && selectedElements.length === 3;
                                return (
                                    <WidgetItem
                                        key={element}
                                        item={element}
                                        selected={selectedElements.indexOf(element) !== -1}
                                        disabled={isDisabled}
                                        onChange={() => this.changeSelectedElements(element)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="widget__description">Выбранные элементы на данный момент:</div>

                <SelectedElements
                    selectedElements={selectedElements}
                    changeSelectedElements={this.changeSelectedElements}
                />

                <button type="button" className="widget__btn" onClick={this.onSave}>
                    Сохранить
                </button>

                <button type="button" className="widget__btn btn--cancel" onClick={hideDialog}>
                    Отмена
                </button>
            </div>
        )
    }
}

export default ElementWidget;