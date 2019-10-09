import React from 'react';

const SelectedElementsItem = ({ element, deleteElement }) => (
    <li className="widget-result__item">
        <span className="widget-result__item-name">{element}</span>
        <button className="widget-result__item-delete" onClick={deleteElement}>
            <span className="close-icon"/>
        </button>
    </li>
)

const SelectedElements = ({ selectedElements = [], changeSelectedElements }) => (
    <ul className="widget-result">
        {
            selectedElements.map(el => (
                <SelectedElementsItem
                    key={el}
                    element={el}
                    deleteElement={() => changeSelectedElements(el)}
                />
            ))
        }
    </ul>
)

export default SelectedElements;