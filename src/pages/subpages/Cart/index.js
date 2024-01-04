import { useNavigate } from 'react-router-dom'
import './cart.css'
import { toast } from 'react-toastify';

export default function Cart() {

    const navigate = useNavigate();
    function backMail() {
        navigate('/mail')
    }

    function finishBuy() {
        toast.success("Compra realizada com sucesso")
    }


    return (
        <div className='allCart'>
            <h1>Carrinho</h1>
            <div className='content-cart'>
                <p>Infelizmente você ainda não adicionou nada no carrinho. Volte a loja e adicione
                </p>
                <button
                    className='btnCart' id='finishCart'
                    style={{ marginBottom: "10px" }}
                    onClick={finishBuy}>Finalizar compra
                </button>
                <button className='btnCart' onClick={backMail}>Voltar</button>
            </div>
        </div>
    )
}