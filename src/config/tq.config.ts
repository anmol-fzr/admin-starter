import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     gcTime: 5 * 60 * 1000,
  //   },
  // },
});

export { queryClient };
