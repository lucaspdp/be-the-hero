import React, { useState } from 'react';

import './styles.css';

import logoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import axios from '../../services/api';

export default function Register({history}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e){
    e.preventDefault();
    const data = {
      name, 
      email, 
      whatsapp, 
      city, 
      uf
    };

    try{
      const response = await axios.post('ongs', data);
  
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    }catch (err){
      alert('Erro no cadastro, tente novamente!')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041"/>
            Já possuo um cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Nome da ONG"
          />
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="E-mail"
          />
          <input 
            value={whatsapp} 
            onChange={e => setWhatsApp(e.target.value)} 
            placeholder="WhatsApp" 
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city} 
              onChange={e => setCity(e.target.value)} 
            />
            <input 
              value={uf} 
              onChange={e => setUf(e.target.value)} 
              placeholder="UF" 
              style={{
                width: 80
              }}
            />
          </div>
          <button className="button" type="submit">Cadastrar </button>
        </form>
      </div>
    </div>
  )
}
