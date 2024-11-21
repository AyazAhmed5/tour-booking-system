import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import ExploreTourPage from "./pages/ExploreTourPage/ExploreTourPage";
import AddTour from "./pages/AddTour/AddTour";
import MyTours from "./pages/MyTours/MyTours";
import TourDetail from "./pages/TourDetail/TourDetail";
import Tours from "./pages/Tours/Tours";

// Create a theme with Poppins as the font
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-tour" element={<ExploreTourPage />} />
        <Route path="/add-tour" element={<AddTour />} />
        <Route path="/my-tours" element={<MyTours />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour-detail/:id" element={<TourDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
