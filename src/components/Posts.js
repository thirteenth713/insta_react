import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render () {
    return (
      <div className="left">
        <Post alt="nature" src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg" />
        <Post alt="nature" src="http://www.9skips.com/wp-content/uploads/2017/10/forests.jpg" />
      </div>
    );
  }
}