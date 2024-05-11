import { ToastContainer } from "react-toastify";
import RouterApp from "./Routes/router";

import AuthProvider from "./contexts/auth";

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ToastContainer autoClose={3000} />
                <RouterApp />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;