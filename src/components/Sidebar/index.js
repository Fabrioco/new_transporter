import { FiX } from "react-icons/fi"
import React, { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../contexts/auth'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConnection";

import { toast } from "react-toastify";

import './sidebar.css';
import { Link } from "react-router-dom";



const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { signed, user, logout } = useContext(AuthContext)

  const [name, setName] = useState(user && user.nome);


  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <FiX style={{ cursor: 'pointer', marginLeft: "80%", color: "black" }} size={50} className="close-sidebar" onClick={toggleSidebar} />
      {!signed ? (
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ textIndent: '10px', width: '200px', marginLeft: "5px", marginBottom: "10px" }}>Faça login ou cadastro para ter acesso ao site</p>
          <Link className="link" to='/register'>Cadastrar</Link> <br />
          <Link className="link" to='/login'>Login</Link> <br />
        </nav>
      ) : (
        <>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <p>Olá, {name}</p>
            <Link
              to='/'
              className="link">
              Home
            </Link>
            <Link
              to='/mail'
              className="link">
              Loja
            </Link>

            <Link
              to='/cart'
              className="link">
              Carrinho
            </Link>
            <Link
              to='/data'
              className="link">
              Dados
            </Link>

            <Link
              to='/resetpassword'
              className="link">
              Gerenciar Senha
            </Link>

            <Link
              to='/feedback'
              className="link"
            >FeedBack</Link>
          </nav>
          <footer>
            <button onClick={() => logout()}>Sair</button>
          </footer>
        </>
      )}

    </div>
  );
}

export default Sidebar;
