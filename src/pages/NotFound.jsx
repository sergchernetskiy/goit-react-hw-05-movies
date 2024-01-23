import { Container } from 'components/Container/Container';
import { GoBackLink } from 'components/GoBackLink/GoBackLink.styled';
import { ImageMovie } from 'components/MovieCard/MovieCard.styled';
import image from 'images/not-found.jpg';

const NotFound = () => {
  return (
    <main>
      <section>
        <Container>
          <GoBackLink to="/">
            <p>To home page</p>
          </GoBackLink>

          <ImageMovie src={image} alt="404 Not found" />
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
