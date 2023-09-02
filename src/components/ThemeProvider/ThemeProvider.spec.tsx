import { render } from '../../utils/test-utils';

import ThemeProvider from '.';

describe('ThemeProvider Component', () => {
  it('should render the theme provider component', () => {
    // Arrange

    // Act
    const rendered = render(
      <ThemeProvider>
        <div>children</div>
      </ThemeProvider>
    );

    // Assert
    expect(rendered.getByText(/^children$/i));
  });
});
