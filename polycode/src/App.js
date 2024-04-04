import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';



import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile/Profile';
import Learning from './pages/learning/Learning';
import SingleCourse from './components/single-course/SingleCourse';
import CoursePage from './components/coursepage/CoursePage';
import AllCourses from './pages/allcourses/AllCourses';
import DailyTask from './pages/dailytask/DailyTask';
import WeeklyCase from './pages/weeklycase/WeeklyCase';


import './App.css';
import MainPage from './pages/mainpage/MainPage';


function App() {
  return (
   <Router>
   <Header/>
   <Routes>
    <Route path="/" element={<MainPage />} /> 
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/learning" element={<Learning />} />
    <Route path="/course/:id" element={<SingleCourse />} />
    <Route path="/allcourses" element={<AllCourses />} />
    <Route path="/coursepage/:id" element={<CoursePage />} />
    <Route path="/dailytask" element={<DailyTask />} />
    <Route path="/weeklycase" element={<WeeklyCase />} />
        
      
   </Routes>
   <Footer />
   </Router>
  );
}

export default App;
