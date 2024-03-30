import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Signup } from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          // element={user ? <Dashboard /> : <Navigate to="/signup" />}
          element={<Welcome />}
        />
        <Route path="/signup" element={<Signup />} />
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
