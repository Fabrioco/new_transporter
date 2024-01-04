import "./data.css"

import { IoMdRefresh } from "react-icons/io"

import Modal from "../../../components/Modal"

import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../../contexts/auth"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase/firebaseConnection"


export default function Data() {

    const { user } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const [name] = useState(user && user.nome)
    const [email] = useState(user && user.email)
    const [date, setDate] = useState(user && user.date)
    const [gender, setGender] = useState(user && user.gender)
    const [number, setNumber] = useState(user && user.number)
    const [address, setAddress] = useState(user && user.address)

    const [loading, setLoading] = useState(true)

    const [refresh, setRefresh] = useState(0)

    function handleAddAddress(e) {
        e.preventDefault();

        setShowModal(true)
    }




    useEffect(() => {
        const userUid = user.uid
        async function buscarEndereco() {
            const postRef = doc(db, "users", userUid)
            setRefresh((prevRefresh) => prevRefresh + 1)
            await getDoc(postRef)
                .then((snapshot) => {
                    setAddress(snapshot.data().address)
                    setNumber(snapshot.data().number)
                    setDate(snapshot.data().date)
                    setGender(snapshot.data().gender)
                })
                .catch(() => {
                    console.log("erro ao buscar")
                })
        }
        setLoading(false)
        buscarEndereco()
    }, [])


    function refreshP() {
        const userUid = user.uid
        async function buscarEndereco() {
            const postRef = doc(db, "users", userUid)
            setRefresh((prevRefresh) => prevRefresh + 1)
            await getDoc(postRef)
                .then((snapshot) => {
                    setAddress(snapshot.data().address)
                    setNumber(snapshot.data().number)

                })
                .catch(() => {
                    console.log("erro ao buscar")
                })
        }
        setLoading(false)
        buscarEndereco()
    }



    return (
        <div>
            {loading === true ? (
                <div className="div-loading">
                    <p className="load-address">Carregando...</p>
                </div>
            ) : (
                <main className="main-data">
                    <div>
                        <h1>Minhas Informações</h1>
                        <div className="allData">
                            <p>Nome: {name}</p> 
                            <p>Nascido: {date}</p>
                            <p>{gender}</p>
                            <p>Email: {email}</p>
                            </div>
                            <div className="address">
                                <p>{address !== '' ? `${address}, N° ${number}` : "Endereço não cadastrado"}</p>
                                <button
                                    onClick={handleAddAddress}>
                                    Editar
                                </button>
                                <IoMdRefresh onClick={refreshP} color="blue" size={25} />
                            
                        </div>
                    </div>
                    <Link className="back" to="/profile">Voltar</Link>
                </main>)}

            {showModal && (
                <Modal
                    close={() => setShowModal(false)} uid={user} />
            )}
        </div>
    )
}