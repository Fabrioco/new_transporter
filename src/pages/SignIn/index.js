import { Link } from "react-router-dom"

import "./login.css"

import sigin from "../../imgs/register.svg"

import truck from "../../imgs/truck-name.svg"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { toast } from "react-toastify"

export default function LogIn() {

    const { signIn, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signedAccount, setsignedAccount] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()
        if (email !== '' && password !== '') {
            await signIn(email, password)
        } else {
            toast.error("Preencha todos os campos")
        }
    }

    const [name, setName] = useState("")
    const [emailS, setEmailS] = useState("")
    const [passwordS, setPasswordS] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [gender, setGender] = useState("")

    const { signUp } = useContext(AuthContext);

    async function handleSubmit(e) {
        if (name !== '' && email !== '' && emailS !== '' && password !== '' & passwordS !== '') {
            if (email === emailS && password === passwordS) {
                await signUp(email, password, name, address, number, date, gender)
            } else {
                e.preventDefault()
                toast.error("Email ou senha não corresponde")
            }
        } else {
            e.preventDefault()
            toast.error("Preencha todos os campos")
        }
    }

    function handleRegisterTrade() {
        setsignedAccount(true)
    }

    function handleLoginTrade() {
        setsignedAccount(false)
    }

    return (
        <div>
            {!signedAccount ?
                (<div className="container">
                    <main className="container-login" >
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
                            <button onClick={handleRegisterTrade}>Cadastrar</button>
                        </div>
                    </main>
                </div >
                ) : (
                    <>
                        <div className="container-register">
                            <img src={sigin} alt="svg" />
                            <div className="form-register">
                                <h1>Cadastro</h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="text"
                                        placeholder="Digite seu nome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />

                                    <input type="text"
                                        placeholder="digite seu endereço"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />

                                    <input type="text"
                                        placeholder="N°"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)} />

                                    <input type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)} />

                                    <select
                                        style={{ width: "171px", padding: "5px 10px", borderRadius: "3px", marginBottom: "5px", border: "1px solid black" }}
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}>
                                        <option value="">Selecione</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>

                                    <input type="text"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />

                                    <input type="text"
                                        placeholder="Confirme seu email"
                                        value={emailS}
                                        onChange={(e) => setEmailS(e.target.value)} />

                                    <input type="password"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />

                                    <input type="password"
                                        placeholder="Confirme sua senha"
                                        value={passwordS}
                                        onChange={(e) => setPasswordS(e.target.value)} />

                                    <button type="submit">
                                        Cadastrar
                                    </button>
                                </form>
                                <div className="option-register">
                                    <p>
                                        Já é cadastrado? <Link id="link-back" to='/login'>Clique aqui</Link>
                                    </p>
                                    <button onClick={handleLoginTrade}>Clique aqui</button>
                                    <i>Cuidado! nenhum dos nossos funcionarios pediria seus dados.</i>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}