import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings/my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
