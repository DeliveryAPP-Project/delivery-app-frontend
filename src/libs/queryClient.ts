import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 35, // 35 minutes
			refetchInterval: 1000 * 60 * 45, // 45 minutes
		},
	},
});