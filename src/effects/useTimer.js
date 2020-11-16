import { useEffect } from 'react';

const useTimer = (callback, time) => {
  useEffect(() => {
    callback();

    const timer = setInterval(
      callback,
      time,
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
};

export default useTimer;
