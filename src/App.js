import React from 'react';
import { Provider } from 'react-redux';

// Le damos un alias a Browser
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';

import './App.css';
import Header from './layout/header';
import Form from './components/form/form';
import Store from './store';
import List from './components/list/list';

function App() {

  return (
    <Provider store={Store}>
      <Router>
        <div className="page">
          <Header />
          <div className="content-page">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/gallery" component={Gallery} />
              <Route path="">
                <div className="title-page">
                  Administrador de pacientes
                </div>
                <Form />
                <div className="title-page">
                  Listado de pacientes
                </div>
                <List />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
