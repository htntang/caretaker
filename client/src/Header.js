import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
      <a href="/" className="logo">The Caretaker App</a>
    
    <nav>
      <a href="/login">Login | </a>
      <a href="/register">Register</a>
    </nav>
    </header>
    
    );
}