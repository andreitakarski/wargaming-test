import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ElementWidget from './components/elementWidget';
import Article from './components/article';
import TagList from './components/tagList';
import Search from './components/search';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/taglist' component={TagList}/>
            <Route path='/article' component={Article}/>
            <Route path='/widget' component={ElementWidget}/>
        </Switch>
    </main>
)

const Menu = () => (
    <nav className="main-menu">
        <ul>
            <li><NavLink activeClassName='active' to="/search">Поиск</NavLink></li>
            <li><NavLink activeClassName='active' to="/taglist">Адаптивный список</NavLink></li>
            <li><NavLink activeClassName='active' to="/article">Статья</NavLink></li>
            <li><NavLink activeClassName='active' to="/widget">Виджет по выбору элементов</NavLink></li>
        </ul>
    </nav>
)

const App = () => {
  return (
    <div className="App">
        <Menu/>
        <Main/>
    </div>
  );
}

export default App;
