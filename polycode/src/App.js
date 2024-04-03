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


import './App.css';


function App() {
  return (
   <Router>
   <Header/>
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/learning" element={<Learning />} />
    <Route path="/course/:id" element={<SingleCourse />} />
    <Route path="/allcourses" element={<SingleCourse />} />
    <Route path="/coursepage/:id" element={<CoursePage />} />
        
      
   </Routes>
   <Footer />
   </Router>
  );
}

export default App;
