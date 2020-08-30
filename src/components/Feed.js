import React from 'react';
import '../css/feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
                profileImage={'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'}
                message={'Hello from facebook clone'}
                timestamp={'This is a timestamp'}
                username={'Manuela'}
                image={'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'}
            />
        </div>
    );
};

export default Feed;
