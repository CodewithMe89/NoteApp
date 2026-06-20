import { useContext } from 'react'
import { Link } from 'react-router-dom'
import NotesContext from '../Context/NotesContext'

function Home() {
    const { notes } = useContext(NotesContext)

    return (
        <div className="page-wrapper">
            <h1>Notes Dashboard</h1>

            <div className="stat-chip">
                {notes.length} {notes.length === 1 ? 'note' : 'notes'}
            </div>

            <h3>Recent Notes</h3>

            {notes.length === 0 ? (
                <div className="empty-state">
                    <p>No notes yet. Create your first one.</p>
                </div>
            ) : (
                <ul>
                    {notes.slice(-3).reverse().map(note =>
                        <li key={note.id}>{note.text}</li>
                    )}
                </ul>
            )}

            <Link to="/notes">Go to Notes →</Link>
        </div>
    )
}

export default Home