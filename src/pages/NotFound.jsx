import { Container } from 'components/Container/Container';
import { ImageMovie } from 'components/MovieCard/MovieCard.styled';
import image from 'images/not-found.jpg';

const NotFound = () => {
  return (
    <main>
      <section>
        <Container>
          <ImageMovie src={image} alt="404 Not found" />
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
