import { NavLink } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import { useState } from "react";

export default function Header() {
    const [hideMenu, setHideMenu] = useState(false)

    function ToggleMenu() {
    setHideMenu(!hideMenu);
    }

  const styleHeader = {
    background: 'linear-gradient(to right, #4E3692 0%, #855df8 100%)'
  };
  return (
    <div className="container-fluid bg-primary" style={styleHeader}>
      <div className="container">

        <div className="row pt-4 pb-2">
            <div className="col-lg-2 col-3">
                <img src="./public/logo-v1.png" alt="Logo" className="img-fluid" />
            </div>
            <div className="col-lg-10 col-9 position-relative">
                <nav className="main-menu">
                    <span className="toggle-icon" onClick={ToggleMenu}><img src="./public/toggle-icon.png" className="img-fluid" /></span>
                    {!hideMenu && <ul className="align-items-center justify-content-end list-unstyled mb-0 gap-3 font-bold-medium">
                        <li><NavLink to="/" className="nav-link">HOME</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">ABOUT US</NavLink></li>
                        <li><NavLink to="/skills" className="nav-link">SKILLS</NavLink></li>
                        <li><NavLink to="/projects" className="nav-link">PROJECTS</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link">CONTACT US</NavLink></li>
                    </ul>}
                </nav>
            </div>
        </div>

        
        <div className="row">
            <div className="col-lg-7 col-sm-7 col-7">
                <div className="d-flex align-items-start justify-content-center flex-column h-100 text-white mb-3">
                <h1 className="fs-90 fw-bold mainHeading">BALASAHEB</h1>
                <h1 className="fs-90 fw-bold">GAHIRE</h1>
                <p className="fs-40">UI/UX Designer and Developer</p>
                <HeaderButton to="/">Download Profile</HeaderButton>
                </div>
            </div>
            <div className="col-lg-5 col-sm-5 col-5 text-end">
                <img src="./public/header-img.png" alt="Header Image" className="img-fluid" />
            </div>
        </div>
        
      </div>
    </div>
  );
}
