import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css'

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Register() {
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plantaforma e ajude pessoas a encontrarem os casos de sua ONG.
          </p>

          <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041"/>
              Nao tenho cadastro
          </Link>
        </section>
        <form>
          <input placeholder="Nome de ONG"/>
          <input placeholder="E-mail" type="email"/>
          <input placeholder="Whatsapp"/>
          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{width: 80}}/>
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}