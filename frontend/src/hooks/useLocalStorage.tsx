import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: string) {
  const prefixedKey = "denaurlen" + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null && jsonValue != "undefined")
      return JSON.parse(jsonValue);
    else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
