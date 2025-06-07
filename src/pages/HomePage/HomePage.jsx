import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div>
      <h3>Home Page</h3>

      <Link to="restaurants">Go to restaurants Page</Link>
    </div>
  );
};
