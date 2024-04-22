import React, { useState } from 'react';
import SamplePost from '../components/SamplePost'; 

function Home() {
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const newPost = {
      author: "John Doe",
      avatar: "/profilePhoto.jpg",
      date: currentDate,
      content: newPostContent
    };

    setPosts([...posts, newPost]);
    setNewPostContent("");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Welcome</h1>
   
      <div style={{ backgroundColor: '#f0f2f5', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', width: '100%', maxWidth: '600px' }}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={handlePostChange}
          style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <button onClick={handlePostSubmit} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.25rem', background: '#4267B2', color: 'white', border: 'none', cursor: 'pointer' }}>Post</button>
      </div>
    
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {posts.map((post, index) => (
          <SamplePost 
            key={index}
            author={post.author} 
            avatar={post.avatar} 
            date={post.date} 
            content={post.content} 
            style={{ marginBottom: '1rem' }} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
