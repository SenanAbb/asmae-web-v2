import { AiFillStar } from 'react-icons/ai';
import './ReviewCard.css';

export const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">
      <div className="review-card-header">
        <div className="review-card-image">
          <img src={review.image} alt={review.name} />
          <img
            src="/icons/google-icon.webp"
            alt="Google"
            className="google-icon"
          />
        </div>
        <div className="review-card-name">
          <h3>{review.name}</h3>
          <div className="stars">
            {review.rating > 0 &&
              Array.from({ length: review.rating }, (_, index) => (
                <AiFillStar key={index} />
              ))}
          </div>
        </div>
      </div>
      <p>{review.description}</p>
    </article>
  );
};
