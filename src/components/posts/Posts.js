import React, { Component } from 'react';
import { get_posts } from '../../redux/actions/posts'
import { connect } from 'react-redux';

export class Posts extends Component {

    componentDidMount(){
        this.props.get_posts()
    }

    render() {
        return (
            <div>
                <h2 className="text-center my-3">All Posts</h2>
                <div className="text-center">
                    <a href="./addPosts.html" className="btn btn-dark">Add Post</a>
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
                            <td><a href="./updatepost.html" className="btn btn-secondary btn-sm">Update</a></td>
                            <td><a href="./deletepost.html" className="btn btn-sm btn-danger">Delete</a></td>
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

export default connect(mapStateToProps,{get_posts})(Posts);
