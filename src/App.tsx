import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./themes";
import "./App.css";
import Router from "./routes/routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
