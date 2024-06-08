// src/SecuritySettings.js
import React, { useState }  from 'react';
import Post from './Post';


interface NewPostFormProps {
    onAddPost: (post: { name: string; image: string; newPostText: string; comment: any[]; time: string; newSongTitle: string }) => void;
  }

interface CreatePostProps {
    onAddPost: (post: Post) => void;
}
  

const CreatePost: React.FC<NewPostFormProps> = ({ onAddPost }) => {
    const [newPostText, setNewPostText] = useState('');
    const [newSongTitle, setNewSongTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = {
          name: 'New User', // This can be dynamic or fetched from user data
          image: 'https://via.placeholder.com/150', // Placeholder image URL
          newPostText,
          comment: [],
          time: new Date().toLocaleString(),
          newSongTitle,
        };
        onAddPost(newPost);
        setNewPostText('');
        setNewSongTitle('');
      };

  return (
    <div>
      <h2>Create Post!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select song:
          <input type="text" value={newSongTitle} onChange={(e) => setNewSongTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Enter post text:
          <input type="text" value={newPostText} onChange={(e) => setNewPostText(e.target.value)}  />
        </label>
        <br />
        <br />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default CreatePost;