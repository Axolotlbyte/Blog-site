import React, { useState, useEffect } from 'react'
import Comment from './components/Comment'
import Header from './components/Header'
import axios from 'axios'
import { DateTime } from 'luxon'
import './styles/post.css'
import Footer from './components/footer'

const Post = (props) => {

    const [post, setPost] = useState({})
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [senderName, setName] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    const url = 'https://nameless-caverns-00340.herokuapp.com/api/posts/' +  props.match.params.id
    
    useEffect(() => {
        axios.get(url)
          .then(async (res) => {
              await setPost({ ...res.data })
              console.log(res.data)
          })
          .then(() => {
                setIsLoaded(true)
                setDate(post.date.substring(0,10))
          })
          .catch(err => {
              setIsLoaded(true);
              setError(err)
              console.log(error)
          })
    }, [isLoaded])


    const postComment = () => {
        const commentURL = url + '/comments'

        axios({
            method: "post",
            url: commentURL,
            data: {
                "name": senderName,
                "text": text
            },
            headers: { "Content-Type": "application/json" }
        })
        .then(async (res) => {
            console.log(res.data)
            await setPost(res.data)
        })
        .then(() => {
            setName('')
            setText('')
        })
        .catch(err => {
            console.log(err)
        })

    }

    if(isLoaded){
        return (
            <div>
                <Header/>
                <div  className='overflow-div'>
                    <div className='post-cont'>
                        <h1 className='post-text'>{post.title}</h1>
                        <div className='user-cont'>
                            <div className="circle"></div>
                            <div className="username">
                                <span>{post.user.username}</span>
                            </div>
                        </div>
                        <span className='date'>{date}</span>
                        <hr/>
                        <p className='post-text'>
                            {post.content}
                        </p>
                        <hr className='post-hr' />
                        <div className='form-div'>
                            <form>
                                <input type='text' 
                                    name='userName' 
                                    onChange={e => setName(e.target.value)}
                                    placeholder='Name'
                                    value={senderName}
                                    id='name-input'
                                />
                                <textarea type='text' 
                                    name='text' 
                                    onChange={e => setText(e.target.value)}
                                    placeholder='Comment Text ...'
                                    value={text}
                                    id='text-input'
                                />

                                <input id='submit-btn' type='button' value='Submit' onClick={postComment} />
                            </form >
                        </div>
                        <div>
                            {
                                post.comment.length ? post.comment.map( comment => {return <Comment comment={comment} />}) : null
                            }
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }else{
        return (
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        )
    }
}

export default Post