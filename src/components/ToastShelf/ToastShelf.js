import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  useEscapeKey();

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
