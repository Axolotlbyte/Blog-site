import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/post-prev.css'

const PostPrev = (props) => {

    const {title, content} = props.postDetail;
    const id = props.postDetail._id;
    console.log(props.color)

    let contString = content.slice()
    if(contString.length > 100){
        contString = contString.substring(0, 100)
    }

    contString = contString + '...'

    console.log(title)
    return (
        <div className="prev-cont">
            <div className='img-cont' style={{'background-color': props.color}} ></div>
            <div className="prev-content">
                <h3 className='left'>{title}</h3>
                <hr className='post-hr'/>
                <p className='left-font'>{contString}</p>
                <button className="view-btn">View Post</button>
            </div>
            <Link
                to={{
                    pathname: `${id}`,
                    state: {id}
                }}
            >
            <span className='prev-link'></span>
            </Link>
        </div>
    )
}

export default PostPrev 