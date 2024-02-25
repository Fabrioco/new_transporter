import { useNavigate } from "react-router-dom";
import "./cart.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  function backMail() {
    navigate("/mail");
  }

  function finishBuy() {
    toast.success("Compra realizada com sucesso");
  }

  useEffect(() => {
    function loadItems() {
      const carrinho = localStorage.getItem("carrinho");
      if (carrinho) {
        setItems(JSON.parse(carrinho));
      } else {
        setItems([]);
      }
    }
    loadItems();
  }, []);

  function handleClear(index) {
    const novosItens = [...items];
    novosItens.splice(index, 1);
    setItems(novosItens);
    if (novosItens.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(novosItens));
    } else {
      localStorage.removeItem("carrinho");
    }
  }

  return (
    <div className="allCart">
      <h1>Carrinho</h1>
      <div className="content-cart">
        <div>
          <ul>
            {items.length > 0 ? (
              items.map((item, index) => (
                <li key={index}>
                  {item}{" "}
                  <button onClick={() => handleClear(index)}>Excluir</button>
                </li>
              ))
            ) : (
              <p>
                Infelizmente você ainda não adicionou nada no carrinho. Volte a
                loja e adicione
              </p>
            )}
          </ul>
        </div>
        <div className="content__btns">
          <button
            className="btnCart"
            id="finishCart"
            style={{ marginBottom: "10px" }}
            onClick={finishBuy}
          >
            Finalizar compra
          </button>
          <button className="btnCart" onClick={backMail}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
