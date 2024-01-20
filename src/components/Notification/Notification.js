import toast, { Toaster } from 'react-hot-toast';

// const params = {
//   position: 'top-right',
//   toastOptions: {
//     className: '',
//     duration: 3000,
//     style: {
//       background: '#ada790',
//       color: 'crimson',
//     },
//   },
// };

const NotifyError = () => {
  toast('Something went wrong. Try again.', {
    position: 'top-right',
    duration: 4000,
    icon: '😔',
    style: {
      borderRadius: '10px',
      background: 'crimson',
      color: '#fff',
    },
  });

  return (
    <>
      <Toaster />
    </>
  );
};

export default NotifyError;
