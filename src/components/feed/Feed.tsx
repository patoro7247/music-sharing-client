import Post from "./Post"; // Adjust the path as per your project structure
import React, {useState} from 'react';

interface FeedProps {
    posts: Post[];
  }

const Feed: React.FC<FeedProps> = ({ posts }) => {

    console.log(posts)
    return (
        <div className="feed">
            <Post
                name="Kyle Wataba"
                image="images\album1.png"
                description="Feeling like Kendrick Lamar."
                time="12:02 am"
                audioUrl="audio\DNA..mp3"
                comment={[
                    { name: 'Ryan Park', time: '11:29 pm', description: 'I LOVE THIS SONG. <3' },
                    { name: 'Bryan Han', time: '1:29 am', description: 'GOAT' },
                ]}
            />

            <Post
                name="Josh Bryan"
                image="images\album2.png"
                time="1:02 pm"
                audioUrl=""  // Assuming this post has no audio, leave it empty
                description="This artist is the gas or sum."
                comment={[
                    { name: 'John Wayne', time: '12:09 pm', description: 'Slept on artist' },
                ]}
            />
            {/* If post */}
            {/* For post in something 
                    Display post
                     */}
            {/* Else   <label className="feed">There is nothing here!!!</label>*/}
            {posts.map((post, index) => (
                <Post
                key={index+4}
                name={post.name}
                image={post.image}
                description={post.newPostText}
                comment={{}}
                time={post.time}
                audioUrl={post.newSongTitle}
                />
                
            ))}
        </div>
    );
}

export default Feed;
