import React, { useState } from 'react';

interface CommentBoxProps {
    onAddComment: (comment: { name: string; time: string; description: string }) => void;
}

const CommentBar: React.FC<CommentBoxProps> = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };
    const handleAddComment = () => {
        // Here you can handle adding the comment, e.g., send to backend or update state
        console.log('Adding comment:', newComment);
        // Clear the comment input

        const comment = {
            name: 'Anon',
            time: new Date().toLocaleString(),
            description: newComment
        }

        onAddComment(comment);
        setNewComment('');
    };

    return (<div className="post-item-comment-bar">
        <div className="post-item-comment-bar">
            <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleCommentChange}
                className="comment-input"
            />
            <button onClick={handleAddComment} className="comment-button">
                Add Comment
            </button>
        </div>
    </div>
    )
}
export default CommentBar
