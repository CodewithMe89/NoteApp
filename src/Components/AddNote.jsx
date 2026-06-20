import { useContext, useState } from 'react'
import NotesContext from '../Context/NotesContext'

function AddNote() {
    const [note, setNote] = useState("")
    const { notes, setNotes } = useContext(NotesContext)

    function handleAddNote() {
        if (note.trim() === "") return;
        setNotes(prevNotes => [
            ...prevNotes,
            {
                id: Date.now(),
                text: note
            }
        ])
        setNote('')
    }

    return (
        <div className="add-note-row">
            <input
                type="text"
                placeholder="Write a new note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
            />
            <button className="btn-primary" onClick={handleAddNote}>Add Note</button>
        </div>
    )
}

export default AddNote