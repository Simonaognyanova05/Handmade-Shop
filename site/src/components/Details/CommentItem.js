export default function CommentItem({ comment }) {
    return (
        <div className="testimonial-item">
            <p>"{comment.comment}"</p>
            <h4>- {comment.names}</h4>
        </div>
    );
}