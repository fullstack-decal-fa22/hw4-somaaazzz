import React, { useState } from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

  // const [posts, setPosts] = useState([]);
  // const addPost = (color) => {
  //   setPosts(posts.push(color));
  // }
    return (
      <div className="colorOptions">
          <Color color="red" handleClick={(color) => props.handleClick(color)}>red</Color>
          <Color color="blue" handleClick={(color) => props.handleClick(color)}>blue</Color>
          <Color color="green" handleClick={(color) => props.handleClick(color)}>green</Color>
      </div>
    );
}

export default Menu;