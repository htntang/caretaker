import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';
import Navigation from './Pages/navbar.js';

function App() {
  return (
    <>
    <Navigation />
    <main>
    <Header />
    <Outlet />
    <Footer />
    </main>
    </>
  );
}

export default App;
