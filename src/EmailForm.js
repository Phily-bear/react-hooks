import { useId, useRef } from "react";

export default function EmailForm() {
  const id = useId();
  const ref = useRef();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input ref={ref} id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input ref={ref} id={`${id}-text`} type="text" />
    </>
  );
}
