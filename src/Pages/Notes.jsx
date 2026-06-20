import AddNote from '../Components/AddNote'
import NotesList from '../Components/NotesList'
import { useState } from 'react'

function Notes() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="page-wrapper">
            <h1>My Notes</h1>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <AddNote />

            <NotesList searchTerm={searchTerm} />
        </div>
    )
}

export default Notes