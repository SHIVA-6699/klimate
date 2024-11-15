import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import { ThemeProvider } from "./components/context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import {QueryClient , QueryClientProvider}from "@tanstack/react-query"
import { CityPage } from "./pages/city-page";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider >
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard/>} />
            <Route path="/city/:cityName" element={<CityPage/>} />
            
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
