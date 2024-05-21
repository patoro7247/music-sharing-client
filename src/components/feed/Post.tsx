import CommentFeed from "../comment/commentFeed";
import { useState } from "react";
import { useRef } from "react";

interface PostItemProps {
    name: string;
    image: string;
    description: string;
    comment: any;
    time: string
    audioUrl: string;
}


const Post: React.FC<PostItemProps> = ({ name, image, time, description, comment, audioUrl }) => {
    const [followed, setFollowed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioUrl));

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleFollowToggle = () => {
        setFollowed(!followed);
    };

    return (
        <div className="post-item">
            <div className="post-item-header">
                <h2 className="post-item-name">{name}
                    <span className="post-item-time">{time}</span></h2>
                <button
                    className={`follow-button ${followed ? 'followed' : ''}`}
                    onClick={handleFollowToggle}
                >
                    {followed ? 'Followed' : 'Follow'}
                </button>
            </div>
            <img className="post-item-image" src={image} alt={name} />
            <div className="audio-controls">
                <button className="play-pause-button" onClick={togglePlayPause}>
                    {isPlaying ? '⏸️' : '▶️'}
                </button>
            </div>
            <p className="post-item-desc">{description}</p>
            <CommentFeed comments={comment}></CommentFeed>
        </div>



    );
};

export default Post