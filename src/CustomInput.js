import React, { useImperativeHandle } from 'react';

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert('hi') };
    },
    []
  );
  return (
    <input
      {...props}
      style={{
        border: 'none',
        background: 'lightpink',
        padding: '.25rem',
        borderBottom: '.1em solid black',
        borderTopRightRadius: '.25em',
        borderTopLeftRadius: '.25em',
        ...style,
      }}
    />
  );
}

export default React.forwardRef(CustomInput);
