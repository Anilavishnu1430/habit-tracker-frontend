import { Routes , Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import HabitDetails from './pages/HabitDetails'
import HabitTracker from './components/HabitTracker'
import HabitList from './components/HabitList'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();   
  }, [location.pathname]);


  return (
    <>
    {/* <Header/> */}
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/habit' element={<HabitTracker/>}/>
        <Route path='/habitlist' element={<HabitList/>}/>
        <Route path='/habit-details' element={<HabitDetails/>}/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
