import React from "react";
import person from "../pngAssets/person.png";
import m1 from "../pngAssets/m1.png";

const Body = () => {
  return (
    <>
      {/* ***************home start********************* */}
      <div className="container ">
        <div className="row my-5 py-2 bg-tertiary">
          <div className="col-md-7   ">
            <p className="fst-italic fs-5">
              All my friends have a cushy, high-paying job. Will I ever get a
              well-paying IT job?
            </p>

            <h2 className="my-4 py-3">
              FEELING HOPELESS THAT YOUR DOOR TO A LUCRATIVE IT JOB IS CLOSED?
            </h2>

            <p className="fs-5">
              Never again worry about getting a well-paying IT job. This online
              training program is all you need to get hired by top software
              companies that you secretly desire to work for. And{" "}
              <span>start earning a minimum 4 lakh per annum—GUARANTEED!</span>
            </p>
            <br />
            <p> Interested?</p>

            <button className="btn btn-success btn-lg">
              YES! I WANT TO JOIN
            </button>
            <p className="fs-6  lh-sm my-2">
              So I Can Get A Well-Paying IT Job In 7 Months
            </p>
          </div>
          <div className="col-md-5">
            <img src={person} className="img-fluid person-img" alt="" />
          </div>
        </div>
      </div>
      {/* *********************home end********************* */}
      {/* ******************circulam start *********************** */}
      <div className="circulam-bg">
        <p className="cir-head ">WHAT YOU’LL LEARN?</p>
        <p className="fs-5 text-center">
          THE FULL STACK DEVELOPER 7 MONTHS COURSE MODULES
        </p>
        <div className="container ">
          <div className="row my-4 py-3">
            <div className="col-md-4 ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 1- 5</p>
                <p className="p2">Web Foundation</p>
                <p className="fs-5 p3">HTML, CSS, Bootstrap, javascript, Git</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 6 - 10</p>
                <p className="p2">Frontend Development </p>
                <p className="fs-5 p3">jQuery, AJAX, React Js, Redux.</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="border border-2 box1 mb-3 boxbg rounded rounded-4">
                <p className="p1">weeks 11- 15</p>
                <p className="p2">Backend Development</p>
                <p className="fs-5 p3">Node.js, Express, MongoDB, OAuth</p>
                <p className="fw-bold p4">Schedule : </p>
                <p className="p5">LIVE CLASSES : 7AM - 9 AM ,</p>
                <p className="p6">ASSIGNMENTS & MONITORING CALLS :</p>
                <p className="p7">10 AM TO 5 PM</p>
                <p className="p8">Monday to Saturday</p>
              </div>
            </div>
          </div>

          <div className=" circulum-box mb-3">
            <div className="border border-2 box1 mb-3 boxbg p-4 rounded rounded-4">
              <p className="p1">weeks 16 - 25</p>
              <p className="p2">Internship Program</p>
              <p className=" p3">Students will assigned as interns in</p>
              <p className="p9">startups to gain real time exposure on </p>
              <p className="p10">what they are trained.</p>

              <p className="p7">Schedule : 10 AM TO 5 PM</p>
              <p className="p8">Monday to Saturday</p>
            </div>
            <div className="border border-2 box1 mb-3 boxbg p-4 rounded rounded-4">
              <p className="p1">weeks 25 - 30</p>
              <p className="p2">Career Launch</p>
              <p className=" p3">Profile building, Mock Interviews and</p>
              <p className="p9">profiles will be sent to partnered </p>
              <p className="p10">companies.</p>

              <p className="p7">Schedule : 10 AM TO 5 PM</p>
              <p className="p8">Monday to Saturday</p>
            </div>
          </div>
        </div>
      </div>
      {/* ************************circulum ends*********************** */}

      {/* **************************mentor- block statrt *********************** */}
      <div className="my-3 py-3">
        <h3 className="text-center">MEET OUR MENTORS</h3>
        <div className="container">
          <div className="row mentor-block  ">
            <div className="col-md-3">
              <img src={m1} alt="" className="image-fluid mentor " />
            </div>
            <div className="col-md-9 ">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bold fs-5">
                  Anil Kumar Ghorakavi
                </p>
                <p className="mentor-p1 ">
                  Founder of EnGrip (Ex Oracle & Amazon)
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

            <hr className=" my-3" />
            <div className="col-md-3">
              <img src={m1} alt="" className="image-fluid mentor " />
            </div>
            <div className="col-md-9 ">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bold fs-5">Praveen Kumar</p>
                <p className="mentor-p1 ">Program Advisor (Ex Microsoft)</p>
                <p>
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
            <hr className=" my-3" />
            <div className="col-md-3">
              <img src={m1} alt="" className="image-fluid mentor " />
            </div>
            <div className="col-md-9 ">
              <div className="mx-3 px-2">
                <p className="text-primary fw-bold fs-5">Pavan Kumar</p>
                <p className="mentor-p1 ">Technical Advisor</p>
                <p>
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

      {/* **************************mentor-block Ends************************* */}

      {/* ************************* reviews block start ***************** */}

      <div className="review-bg">
        <div className="container">
          <h3 className="text-center  my-3 py-3">Reviews</h3>
          <h4>Our recently placed students </h4>
          <div className="row my-4 mx-1">
            <div className="col-md-6 border border-2  rounded rounded-5">
              <div className="row">
                <div className="col-4">
                  <img src={m1} alt="" className="image-fluid review1 m-md-3" />
                </div>
                <div className="col-8">
                  <p className="fw-bold fs-5 text-primary review-person">
                    Manoj
                  </p>
                  <p className="fw-bold  ">REACT DEVELOPER</p>
                  <p className="fw-bold review-person1">
                    ORBIT ANALYTICS - 4LPA
                  </p>
                  <p className="fs-5 review-person1 ">
                    B.tech Mechanical engineer to React developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4 mx-1">
            <div className="col-md-6 offset-md-6 border border-2 rounded rounded-5">
              <div className="row">
                <div className="col-4">
                  <img src={m1} alt="" className="image-fluid review1 m-md-3" />
                </div>
                <div className="col-8">
                  <p className="fw-bold fs-5 text-primary review-person">
                    Manoj
                  </p>
                  <p className="fw-bold  ">REACT DEVELOPER</p>
                  <p className="fw-bold review-person1">
                    ORBIT ANALYTICS - 4LPA
                  </p>
                  <p className="fs-5 review-person1 ">
                    B.tech Mechanical engineer to React developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4 mx-1">
            <div className="col-md-6 border border-2  rounded rounded-5">
              <div className="row">
                <div className="col-4">
                  <img src={m1} alt="" className="image-fluid review1 m-md-3" />
                </div>
                <div className="col-8">
                  <p className="fw-bold fs-5 text-primary review-person">
                    Manoj
                  </p>
                  <p className="fw-bold  ">REACT DEVELOPER</p>
                  <p className="fw-bold review-person1">
                    ORBIT ANALYTICS - 4LPA
                  </p>
                  <p className="fs-5 review-person1 ">
                    B.tech Mechanical engineer to React developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4 mx-1">
            <div className="col-md-6 offset-md-6 border border-2 rounded rounded-5">
              <div className="row">
                <div className="col-4">
                  <img src={m1} alt="" className="image-fluid review1 m-md-3" />
                </div>
                <div className="col-8">
                  <p className="fw-bold fs-5 text-primary review-person">
                    Manoj
                  </p>
                  <p className="fw-bold  ">REACT DEVELOPER</p>
                  <p className="fw-bold review-person1">
                    ORBIT ANALYTICS - 4LPA
                  </p>
                  <p className="fs-5 review-person1 ">
                    B.tech Mechanical engineer to React developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
