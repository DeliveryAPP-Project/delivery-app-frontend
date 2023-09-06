import { useHomeHook } from './Home.hook';
import * as styled from './Home.styles';

export function Home() {
  const { count, handleDecrement, handleIncrement } = useHomeHook();

  return (
    <styled.Container>
      <strong>Delivery app</strong>
      <styled.Content>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <strong>count: {count}</strong>
      </styled.Content>
    </styled.Container>
  );
}
