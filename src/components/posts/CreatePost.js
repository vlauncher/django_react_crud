import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { create_post } from '../../redux/actions/posts'

export class CreatePost extends Component {
    state = {
        title :'',
        content:''
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault()
        const{title,content} = this.state;
        const post = {title,content};
        this.props.create_post(post)
    }
    render() {
        return (
            <div>
                <h2 className="text-center my-3">Add Post</h2>
                <div className="text-center">
                    <Link to="/posts" className="btn btn-dark mb-3">Back To List</Link>
                </div>
                <form onSubmit={this.onSubmit} className="addform">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Title" value={this.state.title} name="title"  onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Content" value={this.state.content} name="content"  onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-block btn-success">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{create_post})(CreatePost)
