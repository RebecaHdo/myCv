
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CV from "./pages/Cv";

const theme = createTheme({
  palette: {
    primary: {
      main: "#951dc4"
    },
    background: {
      default: "#f6f4f8"
    }
  },
  typography: {
    h3: {
      color: "#b919d2"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CV />
    </ThemeProvider>
  );
}

export default App;
