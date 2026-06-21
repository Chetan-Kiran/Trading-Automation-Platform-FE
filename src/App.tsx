import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Automation from './pages/Automation';
import Trading from './pages/Trading';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';

import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/automation"
          element={
            <ProtectedRoute>
              <Automation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trading"
          element={
            <ProtectedRoute>
              <Trading />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
