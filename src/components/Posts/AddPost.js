import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

const styles = {
    paper : {
        padding: 8
    },
    textField: {
        width: '100%',

    },
    button: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#800080',
        color: '#fff',
        '&:hover': {
            color: '#800080'
        }
    }
}

class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()

        const postData = {
            text: this.state.text
        }
        
        console.log(postData);
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className = { classes.paper }>
                <TextField 
                    className = { classes.textField }
                    multiline
                    rowsMax="4"
                    label = "What's new?"
                    placeholder = "Write something to the world"
                    margin="normal"
                    onChange = {this.handleChange}
                />
                <Button 
                    className = { classes.button } 
                    variant="outlined"
                    onClick = {this.handleSubmit}
                >
                    Send
                </Button>
            </Paper>
        )
    }
}

export default withStyles(styles)(AddPost)