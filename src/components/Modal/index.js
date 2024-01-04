import { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import "./modal.css";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";

export default function Modal({ close }) {
    const { handleAddress } = useContext(AuthContext);

    const [localAddress, setLocalAddress] = useState("");
    const [localNumber, setLocalNumber] = useState("");

    async function handleAddressButtonClick() {
        if (localAddress !== '' && localNumber !== '') {
            await handleAddress(localAddress, localNumber);
        } else {
            toast.error("Preencha todos os campos")
        }

    }

    return (
        <div className="modal-address">
            <div className="modal-container">
                <FiX size={25} onClick={close} className="close" />
                <h2>Digite seu Endereço</h2>
                <input
                    type="text"
                    placeholder="Endereço residencial"
                    value={localAddress}
                    onChange={(e) => setLocalAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="N°"
                    value={localNumber}
                    onChange={(e) => setLocalNumber(e.target.value)}
                />
                <button onClick={handleAddressButtonClick}>Cadastrar Endereço</button>
            </div>
        </div>
    );
}
