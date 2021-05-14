import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vinda, APAD</span>

        <Link className="button " to="/incidents/new">Cadastrar novo Caso</Link>
        <button type="button" >
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descrição </strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8c3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descrição </strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8c3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descrição </strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8c3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>Descrição </strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8c3" />
          </button>
        </li>
      </ul>

    </div>
  )
}