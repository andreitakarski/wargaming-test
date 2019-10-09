import React from 'react';
import './style.scss'

const TagList = () => (
    <section className="tag-list">
        <nav className="tag-list__nav" tabIndex={1} >

            <span htmlFor="toggle" className="tag-list__toogle-btn">
                <span/>
                <span/>
                <span/>
            </span>

            <ul className="tag-list__list">
                <li>
                    <input type="radio" id="1"  className="tag-list__input" name="taglist" value={1} checked="checked" />
                    <label htmlFor="1" className="tag-list__label">World Of Tanks</label>
                </li>
                <li>
                    <input type="radio"  id="2"  className="tag-list__input" name="taglist" value={2} checked="checked" />
                    <label htmlFor="2"  className="tag-list__label">World Of Warplanes</label>
                </li>
                <li>
                    <input type="radio" id="3" className="tag-list__input" name="taglist" value={3} checked="checked" />
                    <label htmlFor="3" className="tag-list__label">World Of Warships</label>
                </li>
            </ul>
        </nav>
    </section>
)

export default TagList;