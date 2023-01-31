import React from "react";
import logo from "./images/logo.jpg";
import person from "./images/person.png";
import png from "./images/png.jpg";
import "../App.css";

const NavBarFront = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="150px" height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-md-end "
            id="navbarSupportedContent"
          >
            <ul className="nav navlnk">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#curriculam" >
                  Curriculam
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mentors">
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id="home">
        <div className="row  py-2 bg-tertiary">
          <div className="col-md-7">
            <p className="fs-5">
              All my friends have a cushy, high-paying job. Will I ever get a
              well-paying IT job?
            </p>

            <h2 className="my-4 py-3">
              FEELING HOPELESS THAT YOUR DOOR TO A LUCRATIVE IT JOB IS CLOSED?
            </h2>

            <p className="fs-5">
              Never again worry about getting a well-paying IT job. This online
              training program is all you need to get hired by top software
              companies that you secretly desire to work for.
              <span className="text-success fw-normal">
                start earning a minimum 4 lakh per annum-GUARANTEED!
              </span>
            </p>
            
            <p className="fs-4"> Interested?</p>

            <button className="btn btn-primary btn-lg">
              YES! I WANT TO JOIN
            </button> <br /><br />
            <p className="fs-6   my-2">
              So I Can Get A Well-Paying IT Job In 7 Months
            </p>
          </div>
          <div className="col-md-5">
            <img src={person} className="img-fluid person" alt="person" />
          </div>
        </div>
      </div>
      <div className="curriculam" id="curriculam">
        <p className="cir-h text-danger">WHAT YOU'LL LEARN?</p>
        <p className=" course text-center text-secondary">
          ----------THE FRONTEND DEVELOPER 6 MONTHS COURSE MODULES---------
        </p>
        <div className="container ">
          <div className="row my-4 py-3">
            <div className="col-md-4 ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 1- 4</p>
                <p className="p2">Web Foundation</p>
                <p className="fs-5 p3">HTML, CSS, Bootstrap, Git</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 4 - 8</p>
                <p className="p2">Frontend Development </p>
                <p className="fs-5 p3">JavaScript,jQuery, AJAX</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 9 - 12</p>
                <p className="p2">Frontend Development</p>
                <p className="fs-5 p3">Reactjs,Redux,Reactjs Native</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
          </div>

          <div className="curriculum-box mb-3">
            <div className="border border-2 box1 mb-2 boxbg p-3 rounded rounded-4">
              <p className="p1">weeks 12 - 20</p>
              <p className="p2">Internship Program</p>
              <p className=" p3">Students will assigned as interns in</p>
              <p className="p9">startups to gain real time exposure on </p>
              <p className="p10">what they are trained.</p>

              <p className="p7">Schedule : 10 AM TO 5 PM</p>
              <p className="p8">Monday to Saturday</p>
            </div>
            <div className="border border-2 box1 mb-2 boxbg p-3 rounded rounded-4">
              <p className="p1">weeks 20 - 24</p>
              <p className="p2">Career Launch</p>
              <p className="p3">Profile building, Mock Interviews and</p>
              <p className="p9">profiles will be sent to partnered </p>
              <p className="p10">companies.</p>

              <p className="p7">Schedule : 10 AM TO 5 PM</p>
              <p className="p8">Monday to Saturday</p>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------mentors----------------------- */}
      <div className="my-2 py-3" id="mentors">
        <h3 className="text-center mentor-h text-secondary">
          MEET OUR MENTORS
        </h3>{" "}
        <br />
        <div className="container">
          <div className="row mentor-block">
            <div className="col-md-4">
              <img src={png} alt="" className="img-fluid mentor" />
            </div>
            <div className="col-md-8">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bolder fs-4">
                  Anilkumar Ghorakavi
                </p>
                <p className="mentor-p1 fw-bold fs-5">
                  Founder of EnGrip(Ex Oracle & Amazon)
                </p>
                <p>
                  As an entrepreneur who’s constantly finding ways to help
                  people reach greater heights in their career and an Ex-Oracle
                  guy, I know EXACTLY what it takes to launch a career in the IT
                  industry. The truth is your background or your degrees don’t
                  matter! What matters is your skills, only your skills!
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="col-md-4">
              <img src={png} alt="" className="img-fluid mentor" />
            </div>
            <div className="col-md-8">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bolder fs-4">Praveen Kumar</p>
                <p className="mentor-p1 fw-bold fs-5">
                  Program Advisor (ex Microsoft)
                </p>
                <p>
                  {" "}
                  A pioneer in Learning & Development, Praveen always felt
                  disengaged with traditional education. He believes
                  supplementing education with relevant and engaging experience
                  would prepare students for careers in the tech industry. He
                  currently leads the program design at 10000 coders and brings
                  in all his experience in studying various programs in the west
                  to India for your success.
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="col-md-4">
              <img src={png} alt="" className="img-fluid mentor" />
            </div>
            <div className="col-md-8">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bolder fs-4">Pavan Kumar</p>
                <p className="mentor-p1 fw-bold fs-5">Technical Advisor</p>
                <p>
                  {" "}
                  A startup enthusiast and a technology erudite, Pavan dons the
                  advisor hat at 10000 Coders. He ensures our curriculum is
                  up-to-date with the latest industry needs and our program
                  delivery uses the trending tools and processes adopted by the
                  industry. He has led and directed many learning programs for
                  fresher engineers in various roles at the companies he has
                  served over the last 13+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review" id="reviews">
        <div className="container">
          <h2 className="text-center my-3 py-3 text-secondary review-name">
            Reviews
          </h2>
          <h2 className=" fs-2 ">Our Recently Placed Students:</h2>
          <div className="row my-4 py-3">
            <div className="col-md-4  ">
              <div className="border border-2 box1 mb-3 rounded rounded-4  pt-3 ">
                <img src={png} alt="" className="img-fluid mentor" />
                <p className="fw-bold fs-4 text-primary review-person">Manoj</p>
                <p className="fw-bold fs-5">React Developer</p>
                <p className="fw-bold review-person1">ORBIT ANALYTICS-4LPA</p>
                <p className="fs-5 review-person1 text-align-justify text-center">
                  B.Tech Mechanical Engineer to React Developer
                </p>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="border border-2 box1 mb-3 rounded rounded-4  pt-3 ">
                <img src={png} alt="" className="img-fluid mentor" />
                <p className="fw-bold fs-4 text-primary review-person">Manoj</p>
                <p className="fw-bold fs-5">React Developer</p>
                <p className="fw-bold review-person1">ORBIT ANALYTICS-4LPA</p>
                <p className="fs-5 review-person1 text-align-justify text-center">
                  B.Tech Mechanical Engineer to React Developer
                </p>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="border border-2 box1 mb-3 rounded rounded-4  pt-3 ">
                <img src={png} alt="" className="img-fluid mentor" />
                <p className="fw-bold fs-4 text-primary review-person">Manoj</p>
                <p className="fw-bold fs-5">React Developer</p>
                <p className="fw-bold review-person1">ORBIT ANALYTICS-4LPA</p>
                <p className="fs-5 review-person1 text-align-justify text-center">
                  B.Tech Mechanical Engineer to React Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ------------------price------------ */}

      <div className="price" id="pricing">
        <div className="container ">
          <h2 className="text-center">HOW MUCH YOU NEED TO INVEST?</h2>
          <h3 className="text-success text-center">Nothing if you don't get a job. That's right!</h3> <br />
          <div className="row box1">
            <div className="col-md-4">
              <div className="  box-m rounded rounded-4 ">
                <p className="fs-4 fw-bold text-center">Front-End Developer Training</p>
                <p className="text-center">Course Duration:6 Months</p> <hr />

                <div className=" row payment">
                  <div className="col-md-8">
                    Program Fee
                  </div>
                  <div className="col-md-4">
                    92000
                  </div>
                  <div className="col-md-8">
                    42% off:Early adopter discount <hr />
                  </div>
                  <div className="col-md-4 text-decoration-dotted">
                    <s>159999</s> <hr />
                    
                  </div> 
                  <div className="col-md-8">
                    Pay Just 
                  </div>
                  <div className="col-md-4">
                    420000
                  </div>
                  <div className="col-md-8 ">
                   To attend the course <hr />
                  </div>
                  <div className="col-md-4 text-decoration-dotted">
                    <p>2 installments</p>  <hr />
                    
                  </div>
                  <p className="justify-content-justify">pay the balance 50,000/- only if you get the job <br />
                  Otherwise we will refund every single rupee back to you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarFront;
