import { Button } from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header";

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
        <Header></Header>
        <Button
          className="btn-1"
          variant="contained"
          sx={{ backgroundColor: "#f16b51", fontWeight: 600 }}
        >
          Explore Now
        </Button>
        <LandingPage></LandingPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
