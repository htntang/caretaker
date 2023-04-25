import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';
import Navigation from './Pages/navbar.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import LoginPage from './Pages/LoginPage.js';
import RegistrationPage from './Pages/RegistrationPage.js';
import IndexPage from './Pages/IndexPage.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import MissionStatement from './Pages/Mission.js';
import Resources from './Pages/Resources.js';

function App() {
  return (
    <>
    <Navigation />
    <div className="container"></div>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element= { <IndexPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegistrationPage />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/mission" element={ <MissionStatement /> } />
        <Route path="/resources" element={ <Resources /> } />
    </Route>
    </Routes>
    </>
  );
}

export default App;
