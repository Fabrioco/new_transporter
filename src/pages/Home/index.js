import { FaRegEnvelope, FaPhone } from 'react-icons/fa'

import './home.css'

import Logo from "../../imgs/logo.svg"

export default function Home() {
    return (
        <div className="container-home">
            <main className="main-content">
                <p>SOMOS UMA EMPRESA ALTAMENTE QUALIFICADA PARA ENTREGAS, ENTREGAMOS NO PRAZO, PRODUTOS INTACTOS E COM UM ANO COMPLETO DE GARANTIA GRATUITA.</p>
                <img src={Logo} alt="logo.svg" />
            </main>
            <footer>
                <h1>Contatos</h1>
                <div className="contacts">
                    <div id="email">
                        <FaRegEnvelope size={25} style={{color: "white", width:"35px"}} />
                        <p>Fabriciooliveiralopes50@gmail.com</p>
                    </div>
                    <div id="phone">
                        <FaPhone size={25} style={{color:"white", width:"35px"}} />
                        <p>(11) 9 6016-8159</p>
                    </div>
                </div>
                
            </footer>
            <p id="copyright">&copy; Fabrício Oliveira Lopes</p>
        </div>
    )
}