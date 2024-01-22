import toast from 'react-hot-toast';

import { Container } from 'components/Container/Container';
import { useCast } from 'hooks/useCast';
import ActorsList from 'components/ActorsList/ActorsList';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  console.log(params);
  const { actors, loading, error } = useCast();

  return (
    <main>
      <section>
        <Container>
          {actors.length > 0 && <ActorsList actors={actors} />}
          {error && toast.error('Something went wrong. 😔 Try again.')}
          {loading && <Loader />}
        </Container>
      </section>
    </main>
  );
};

export default Cast;
