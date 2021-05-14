import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongID = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);

    })
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button " to="/incidents/new">Cadastrar novo Caso</Link>
        <button type="button" >
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong>CASO:</strong>
            <p>{incidents.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incidents.description}</p>

            <strong>VALOR</strong>
            <p> {incidents.value} </p>
            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}