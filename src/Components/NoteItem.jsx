import { useState, useContext } from 'react'
import NotesContext from '../Context/NotesContext'

function NoteItem({ note }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(note.text)
    const { deleteNote, editNote } = useContext(NotesContext)

    return (
        <div className="note-card">
            {isEditing ? (
                <div className="edit-row">
                    <input
                        type="text"
                        placeholder='Enter new note...'
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className="btn-success" onClick={() => {
                        if (editedText.trim() === "") return
                        editNote(note.id, editedText)
                        setIsEditing(false)
                    }}>Save</button>
                    <button className="btn-ghost" onClick={() => {
                        setEditedText(note.text)
                        setIsEditing(false)
                    }}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{note.text}</h3>
                    <div className="note-card-actions">
                        <button className="btn-ghost" onClick={() => setIsEditing(prev => !prev)}>Edit</button>
                        <button className="btn-danger" onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NoteItem