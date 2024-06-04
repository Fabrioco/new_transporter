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
    const carrinho = localStorage.getItem("@ticketsPRO");
    const user = JSON.parse(carrinho);
    const address = user.address;
    const number = user.number;

    if (items.length == 0) {
      toast.error("Por favor, adicione algo ao seu carrinho!");
    } else {
      localStorage.removeItem("carrinho");
      toast.success(
        `Compra finalizado, enviaramos para ${address} N ${number}`
      );
    }
  }

  useEffect(() => {
    const loadItems = () => {
      const carrinho = localStorage.getItem("carrinho");
      if (carrinho) {
        setItems(JSON.parse(carrinho));
      } else {
        setItems([]);
      }
    };
    loadItems();
  }, [items]);

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
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="item-cart" key={index}>
              <img src={item[1]} alt={item[0]} />
              <h3>{item[0]}</h3>
              <button onClick={() => handleClear(index)}>Excluir</button>
            </div>
          ))
        ) : (
          <p>
            Infelizmente você ainda não adicionou nada no carrinho. Volte a loja
            e adicione
          </p>
        )}

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
