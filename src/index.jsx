import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage'
import Login from './components/login'
import About from './components/About'
import Search from './components/search'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// Utilizando react-router-dom para fazer as rotas entre as páginas 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact/>
      <Route path="/login" component={Login} />
      <Route path="/About" component={About} />
      <Route path="/search" component={Search} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')

);

