import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
