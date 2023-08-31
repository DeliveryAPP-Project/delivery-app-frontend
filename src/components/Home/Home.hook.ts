import React from 'react';

export function useHomeHook(){
  const [count, setCount] = React.useState(0);


  function handleIncrement(){
    setCount(count +1);
  }

  function handleDecrement(){
    setCount(count -1);
  }

  return {
    handleIncrement, handleDecrement, count
  };
}
