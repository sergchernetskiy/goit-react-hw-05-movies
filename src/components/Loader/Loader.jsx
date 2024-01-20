import { DNA } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <DNA
      visible={true}
      height="120"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
