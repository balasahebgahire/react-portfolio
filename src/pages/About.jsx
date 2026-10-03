import PageButton from "../components/PageButton";


export default function About() {
  return (
    <>
    <AboutPage />
    </>
  );
}


function AboutPage(){
  return(
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src="./public/about-img.png" alt="About Us" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <h2 className="text-uppercase fw-bold PageHeading">About Me</h2>
            <h3 className="PageSubHeading">UI/UX Designer & Front-End Developer based in India</h3>
            <p>I am a UI/UX Designer and Front-End Developer with over 10 years of experience creating clean, responsive, and user-friendly digital experiences. I have worked across UI design, web design, and front-end development, with a strong focus on creating interfaces that are visually appealing, intuitive, and easy to use.</p>
            <p>I combine design and development to turn ideas and designs into modern, functional websites. My approach focuses on usability, visual consistency, responsiveness, performance, and attention to detail. I enjoy solving design and development challenges and creating digital experiences that work seamlessly across devices and screen sizes.</p>
            <PageButton to='/contact'>Contact Me</PageButton>
          </div>
        </div>
      </div>
    </div>
  )
}



