import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import SignIn from "./pages/Signin";
import Categories from "./pages/Categories";
import FriendSuggestions from "./pages/FriendsSuggestions";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const denaurlenTheme = createTheme({
  palette: {
    primary: {
      main: "#4B0082",
    },
    background: {
      paper: "#F7F2FF",
      default: "#FFFFFF",
    },
    text: {
      primary: "#343434",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 600,
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  const [verified, setVerified] = useState<any>(false);

  useEffect(() => {
    const jsonValue = localStorage.getItem("denaurlen-token");

    const verifyUser = async (arg: string) => {
      try {
        const response = await fetch(
          import.meta.env.VITE_backend_url + "/verify",
          {
            headers: { Authorization: `Bearer ${arg}` },
          }
        );
        await response.json();
      } catch (error) {
        console.error(error);
        alert("something went wrong");
      }
    };

    if (jsonValue != null && jsonValue != "undefined") {
      const isVerified = verifyUser(JSON.parse(jsonValue));
      setVerified(isVerified);
    }
  }, []);

  return (
    <ThemeProvider theme={denaurlenTheme}>
      <Routes>
        <Route
          path="/"
          element={verified ? <Navigate to="/friends" /> : <Welcome />}
        />
        <Route
          path="/signup"
          element={verified ? <Navigate to="/friends" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={verified ? <Navigate to="/friends" /> : <SignIn />}
        />
        <Route path="/interests" element={<Categories />} />
        <Route path="/friends" element={<FriendSuggestions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
