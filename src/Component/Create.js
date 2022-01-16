import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {
    Typography, Button, Container, makeStyles, TextField, Radio,
    RadioGroup, FormControlLabel, FormLabel, FormControl
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

// const useStyles=makeStyles({
//     btn:{
//         fontSize:50,
//         backgroundColor:'red',
//         '&:hover':{
//             backgroundColor:'red'
//         }
//     },
//     title:{
//         textDecoration:'underlined',
//         marginBottom:20,
//     }
// })
const useStyles = makeStyles({
    field: {
        marginBottom: 20,
        marginTop: 20,
        display: 'block'
    }
})


export default function Create() {
    const history = useNavigate()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')
    const handleSubmit = (e) => {
        e.preventDefault()
        setDetailsError(false)
        setTitleError(false)
        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    title,
                    details,
                    category
                })
            }).then(() => history('/'))
        }

    }

    const classes = useStyles()
    return (
        <Container>
            <Typography
                variant='h6' color='textSecondary' component='h6' gutterBottom>Create page</Typography>
            <form noValidate autoComplete='off' >
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="write your Note"
                    variant="outlined" color='primary'
                    fullWidth
                    required
                    error={titleError} />

            </form>
            <form noValidate="off">
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    variant="outlined" color='primary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError} />

                <FormControl className={classes.field}>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio color='primary' />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio color='primary' />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio color='primary' />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio color='primary' />} label="Work" />

                    </RadioGroup>

                    {/* <Link to="/" > */}
                    <Button
                        type='submit' variant='contained' color='primary'
                        endIcon={<SendIcon />}
                        onClick={handleSubmit}


                    >
                        SUBMIT</Button>
                    {/* </Link> */}

                </FormControl>




            </form>


        </ Container>



    )
}
