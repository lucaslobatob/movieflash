import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Filme from "./pages/Filme/Filme.js";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/filme/:id' element={ <Filme />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;