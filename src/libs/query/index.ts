import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 35, // 35 minutes
      refetchInterval: 1000 * 60 * 45, // 45 minutes
    },
  },
});

export { queryClient, QueryClientProvider };
