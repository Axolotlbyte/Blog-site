import React from 'react';
import '../styles/comment.css'

const Comment = (props) => {
        const { name, text } = props.comment
        return(
            <div className='comment-cont'>
                <hr/>
                <h3 className='comment-text'>{name}</h3>
                <p className='comment-text'>
                    {text}
                </p>
            </div>
        )
}

export default Comment