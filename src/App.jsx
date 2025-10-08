import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./Pages/Profile/Profile";
import ManageEvents from "./Pages/ManageEvents/ManageEvents";
import Billing from "./Pages/Billings/Billing";
import CreateEvents from "./Pages/ManageEvents/CreateEvents";
import ReportsPage from "./Pages/Reports/Reports";
import CategoryPage from "./components/CategorySection/CategoryPage";
import EventDetail from "./components/EventDetail/EventDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings/my-profile" element={<Profile />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/dashboard/create-event" element={<CreateEvents />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/reports" element={<ReportsPage />} />
         <Route path="/in/online/:category" element={<CategoryPage />} />
        <Route path="/category/:category/:id" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;
