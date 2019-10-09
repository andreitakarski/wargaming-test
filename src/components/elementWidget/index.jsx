import React, { Component } from 'react';
import WidgetDialog from './widgetDialog';
import SelectedElements from './selectedElements';
import { plural } from '../../helper';
import './style.scss'

class ElementWidget extends Component {
    state = {
        showDialog: false,
        result: []
    }

    toggleDialog = () => this.setState({ showDialog: !this.state.showDialog });

    setResult = (result = []) => this.setState({ result });


    deleteElement = (element) => {
        const { result } = this.state;
        const idx = result.findIndex(el => el === element);

        if(idx !== -1) {
            result.splice(idx, 1);
            this.setResult(result);
        }
    }

    render(){
        const { showDialog, result } = this.state;
        const elementsCount = result.length

        return (
            <div className="widget">
                <h1 className="widget__title">Выбор элементов</h1>
                <div className="widget__description">
                    {`На данный момент у вас выбрано
                    ${elementsCount} ${plural(elementsCount,'элемент','элемента','элементов')}`}
                </div>

                {!showDialog
                    ? (
                        <div>
                            <SelectedElements
                                key="result"
                                selectedElements={result}
                                changeSelectedElements={this.deleteElement}
                            />

                            <div className="widget__btns">
                                <button
                                    type="button"
                                    className="widget__btn"
                                    onClick={this.toggleDialog}
                                >
                                    Изменить мой выбор
                                </button>
                            </div>
                        </div>
                    )
                    : (
                        <WidgetDialog
                            hideDialog={this.toggleDialog}
                            result={[...result]}
                            setResult={this.setResult}
                        />
                    )}
            </div>
        )
    }
}

export default ElementWidget;