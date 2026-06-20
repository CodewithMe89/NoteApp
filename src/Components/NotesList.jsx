import { useContext } from 'react'
import NotesContext from '../Context/NotesContext'
import NoteItem from './NoteItem'

function NotesList({ searchTerm }) {
    const { notes } = useContext(NotesContext)

    const filteredNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (notes.length === 0) {
        return (
            <div className="empty-state">
                <p>No notes yet. Write your first one above.</p>
            </div>
        )
    }

    if (filteredNotes.length === 0) {
        return (
            <div className="empty-state">
                <p>No notes match "{searchTerm}"</p>
            </div>
        )
    }

    return (
        <div className="notes-list">
            {filteredNotes.map(note =>
                <NoteItem key={note.id} note={note} />
            )}
        </div>
    )
}

export default NotesList