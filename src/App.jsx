import { THEME_ID, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TalentPage from "./pages/talentTable";
import { useCustomHook } from "./hooks/customHook";
import { createContext } from "react";

export const userContext = createContext();
function App() {
  const { user, setUser } = useCustomHook();

  const materialTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: "white",
            color: "black",
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      <userContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TalentPage />}></Route>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </ThemeProvider>
  );
}

export default App;
