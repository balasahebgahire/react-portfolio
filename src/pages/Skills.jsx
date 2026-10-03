

const skills = ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JQuery", "JavaScript", "React JS", "Wordpress", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "corelDraw", "Visual Studio Code", "Notepad++", "Git Lab"];


export default function Skills() {
  return (
    <>
        <SkillsPage />
    </>
  );
}


function SkillsPage(){
  return(
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="text-uppercase fw-bold PageHeading">Technology Stack</h2>
            <p>UI/UX Design, Front-End Development, React.js, HTML, CSS, JavaScript, Figma, Responsive Design & WordPress.</p>
          </div>
        </div>


        <div className="row">

          {skills.map((skill, i) => (<div className="col-sm-3 col-6 mt-3">
            <div className="bgGrey px-4 py-3 rounded-pill text-center fs-6 fw-bold" key="i">
              {skill}
            </div>
          </div>))}
          
        </div>
      </div>
    </div>
  )
}