import { useState } from "react";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div>
        <ContactPage />
    </div>
  );
}


function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

   const [submittedData, setSubmittedData] = useState(null);

   function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      fullName,
      phoneNo,
      email,
      message
    });
  }

  

  return(
    <div className="container-fluid py-5">
      <div className="container">


        <div className="row">
          <div className="colsm-12 text-center">
            <h2 className="text-uppercase fw-bold PageHeading">contact us</h2>
            <p>Lets connect and discuss how my UI/UX and front-end development experience can contribute to your next project.</p>
          </div>
        </div>


        <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control mt-3 bgGrey border-none h-5" placeholder="Name *" />
            </div>
            <div className="w-100"></div>
            <div className="col-sm-6">
              <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="form-control mt-3 bgGrey border-none h-5" placeholder="Phone *" />
            </div>
            <div className="w-100"></div>
            <div className="col-sm-6">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mt-3 bgGrey border-none h-5" placeholder="Email *" />
            </div>
            <div className="w-100"></div>
            <div className="col-sm-6">
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control mt-3 bgGrey border-none h-5" placeholder="Message *" rows="4"></textarea>
            </div> 
            <div className="w-100"></div>
            <div className="col-sm-6 text-center mt-3">
              <Button>Submit</Button>
            </div>
        </div>
        </form>

        <div className="w-100 mt-3">
          {submittedData && (
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="bg-light p-5 rounded shadow-sm border-1">
          <p>Name: {submittedData.fullName}</p>
          <p>Phone: {submittedData.phoneNo}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
          </div>
          </div>
        </div>
      )}
        </div>

        </div>
    </div>
  )
}