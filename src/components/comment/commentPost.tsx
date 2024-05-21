
interface CommentItemProps {
    name: string;
    time: string
    description: string;
}

const Comment: React.FC<CommentItemProps> = ({ name, time, description }) => {
    return (
        <div className="post-item">
            <div className="post-item-header">
                <h2 className="post-item-name">{name}
                    <span className="post-item-time">{time}</span></h2>
            </div>
            <p className="post-item-desc">{description}</p>
        </div>
    );
};

export default Comment