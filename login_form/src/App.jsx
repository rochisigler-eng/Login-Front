import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import R01LoginForm from './templates/R01LoginForm'
import Login from './organisms/login/Login'
import Register from './organisms/register/Register'
import Dashboard from './organisms/dashboard/Dashboard'


function App() {
  const isAuthenticated = !!localStorage.getItem("token")

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <R01LoginForm>
                <Login />
              </R01LoginForm>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/register"
          element={
            <R01LoginForm>
              <Register />
            </R01LoginForm>
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <R01LoginForm>
                <Dashboard />
              </R01LoginForm>
            )
              : (
                <Navigate to="/login" />
              )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
