import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Details from "./pages/Details";
import { Home } from "./pages/Home";
import Initial from "./pages/Initial";
import Not_Found from "./pages/404"

// Routes 
// sempre a primeir a tela, é a primeira declarada 
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Initial />} />
                <Route path="/home" element={<Home />} />
                <Router path="/details" element={<Details />} />
                {/* <Route path="*" element={ <h1>Not Foud</h1>} /> */}
                <Not_Found path="/not_found" element={<Not_Found />} />
            </Routes>
        </BrowserRouter>
    );
}
