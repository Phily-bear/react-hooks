import React, { useEffect, useState } from 'react';

export default function List({ getItems }) {
  //总结：当传入的getItems发生变化时，先渲染（就是执行除了useEffect之外的代码），然后执行useEffect中的回调，然后这个回调内部又进行setState，List组件重新渲染，渲染完之后发现useEffect中的依赖项没变，就没有执行useEffect
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log('in useEffect', items);
    setItems(getItems(5));
  }, [getItems]); //当app.js重新渲染是，每次传入的getItems函数都是不一样的，所以都好触发useEffect
  console.log('out of useEffect', items);
  return items.map((item) => <div key={item}>{item}</div>);
}
