import React from 'react';

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([])

  const handleCreateToast = (variant, message) => {
    let uuid = self.crypto.randomUUID();
    const newToast = {
      "id": uuid,
      "variant": variant, 
      "message": message
    };
    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  const handleDismissToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(newToasts);
  };

  const value = {
    VARIANT_OPTIONS,
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    setToasts,
    handleCreateToast,
    handleDismissToast,
  };

  return (
    <ToastContext.Provider value={value}>
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider;
