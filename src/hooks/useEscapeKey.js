import React from "react";
import { ToastContext } from "../components/ToastProvider/ToastProvider";

const useEscapeKey = () => {
  const { setToasts } = React.useContext(ToastContext);
  const handleEscape = (event) => {
        if (event.code === 'Escape') {
          setToasts([]);
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    };

export default useEscapeKey;