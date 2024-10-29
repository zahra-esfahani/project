import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LogInPage from "./components/LogInPage";
import SignInPage from "./components/SignInPage";
import AdminPage from "./Pages/AdminPage";
import ModalProvider from "./context/ModalProvider";
import { getCookie } from "./configs/cookie";
import AuthProvider from "./provider/AuthProvider";
import NotFound from "./Pages/404";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });
  const token = getCookie();
  console.log(token);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/admin-page"
                element={
                  <AuthProvider>
                    <AdminPage />
                  </AuthProvider>
                }
              />
              <Route
                path="/Login"
                element={token ? <Navigate to="/admin-page" /> : <LogInPage />}
              />
              <Route path="/Sign-in" element={token ? <Navigate to="/admin-page" /> : <SignInPage />} />
              <Route path="*" element={<NotFound/>} />

            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
