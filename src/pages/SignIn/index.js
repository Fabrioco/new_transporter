import { Link } from "react-router-dom"

import "./login.css"

import truck from "../../imgs/truck-name.svg"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { toast } from "react-toastify"

export default function LogIn() {

    const { signIn, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault()
        if (email !== '' && password !== '') {
            await signIn(email, password)
        } else {
            toast.error("Preencha todos os campos")
        }
    }

    return (
        <div className="container">
            <main className="container-login">
                <img className="svg-login" src={truck} alt="Truck.svg" />
                <div className="form-login">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha" />
                        <button type="submit">
                            {loadingAuth ? "Carregando..." : "Entrar"}
                        </button>
                    </form>
                    <Link to="/resetpassword" className="forget-pass">Esqueceu a senha?</Link>
                    <p>Não tem cadastro? <Link to='/register' className="register-log">Cadastre-se</Link></p>
                </div>
            </main>
        </div>
    )
}