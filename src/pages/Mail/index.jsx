import { toast } from "react-toastify";
import "./mail.css";
import { items } from "../../data/itemsSell";

export default function Mail() {
  const handleAdd = async (nomeProduto, urlImage, description) => {
    toast.success("Item adicionado com sucesso");
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push([nomeProduto, urlImage, description]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  return (
    <div>
      <main className="main-mail">
        <h1 className="title-mail">Loja</h1>
        <div className="main-products">
          {items.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.urlImage} alt={item.nomeItem} />
              <h3>{item.nomeItem}</h3>
              <p>{item.descricao}</p>
              <button
                onClick={() =>
                  handleAdd(item.nomeItem, item.urlImage, item.descricao)
                }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
