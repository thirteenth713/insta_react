import React from 'react';
import User from './User';
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://fortunedotcom.files.wordpress.com/2018/10/gettyimages-691829276-e1541008255299.jpg"
        alt="Man"
        name="some man"/>
      <Palette />
    </div>
  )
};

export default Profile;