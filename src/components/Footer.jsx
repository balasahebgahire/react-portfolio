import { NavLink } from "react-router-dom";
import PageButton from "./PageButton";


export default function Footer() {
  return (
    <>
    <DownloadResume />
    <FooterLinks />
    <CopyRight />
    </>
  );
}


function DownloadResume(){
    const styleFooterBg = {
    background: 'linear-gradient(to right, #4E3692 0%, #855df8 100%)'
  };

    return(
        <div className="container-fluid py-5" style={styleFooterBg}>
      <div className="container">
        <div className="row">
            <div className="col-sm-6 col-7">
                <h4 className="fs-32 fw-bold text-white">Download My Resume</h4>
            </div>
            <div className="col-sm-6 col-5 text-end">
                <PageButton to='/'>Download</PageButton>
            </div>
        </div>
      </div>
    </div>
    )
}


function FooterLinks(){
    const style = { wordWrap: 'break-word' }
    return(
        <div className="container-fluid bg-dark py-5">
      <div className="container">
        
        <div className="row">
            <div className="col-sm-4 col-4">
                <h6 className="fw-bold text-white text-uppercase">Quick Links</h6>
                <ul className="list-unstyled">
                    <li><NavLink to="/" className="text-white text-decoration-none">Home</NavLink></li>
                    <li><NavLink to="/about" className="text-white text-decoration-none">About</NavLink></li>
                    <li><NavLink to="/skills" className="text-white text-decoration-none">Skills</NavLink></li>
                    <li><NavLink to="/projects" className="text-white text-decoration-none">Projects</NavLink></li>
                    <li><NavLink to="/contact" className="text-white text-decoration-none">Contact Us</NavLink></li>
                </ul>
            </div>

            <div className="col-sm-4 col-4">
                <h6 className="fw-bold text-white text-uppercase">Expertise</h6>
                <ul className="list-unstyled text-white">
                    <li>UI/UX Design</li>
                    <li>Front-End Development</li>
                    <li>React.js</li>
                    <li>Responsive Web Design</li>
                </ul>
            </div>

            <div className="col-sm-4 col-4">
                <h6 className="fw-bold text-white text-uppercase">Connect With Me</h6>
                <ul className="list-unstyled text-white">
                    <li style={style}><span><img src="./public/email-icon.png" alt="Email" /></span> balasahebgahire7@gmail.com</li>
                    <li><span><img src="./public/call-icon.png" alt="Phone" /></span> +91 9604078570</li>
                </ul>

                <ul className="list-unstyled d-flex align-items-center gap-2 mt-3">
                    <li><img src="./public/facebook-icon.png" alt="Facebook" /></li>
                    <li><img src="./public/instagram-icon.png" alt="instsgram" /></li>
                    <li><img src="./public/linkedin-icon.png" alt="LinkedIn" /></li>
                </ul>
            </div>
        </div>
        
      </div>
    </div>
    )
}



function CopyRight(){
    return(
        <div className="container-fluid bgBlack py-3">
            <div className="container">
                <p className="text-white text-center mb-0">Designed and maintained by Balasaheb Gahire</p>
            </div>
        </div>
    )
}