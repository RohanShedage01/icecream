import "./Navbar.css";
import { Link } from "react-router";
import { House , FileUser , HeartHandshake , Phone  } from "lucide-react";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-items"><House className="nav-icon"/>Home</Link>
      <Link to="/about" className="nav-items"><FileUser className="nav-icon"/>About</Link>
      <Link to="/services" className="nav-items"><HeartHandshake className="nav-icon"/>Our Services</Link>
      <Link to="/contact" className="nav-items"><Phone className="nav-icon"/>Contact</Link>
    </div>
  )
}

export default Navbar
