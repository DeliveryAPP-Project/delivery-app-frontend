import { act as hookAct, renderHook } from '@testing-library/react-hooks';

import { render } from '../../utils/test-utils';

import { Home } from './Home';
import { useHomeHook } from './Home.hook';

import 'jest-styled-components';

describe('Home Component', () => {
  describe('Home Presentation', () => {
    it('should render the home component', () => {
      // Arrange

      // Act
      const rendered = render(<Home />);

      // Assert
      expect(rendered.getByText(/^Delivery app$/i));
    });
  });

  describe('Home Hook', () => {
    it('should return the count equal 0', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useHomeHook());

      // Assert
      expect(result.current.count).toBe(0);
    });

    it('should increment value in the count when uses ', () => {
      // Arrange
      const { result } = renderHook(() => useHomeHook());

      // Act
      hookAct(() => {
        result.current.handleIncrement();
      });

      // Assert
      expect(result.current.count).toBe(1);
    });
  });
});
