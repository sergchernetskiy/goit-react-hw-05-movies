import { Container } from 'components/Container/Container';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  return (
    <main>
      <section>
        <Container>
          <TrendingMovies />
        </Container>
      </section>
    </main>
  );
};

export default Home;
