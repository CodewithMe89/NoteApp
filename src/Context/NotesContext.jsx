import { createContext, useState, useEffect } from 'react'

const NotesContext = createContext()



function NotesProvider({ children }) {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes")

        return savedNotes
            ? JSON.parse(savedNotes)
            : []
    });

    useEffect(() => {
        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        )
    },[notes])
    function deleteNote(id) {
        setNotes(prev =>
            prev.filter(note => note.id !== id)
        )
    }

    function editNote(id, newText) {
        setNotes(prev =>
            prev.map(note =>
                note.id === id
                    ? { ...note, text: newText }
                    : note
            )

        )
    }

    return (
        <>
            <NotesContext.Provider value={{ notes, setNotes, deleteNote, editNote }}>
                {children}
            </NotesContext.Provider>
        </>
    )
}


export { NotesProvider }
export default NotesContext