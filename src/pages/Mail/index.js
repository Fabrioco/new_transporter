import { toast } from "react-toastify"
import "./mail.css"

export default function Mail() {

    function handleAdd() {
        toast.success("Adicionado ao carrinho")
    }

    return (
        <div>
            <main className="main-mail">
                <h1 className="title-mail">Loja</h1>
                <div className="main-products">
                    <div className="product">
                        <img src={'https://m.media-amazon.com/images/I/81fNQ8MkOjL.__AC_SX300_SY300_QL70_ML2_.jpg'} alt="paper.jpg" />
                        <h3>Papel</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                    <div className="product">
                        <img src={'https://m.media-amazon.com/images/I/51jw9rgSoZL.__AC_SX300_SY300_QL70_ML2_.jpg'} alt="pen.jpg" />
                        <h3>Caneta</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                    <div className="product">
                        <img src={'https://m.media-amazon.com/images/I/61xLyYajSXL.__AC_SY300_SX300_QL70_ML2_.jpg'} alt="eraser.jpg" />
                        <h3>Borracha</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                    <div className="product">
                        <img src={'https://m.media-amazon.com/images/I/4105Jd8GpwL.__AC_SX300_SY300_QL70_ML2_.jpg'} alt="pencil.jpg" />
                        <h3>Lápis</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                    <div className="product">
                        <img src={"https://m.media-amazon.com/images/I/41MAVv4bJPL.__AC_SX300_SY300_QL70_ML2_.jpg"} alt="notebook.jpg" />
                        <h3>Caderno</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                    <div className="product">
                        <img src={"https://m.media-amazon.com/images/I/41B9GfM1kEL.__AC_SX300_SY300_QL70_ML2_.jpg"} alt="scissors.jpg" />
                        <h3>Tesoura</h3>
                        <p>Este produto está disponivel</p>
                        <button onClick={handleAdd} >Adicionar ao carrinho</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
