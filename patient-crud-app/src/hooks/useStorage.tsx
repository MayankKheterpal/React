import { useState, useEffect } from "react";

const useStorage = (key: string, newValue: string | any) => {
  const [value, setValue] = useState(() => {
    try {
      const existingValue = window.localStorage.getItem(key);
      return existingValue ? JSON.parse(existingValue) : newValue;
    } catch (error) {
      return newValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
