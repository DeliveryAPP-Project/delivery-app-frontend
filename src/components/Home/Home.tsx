import { useHomeHook } from './Home.hook';

export function Home() {
  const { count, handleDecrement, handleIncrement } = useHomeHook();

  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <strong>count: {count}</strong>
    </div>
  );
}
