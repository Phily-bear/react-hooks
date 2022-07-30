import { useState, useEffect, useDebugValue } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // useDebugValue如果第二个参数是个函数，那么表明在开发者工具未打开时不执行该函数，只有开发者工具打开才执行
  useDebugValue(value, (v) => test(v));
  useDebugValue([key, value]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

function test(value) {
  console.log("测试", value);
}
