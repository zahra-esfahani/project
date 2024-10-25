import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Auth from "./Pages/Auth";
import LogInPage from "./components/LogInPage";
import SignInPage from "./components/SignInPage";
import AdminPage from "./Pages/AdminPage";
import ModalProvider from "./context/ModalProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      
        <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/Login" element={<LogInPage />} />
              <Route path="/Sign-in" element={<SignInPage />} />
              <Route path="/admin-page" element={<AdminPage />} />
            </Routes>
          </BrowserRouter>
          </ModalProvider>
        </QueryClientProvider>
      
    </>
  );
}

export default App;
