import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css'; /*import dos icones que serão usados*/
import './main.css';

import React from 'react';
import NavBar from './navbar/navbar';
import {Link} from 'react-router-dom';


export default props => (
  <div className="container-main">
    <NavBar/>
    <div className="container">
      <Link to="/login">
        <h3 id="cad">Cadatrar</h3>
      </Link>
      <Link to="/register">
        <h3 id="esq">Esqueceu a senha?</h3>
      </Link>
      <form className="form-inline">
        <div className="form-group mb-2">
          
          <input type="text" readonly className="form-control" id="staticEmail2" placeholder="E-mail"/>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          
          <input type="password" className="form-control" id="inputPassword2" placeholder="Senha"/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">entrar</button>
      </form>
    </div>


  </div>
)

