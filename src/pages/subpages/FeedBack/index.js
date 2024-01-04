import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db } from "../../../firebase/firebaseConnection"
import { toast } from "react-toastify";
import "./feedback.css"

export default function FeedBack() {
    const [nameFeed, setNameFeed] = useState('')
    const [feed, setFeed] = useState('');
    const [allFeedbacks, setAllFeedbacks] = useState([]);

    async function fetchFeedbacks() {
        const feedbacksCollection = collection(db, "feedbacks");
        const feedbacksSnapshot = await getDocs(feedbacksCollection);
        const feedbacksData = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllFeedbacks(feedbacksData);
    }

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    async function saveFeed() {
        if (feed.trim().length >= 15 && nameFeed.trim() !== '') {
            await addDoc(collection(db, "feedbacks"), {
                namefeed: nameFeed,
                text: feed
            })
                .then(() => {
                    setFeed('');
                    setNameFeed('');
                    toast.success("Seu feedback foi cadastrado com sucesso. Tenho certeza que o proprietário vai ficar feliz ao ler");
                    fetchFeedbacks();
                })
                .catch(() => {
                    toast.error("Não foi possível cadastrar");
                });
        } else {
            toast.warning("O feedback deve ter pelo menos 15 caracteres e o nome não pode estar vazio");
        }
    }

    return (
        <div className="allFeed">
            <div className="write-feed">
                <h2>FeedBacks</h2>
                <input type="text" placeholder="Digite seu nome" value={nameFeed} onChange={(e) => setNameFeed(e.target.value)} />
                <textarea
                    placeholder="Escreva aqui"
                    value={feed}
                    onChange={(e) => setFeed(e.target.value)}
                />
                <button type="submit" onClick={saveFeed}>Salvar</button>
                <i>Lembre-se o site foi feito com muito amor e carinho e eu ainda sou um jovem que quer si aperfeiçoar na área, desde já agradeço</i>
            </div>
            <div className="showFeed">
                {allFeedbacks.length === 0 ? (
                    <div style={{}}>
                        <h1 style={{ margin: "auto", textAlign: "center" }}>Ainda não tem FeedBack :(</h1>
                    </div>
                ) : (
                    <>
                        <h3>Feedbacks Cadastrados:</h3>
                        <ul>
                            {allFeedbacks.map((feedback) => (
                                <p key={feedback.id}>
                                    {feedback.text}, ({feedback.namefeed})
                                    <hr/>
                                </p>
                            ))}
                        </ul>
                    </>
                )}

            </div>
        </div>
    );
}
