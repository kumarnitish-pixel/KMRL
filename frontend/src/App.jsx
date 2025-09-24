import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Dashboard from './pages/DAshboard'
import Header from './Components/Header'
import DynamicHomepage from './pages/DynamicHomepage'
import AdminDashboard from './pages/AdminDashboard'
import MaintenanceDashboard from './pages/MaintenanceDashboard'
import LoginPage from './pages/Loginpage'
import StaffDashboard from './pages/StaffDashboard'
import EngineeringDashboard from '../../EngineeringDashboard'


import './App.css'

function App() {

  return(
   <>
   <EngineeringDashboard/>
   {/* <LoginPage/> */}
   </>
  )
  
}

export default App
