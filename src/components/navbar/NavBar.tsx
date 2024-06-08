import React, { useState } from 'react';
import Feed from '../feed/Feed';
import Settings from '../settings/Settings';
import CreatePost from '../feed/CreatePost'
import Post from '../feed/Post'

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('home');

  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };
  console.log("navbar posts"+posts)
  const renderContent = () => {
    switch (selectedCategory) {
      case 'home':
        return <Feed posts={posts}/>;
      case 'settings':
        return <Settings />;
    //   case 'mymusic':
    //     return <MyMusic />;

      case 'createpost':
        return <CreatePost onAddPost={addPost} />


      default:
        return <Feed posts={posts}/>;
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-sidebar">
        <button onClick={() => setSelectedCategory('home')}>Home</button>
        <button onClick={() => setSelectedCategory('settings')}>Settings</button>
        <button onClick={() => setSelectedCategory('createpost')}>Create New Post</button>
      </div>
      <div className="navbar-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NavBar;
