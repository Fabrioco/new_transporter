import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../firebase/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useNavigate();



    function toggleSidebar() {
        setSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@ticketsPRO')

            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }
            setLoading(false);
        }
        loadUser();
    }, [])

    //Fazer login
    async function signIn(email, password) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef)

                let data = {
                    uid: uid,
                    nome: docSnap.data().nome,
                    email: value.user.email,
                    avatarUrl: docSnap.data().avatarUrl,
                    address: docSnap.data().address,
                    number: docSnap.data().number,
                    date: docSnap.data().date,
                }

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success("Bem-vindo(a) de volta!")
                navigate("/mail")
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
                toast.error("Email ou senha incorreto");
            })

    }


    // Cadastrar um novo user
    async function signUp(email, password, name, address, number, date, gender) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await setDoc(doc(db, "users", uid), {
                    nome: name,
                    email: email,
                    avatarUrl: "",
                    address: address,
                    number: number,
                    date: date,
                    gender: gender,
                })
                    .then(() => {

                        let data = {
                            uid: uid,
                            nome: name,
                            email: value.user.email,
                            avatarUrl: null,
                            address: address,
                            number: number,
                            date: date,
                            gender: gender
                        };
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        toast.success("Seja bem-vindo ao sistema!")
                        navigate("/mail")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
            })

    }


    function storageUser(data) {
        localStorage.setItem('@ticketsPRO', JSON.stringify(data))
    }


    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@ticketsPRO');
        setUser(null);
    }


    const deleteAddress = async (address, number) => {
        try {
            const userUid = user.uid;
            const docRef = doc(db, 'users', userUid);

            // Verifica se o documento existe antes de tentar atualizá-lo
            const docSnapshot = await getDoc(docRef);

            if (docSnapshot.exists()) {
                // O documento existe, então podemos tentar atualizá-lo
                await updateDoc(docRef, { address: "", number: "" });
                console.log('Documento atualizado com sucesso.');
            } else {
                console.log('O documento não existe.');
            }
        } catch (error) {
            console.error('Erro ao atualizar o documento:', error);
        }
    };

    async function handleAddress(address, number) {
        const userUid = user?.uid;
        const docRef = doc(db, "users", userUid);

        const stringAddress = String(address)
        const stringNumber = String(number)

        await updateDoc(docRef, {
            address: `${stringAddress}`,
            number: `${stringNumber}`
        }).then(() => {
            toast.success("Endereço cadastrado com sucesso!")
        }).catch(() => {
            toast.error("Erro ao cadastrar, verifique e tente novamente")
        })
    }

    async function refreshUseEffect() {
        const userUid = user.uid;
        const docRef = doc(db, 'users', userUid);

        // Verifica se o documento existe antes de tentar atualizá-lo
        const docSnapshot = await getDoc(docRef);
    }




    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                logout,
                loadingAuth,
                loading,
                storageUser,
                setUser,
                deleteAddress,
                handleAddress,
                refreshUseEffect,
                toggleSidebar,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;