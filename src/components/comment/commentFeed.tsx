import React, { useState } from 'react';
import Comment from "./commentPost"
import CommentBar from "./commentBar"

interface CommentFeedProps {
    initialComments: { name: string; time: string; description: string }[];
  }

  const CommentFeed: React.FC<CommentFeedProps> = ({ initialComments }) => {
    const [comments, setComments] = useState(initialComments);

    const addComment = (comment: { name: string; time: string; description: string }) => {
        setComments([...comments, comment]);
      };

    return (
        <div className="commentFeed">
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <Comment
                        key={index} // Ensure each component has a unique key when iterating in React
                        name={comment.name}
                        time={comment.time}
                        description={comment.description}
                    />
                ))
            ) : (
                <label className="feed">There is nothing here!!!</label>
            )}
            
            <CommentBar onAddComment={addComment} />

        </div>
    );
}

export default CommentFeed