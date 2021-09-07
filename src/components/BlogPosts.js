import React from 'react';
import PostPrev from './PostPrev';
import '../styles/blog-post.css'
import MidBlock from './MidBlock';

const BlogPost = (props) => {

    const { posts } = props;


    const colorPalette = () => {
        const arrOfColors = ['#23b5d3','#35616D', '#174B8C', '#428BE6','#7A96E1', '#EE6C4D', '#F38D68', '#662C91', '#DC965A']
        return arrOfColors[Math.floor(Math.random() * arrOfColors.length)]
    }

    return(
        <div >
            <MidBlock/>
            <div className='posts-cont'>
                {posts.map( post => { return <PostPrev postDetail={post} color={colorPalette()} />})}
            </div>
        </div>
    )
}

export default BlogPost