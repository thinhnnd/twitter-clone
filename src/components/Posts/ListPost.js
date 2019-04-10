import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'

class ListPost extends Component {
    render() {
        return(
            <div>
                <AddPost />
                <Post />
                This is ListPost Page
            </div>
        )
    }
}

export default ListPost