import React, { Component } from 'react';
import { get_posts,delete_post } from '../../redux/actions/posts'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

export class Posts extends Component {

    componentDidMount(){
        this.props.get_posts()
    }

    render() {
        return (
            <div>
                <h2 className="text-center my-3">All Posts</h2>
                <div className="text-center">
                    <Link to="/create" className="btn btn-dark">Add Post</Link>
                </div>
                <table className="table-striped table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map(post=>(
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td><Link to={`/update/${post.id}`} className="btn btn-secondary btn-sm">Update</Link></td>
                            <td><button className="btn btn-sm btn-danger" onClick={this.props.delete_post.bind(this,post.id)}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts:state.posts.posts
})

export default connect(mapStateToProps,{get_posts,delete_post})(Posts);
