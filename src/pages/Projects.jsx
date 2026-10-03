import { Link } from "react-router-dom";

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
  },
  {
    image: "/Mobiliya.png",
    title: "Mobiliya",
    subdetails: "Mobile and Web Application",
    arrow: "/orange-arrow.png",
    link: "https://www.figma.com/design/ruGOuOY9B5PhuwhzE49ili/Mobiliya-Technologies?node-id=0-1&t=wV6RJYzm3v6c6eqe-1"
  },
  {
    image: "/SheCart.png",
    title: "SheCart",
    subdetails: "E-Commerce Platform",
    arrow: "/orange-arrow.png",
    link: "https://www.figma.com/design/2f8rIG5GzSsnkItb46EkZy/SheCart?node-id=1-2&t=703tMWj3ur5xTeQA-1"
  },
  {
    image: "/Hotel-ACG-img.png",
    title: "Hotel AGC",
    subdetails: "Hotel Booking Website",
    arrow: "/orange-arrow.png",
    link: "https://www.hotelagcaurangabad.com/"
  }
];


export default function Projects() {
  return (
    <div>
      <ProjectsPage />
    </div>
  );
}



function ProjectsPage() {
  return(
    <div className="container-fluid py-5">
      <div className="container">
        
        <div className="row">
          <div className="colsm-12 text-center">
            <h2 className="text-uppercase fw-bold PageHeading">Recent Projects</h2>
            <p>A selection of recent projects showcasing my UI/UX design and front-end development expertise.</p>
          </div>
        </div>

        <div className="row">

          {proData.map((data, i) => (
  <div className="col-sm-4 mt-3" key={i}>

    <img
      src={data.image}
      alt={data.title}
      className="img-fluid"
    />

    <div className="d-flex align-items-center justify-content-between text-start mt-3">

      <div>
        <h4 className="p-0 m-0 fw-bold fs-20">
          {data.title}
        </h4>

        <p
          className="p-0 m-0"
          style={{ fontSize: "16px" }}
        >
          {data.subdetails}
        </p>
      </div>

      <div>
        <Link to={data.link}>
        <img
          src={data.arrow}
          alt="Project Icon"
          className="img-fluid"
        />
        </Link>
      </div>

    </div>

  </div>
))}

        </div>

      </div>
    </div>
  )
}