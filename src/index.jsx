import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import About from './about';
import Home from './App';
import Main from './Main';
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />}></Route>
                    <Route path="/Main" element={<Main />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
