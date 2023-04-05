import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/WebWrapper";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import Accounts from "./pages/accounts";
import Analytics from "./pages/analytics";
import Files from "./pages/files";
import Schedule from "./pages/schedule";
import Search from "./pages/search";
import Settings from "./pages/settings";
import AppLayout from "./layout";
import UserDashboard from "./pages/Dashboard";
import UsersPage from "./pages/users";
import HeaderDashboard from "./components/common/headerDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <HomePage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/product"
          element={
            <LayoutWrapper>
              <HeaderDashboard />
            </LayoutWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <LayoutWrapper>
              <LoginPage />
            </LayoutWrapper>
          }
        />

        {/* App Routes */}
        <Route path="/profile" element={<AppLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="files" element={<Files />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="search" element={<Search />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {/* </LayoutWrapper> */}
    </>
  );
}

export default App;
