import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import ExploreTourPage from "./pages/exploreTourPage/ExploreTourPage";
import AddTour from "./pages/addTour/AddTour";
import MyTours from "./pages/myTours/MyTours";
import TourDetail from "./pages/tourDetail/TourDetail";
import Tours from "./pages/allTours/Tours";

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
