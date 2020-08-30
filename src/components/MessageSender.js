import React, {useState} from 'react';
import '../css/messageSender.css'
import {Avatar} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        //Some db stuff

        setInput('')
        setImageUrl('')


    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={''}/>
                <form>
                    <input
                        className='messageSender__input'
                        placeholder={`What's on your mind?`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input
                        value={imageUrl}
                        placeholder={`Image URL (Optional)`}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <button type='submit' onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
};

export default MessageSender;
