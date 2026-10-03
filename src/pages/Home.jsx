import { Link } from "react-router-dom";
import PageButton from "../components/PageButton";
import { useState } from "react";


const proData = [
  {
    image: "/Hotel-ACG-img.png",
    title: "Hotel AGC",
    subdetails: "Hotel Booking Website",
    arrow: "/orange-arrow.png",
    link: "https://www.hotelagcaurangabad.com/"
  },
  {
    image: "/SheCart.png",
    title: "SheCart",
    subdetails: "E-Commerce Platform",
    arrow: "/orange-arrow.png",
    link: "https://www.figma.com/design/2f8rIG5GzSsnkItb46EkZy/SheCart?node-id=1-2&t=703tMWj3ur5xTeQA-1"
  },
  {
    image: "/Mobiliya.png",
    title: "Mobiliya",
    subdetails: "Mobile and Web Application",
    arrow: "/orange-arrow.png",
    link: "https://www.figma.com/design/ruGOuOY9B5PhuwhzE49ili/Mobiliya-Technologies?node-id=0-1&t=wV6RJYzm3v6c6eqe-1"
  }
];


const reviews = [
{
id: 1,
image: "/quote.png",
text: "Balasaheb has been great to work with. His attention to detail, quality of work, and punctuality in delivery really stood out. I would definitely recommend him for his professional approach and quick project delivery.",
name: "Avadhut Gahire",
designation: "Founder | Creative Web Studio"
},
{
id: 2,
image: "/quote.png",
text: "Balasaheb has been great to work with. His attention to detail, quality of work, and punctuality in delivery really stood out. I would definitely recommend him for his professional approach and quick project delivery.",
name: "Rohit Mishra",
designation: "Founder | Creative Web Studio"
}
];

export default function Home() {
  return (
    <>
      <AboutUs />
      <RecentProjects />
      <WhatPeopleSay />
    </>
  );
}


function AboutUs(){
  return(
    <div className="container-fluid py-5">
      <div className="container text-center">
        <h2 class="text-uppercase fw-bold PageHeading">About Me</h2>
        <h3 className="PageSubHeading">UI/UX Designer & Front-End Developer based in India</h3>
        <p>I am a UI/UX Designer & Front-End Developer with over 10 years of experience creating clean,
responsive, and user-friendly digital experiences. I combine design and development to transform ideas and designs into modern, functional websites with a strong focus on usability, visual design, responsiveness, and performance.</p>

<PageButton to='/about'>Read More</PageButton>
      </div>
    </div>
  )
}


function RecentProjects(){
  const projectBgColor = { backgroundColor: '#F5F5F5' }
  return(
    <div className="container-fluid py-5" style={projectBgColor}>
      <div className="container">
        <h2 class="text-uppercase fw-bold PageHeading text-center">Recent Projects</h2>

        <div className="row">

          {proData.map((data, i) => 
          <div className="col-sm-4 mt-3" key={i}>
            <img src={data.image} alt="Hotel ACG" className="img-fluid" />
            <div className="d-flex align-items-center justify-content-between text-start mt-3">
              <div>
                <h4 className="p-0 m-0 fw-bold fs-20">{data.title}</h4>
                <p className="p-0 m-0" style={{ fontSize: '16px' }}>{data.subdetails}</p>
              </div>
              <div>
                <Link to={data.link}>
                <img src={data.arrow} alt="Project Icon" className="img-fluid" />
                </Link>
                </div>
            </div>
          </div>
          )}

          
        </div>

      </div>
    </div>
  )
}


function WhatPeopleSay(){

  return(
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-uppercase fw-bold PageHeading text-center">What People Say</h2>

        <div className="row">
          {reviews.map((review,i) => 
          <div className="col-sm-6 mt-3" key={i}>
            <div className="shadow-sm rounded p-4 bg-white border">
              <div className="mb-4"><img src={review.image} alt="Person" className="img-fluid" /></div>
              <p>{review.text}</p>
              <h6 className="fw-bold p-0 m-0">{review.name}</h6>  
              <span>{review.designation}</span>
            </div>
          </div>
          )}
        </div>

      </div>
    </div>
  )
}