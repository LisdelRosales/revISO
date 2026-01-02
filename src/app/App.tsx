import React, { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { CompanyDashboard } from "./components/CompanyDashboard";
import { User } from "./data/mockData";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  if (currentUser.role === "admin") {
    return (
      <>
        <AdminDashboard user={currentUser} onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <CompanyDashboard user={currentUser} onLogout={handleLogout} />
      <Toaster />
    </>
  );
}
