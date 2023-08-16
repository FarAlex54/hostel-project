import React, { useContext } from 'react'
import { AppContext } from '../App'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useLocation, useNavigate, Link } from 'react-router-dom';


const PrivateRoute = () => {
  const privateContext = useContext(AppContext);
  const location = useLocation();
  return (
    (privetContext.authenticated) ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
  )
}

export default PrivateRoute