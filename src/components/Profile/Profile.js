import React, {Component} from 'react'

import {withStyles} from '@material-ui/core/styles'

const styles = {
    
}

class Profile extends Component {
    render() {
        const classes = this.props
        return(
            <div>
                This is profile page
            </div>
        )
    }
}

export default withStyles(styles)(Profile)