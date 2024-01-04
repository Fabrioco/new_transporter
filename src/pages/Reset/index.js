import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useState } from 'react';

import password from '../../imgs/password.svg'

import './reset.css';

export default function Reset () {

    const [email, setEmail] = useState("")

    function handlePassword(){
        if(email !== ""){
            toast.success("Codigo enviado")
        } else {
            toast.error("Digite seu email")
        }
    }

    return(
        <div className='container-password'>
            <img src={password} alt='passowrd.svg' />
            <div className='form-password'>
                <p>Digite seu e-mail para enviarmos o seu código de verificação</p>
                <input 
                type='text'
                placeholder='Digite seu E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />

                <button onClick={handlePassword}>Enviar</button>
                <Link className='link-reset' to='/login'>Cancelar</Link>
            </div>
        </div>
    )
}