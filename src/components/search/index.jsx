import React from 'react';
import './style.scss'

const Search = () => (
    <section className="search">
        display: flex
        <form action="/" className="search__form">
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Найти</button>
            </div>
        </form>
        <form action="/" className="search__form">
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Go</button>
            </div>
        </form>

        float
        <form action="/" className="search__form form--float">
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Найти</button>
            </div>
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
        </form>

        <form action="/" className="search__form form--float">
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Go</button>
            </div>
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
        </form>

        display: table
        <form action="/" className="search__form form--table">
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Найти</button>
            </div>
        </form>

        <form action="/" className="search__form form--table">
            <div className="search__input-container">
                <input type="search" className="search__input"/>
            </div>
            <div className="search__btn-container">
                <button type="submit" className="search__btn">Go</button>
            </div>
        </form>

    </section>
)

export default Search;

