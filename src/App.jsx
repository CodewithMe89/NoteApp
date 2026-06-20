import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { NotesProvider } from './Context/NotesContext'
import { useState, useEffect } from 'react'
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import './App.css'


function App() {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
    document.body.className = darkMode
    ? "dark"
    :"light"
},[darkMode])
    return (
        <>
            <NotesProvider>
                <BrowserRouter>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        {"|"}
                        <NavLink to="/notes">Notes</NavLink>

                        <button onClick={() => setDarkMode(prev => !prev)}>
                            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </button>
                    </nav>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />} />

                        <Route
                            path="/notes"
                            element={<Notes />} />
                    </Routes>
                </BrowserRouter>
            </NotesProvider>           
        </>
    )
}

export default App