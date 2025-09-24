import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Dashboard from './pages/DAshboard'
import Header from './Components/Header'
import DynamicHomepage from './pages/DynamicHomepage'
import AdminDashboard from './pages/AdminDashboard'
import MaintenanceDashboard from './pages/MaintenanceDashboard'
import LoginPage from './pages/Loginpage'
import StaffDashboard from './pages/StaffDashboard'



import './App.css'

function App() {

  return(
   <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<DynamicHomepage/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        
      </Routes>

    </BrowserRouter>
   
   </>
  )
  
}

export default App
