import toast from 'react-hot-toast';

import { Container } from 'components/Container/Container';
import { useCast } from 'hooks/useCast';
import ActorsList from 'components/ActorsList/ActorsList';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { actors, loading, error } = useCast();

  return (
    <main>
      <section>
        <Container>
          {actors && actors.length > 0 && <ActorsList actors={actors} />}
          {actors && actors.length === 0 && (
            <div>We don`t have any casts for this movie.</div>
          )}
          {error && toast.error('Something went wrong. 😔 Try again.')}
          {loading && <Loader />}
        </Container>
      </section>
    </main>
  );
};

export default Cast;
