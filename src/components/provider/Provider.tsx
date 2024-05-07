import { queryClient } from "@/config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "@/pages";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => (
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <Toaster />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

export { Provider };
