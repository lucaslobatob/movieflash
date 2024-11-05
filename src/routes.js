import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Filme from "./pages/Filme/Filme.js";
import Header from "./components/Header/Header.js";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/filme/:id' element={ <Filme />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;