import React from "react";
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import AppSidebar from "./components/AppSidebar";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Purchased from "./pages/dashboard/Purchased";
import Published from "./pages/dashboard/Published";
import { selectTheme } from './features/themeSlice';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <div className={`flex h-screen font-light ${theme === 'dark' ? 'bg-black text-neutral-200' : 'bg-white text-neutral-900'}`}>
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard/purchased" element={<Purchased />} />
          <Route path="/dashboard/published" element={<Published />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
