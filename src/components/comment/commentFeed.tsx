import Comment from "./commentPost"
import CommentBar from "./commentBar"

function CommentFeed({ comments }: { comments: { name: string; time: string; description: string }[] }) {

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
            <CommentBar text=""></CommentBar>

        </div>
    );
}

export default CommentFeed