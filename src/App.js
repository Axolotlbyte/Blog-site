import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BlogPost from './components/BlogPosts'
import axios from 'axios'
import Footer from './components/footer';
import './styles/app.css'
import './styles/spinner.css'

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('https://nameless-caverns-00340.herokuapp.com/api/posts')
        .then( async (res) => {
            await setPosts([...res.data])
              setIsLoaded(true)
        })
        .then(() => {
          setIsLoaded(true)
        })
        .catch(err => {
            setError(err)
            console.log(error)
        })
  }, [isLoaded])

  if(isLoaded){
    return (
      <div>
        <Header/>
        <div className="test-body">
            <BlogPost posts={posts} />
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

export default App;