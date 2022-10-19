import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */

    const [listPosts, setListPosts] = useState([]);
    const handleClick = (color) => {
        const temp = Array(listPosts.length + 1);
        for(let i = 0; i < listPosts.length; i ++) {
            temp[i] = listPosts[i];
        }
        temp[listPosts.length] = color;
        setListPosts(temp);
    }
    let posts = listPosts.map((post) => <Block color={post}></Block>);
    
    return (
        <div>
            <Menu handleClick={handleClick}></Menu>
            {posts}
        </div>
    );
}

export default Feed;