import React, { Component } from 'react';
import { Routes as Switch,Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Navbar from './Navbar';
import Posts from '../components/posts/Posts'
import CreatePost from '../components/posts/CreatePost'
import UpdatePost from '../components/posts/UpdatePost';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

export class Router extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route element={<Home/>} path='/' exact />
                    <Route element={<Posts/>} path='/posts' />
                    <Route element={<CreatePost/>} path='/create'/>
                    <Route element={<UpdatePost/>} path="/update/:id" />
                    <Route element={<Signup/>} path='/signup' />
                    <Route element={<Login/>} path='/login' />
                </Switch>
            </div>
        )
    }
}

export default Router
