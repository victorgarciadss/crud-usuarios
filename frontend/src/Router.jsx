import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListUsers } from "./pages/ListUsers";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/listagem" element={<ListUsers />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}