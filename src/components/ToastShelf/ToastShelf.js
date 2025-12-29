import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
      const handleEscape = (event) => {
        if (event.code === 'Escape') {
          setToasts([]);
        }
      }

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, []);

  return (
    <ol className={styles.wrapper}>
      {
        toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} variant={toast.variant} message={toast.message}  />
          </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
