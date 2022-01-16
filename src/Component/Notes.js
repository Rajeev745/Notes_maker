import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import NoteCard from '../NoteCard/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id != id)
    }
    const breakpoints={
        default:3,
        1100: 2,
        700:1,
    }
    return (
        <Container>


            <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
            
            >

                {notes.map(note => (
                    <div>
                        <NoteCard note={note} handleDelete={handleDelete}>
                        </NoteCard></div>
                ))}
            </Masonry>

        </Container>
    )
}
