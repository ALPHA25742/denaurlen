import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import SignIn from "./pages/Signin";
import Categories from "./pages/Categories";
import FriendSuggestions from "./pages/FriendsSuggestions";
// import { useEffect, useState } from "react";

function App() {
  // const [verified, setVerified] = useState<any>(false);

  // useEffect(() => {
  // const jsonValue = localStorage.getItem("denaurlen-token");

  // const verifyUser = async (arg: string) => {
  //   try {
  //     const response = await fetch(
  //       import.meta.env.VITE_backend_url + "/verify",
  //       {
  //         headers: { Authorization: `Bearer ${arg}` },
  //       }
  //     );
  //     await response.json();
  //   } catch (error) {
  //     console.error(error);
  //     alert("something went wrong");
  //   }
  // };

  // if (jsonValue != null && jsonValue != "undefined") {
  //   const isVerified = verifyUser(JSON.parse(jsonValue));
  //   setVerified(isVerified);
  // }
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
          // element={verified ? <Navigate to="/friends" /> : <Welcome />}
        />
        <Route
          path="/signup"
          element={<Signup />}
          // element={verified ? <Navigate to="/friends" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
          // element={verified ? <Navigate to="/friends" /> : <SignIn />}
        />
        <Route path="/interests" element={<Categories />} />
        <Route path="/friends" element={<FriendSuggestions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
