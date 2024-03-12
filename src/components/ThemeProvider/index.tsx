import React from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import { theme } from '../../styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
	const { children } = props;

	return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
}