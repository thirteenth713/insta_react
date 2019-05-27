import React, { Component } from 'react';
import Post from './Post';
import InstaService from '../services/instaservice';

export default class Posts extends Component {
    //Class fields ES10
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    };

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch()
    }

    render () {
    return (
      <div className="left">
        <Post alt="nature" src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg" />
        <Post alt="nature" src="http://www.9skips.com/wp-content/uploads/2017/10/forests.jpg" />
      </div>
    );
  }
}