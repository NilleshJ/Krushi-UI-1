import * as Toast from '@radix-ui/react-toast';
import { useEffect } from 'react';

const ToastAlert = ({ open, type, message, onClose }: any) => {

  useEffect(() => {
    setTimeout(() => onClose(), 3000);
  }, [])

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root open={open} className={`toast-root ${type}`} duration={3000}>
        <Toast.Title className="toast-title">
          <div>{type === 'success' ? 'Success' : 'Error'}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z" />
          </svg>
        </Toast.Title>
        <Toast.Description className="toast-description">{message}</Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
};

export default ToastAlert;