import toast from 'react-hot-toast';

import { Container } from 'components/Container/Container';
import { useReviews } from 'hooks/useReviews';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { reviews, loading, error } = useReviews();

  return (
    <main>
      <section>
        <Container>
          {reviews && reviews.length > 0 && (
            <ReviewsList ReviewsInfo={reviews} />
          )}
          {reviews && reviews.length === 0 && (
            <div>We don`t have any reviews for this movie.</div>
          )}
          {error && toast.error('Something went wrong. 😔 Try again.')}
          {loading && <Loader />}
        </Container>
      </section>
    </main>
  );
};

export default Reviews;
