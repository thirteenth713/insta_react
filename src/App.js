import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  //Router - компонент в который нужно обернуть окружение для настройки маршрутизации
    <Router>
      <div className="App">
        <Header />
        {/*Route - прописываем маршрут для страниц
           path='' - указываем адресса для ссылок на компоненты(страницы)
           exact - атрибут который указывается в Route для уточнения пути(ссылки)*/}
        <Route path="/" component={Feed} exact />
        <Route path="/profile" component={Profile} exact />
      </div>
    </Router>
  );
}

export default App;
