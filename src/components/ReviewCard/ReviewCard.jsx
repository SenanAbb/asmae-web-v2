import './ReviewCard.css'

export const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">
      <img src={review.image} alt={review.name} />
      <h3>{review.name}</h3>
      <p>{review.text}</p>
    </article>
  );
};
