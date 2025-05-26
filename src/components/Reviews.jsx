export const Reviews = ({ reviews }) => {
  return (
    <div>
        <h3>Reviews</h3>

        <ul>
          {reviews.map(({ id, text }) => (
            <li key={id} className="review-item">
              {text}
            </li>
          ))}
        </ul>
      </div>
  );
};