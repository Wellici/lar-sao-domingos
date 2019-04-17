import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './components/user/cadastro/cadastro';
import Register from './components/user/register/register';

const App = () => (
  <div>
  <Main />
  <Switch>
        <Route path="/login" component={Cadastro}/>
        <Route path="/register" component={Register}/>
  </Switch>
  </div>
)

ReactDOM.render(
<BrowserRouter>
     <App/> 
</BrowserRouter>
  ,  document.querySelector('#app'));