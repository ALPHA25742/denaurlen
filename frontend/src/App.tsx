import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Signup } from "./pages/Signup";
import { SignIn } from "./pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          // element={user ? <Dashboard /> : <Navigate to="/signup" />}
          element={<Welcome />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/details"
          // element={
          //   !user ? (
          //     <Navigate to="/signup" />
          //   ) : user.signedUp || user.startup ? (
          //     <Navigate to="/" />
          //   ) : (
          //     <Details />
          //   )
          // }
        />
        {/* <Route path="*" element={user ? <Navigate to="/" /> : <SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
