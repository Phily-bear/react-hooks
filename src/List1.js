import { useDeferredValue, useEffect, useMemo } from 'react';

export function List1({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input:${input}\nDeferred:${deferredInput}`);
  }, [input, deferredInput]);
  return list;
}
