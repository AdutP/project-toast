import React from "react";


const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleKeydown = (event) => {
        if (event.code === key) {
          callback(event);
        }
      };
      
      document.addEventListener('keydown', handleKeydown);

      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
  }, [key, callback]);
};

export default useKeydown;