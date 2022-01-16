import React from 'react'
import { Card, CardHeader, IconButton, CardContent, Typography, Avatar } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { yellow, green, pink, blue, red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category == 'work') {
                return blue[700]
            }
            if (note.category == 'money') {
                return green[500]
            }
            if (note.category == 'todos') {
                return yellow[500]
            }
            return red[500]
        },
    }
})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>

                    <Typography variant='body' color='textPrimary'>
                        {note.details}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}
