import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';
import useKeydown from '../../hooks/use-keydown';


function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, [setToasts])

  useKeydown('Escape', handleEscape);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
