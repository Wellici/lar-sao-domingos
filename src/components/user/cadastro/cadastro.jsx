import React from 'react';
import 'modules/bootstrap/dist/css/bootstrap.min.css';

import './cadastro.css';
import Logo from '../../logo/logo';

export default props => (
  <div className="container-create">
      <Logo/>
    <form id="form-create">
      <div className="form-row">

        <div className="form-group create-group col-md-8">
          
          <input type="text" className="form-control" id="inputName" placeholder="Nome"/>
        </div>
        
        <div className="form-group create-group col-md-8">
          
          <input type="text" className="form-control" id="inputCPF" placeholder="CPF"/>
        </div>

        <div className="form-group create-group col-md-8">
          
          <input type="email" className="form-control" id="inputEmail4" placeholder="E-mail"/>
        </div>

        <div className="form-group create-group col-md-8">
          
          <input type="text" className="form-control" id="inputFone" placeholder="Telefone"/>
        </div>

        <div className="form-group create-group col-md-8">
          
          <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"/>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-create">OK</button>
</form>
  </div>
)