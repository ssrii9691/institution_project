import React from "react";
import person from "../pngAssets/person.png";

const Body = () => {
  return (
    <>
      <div className="container ">
        <div className="row my-5 py-2 bg-tertiary">
          <div className="col-md-7  ">
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
      <div className="circulam-bg">
        <p className="cir-head ">WHAT YOU’LL LEARN?</p>
        <p className="fs-5 text-center">
          THE FULL STACK DEVELOPER 7 MONTHS COURSE MODULES
        </p>
        <div className="container">
          <div className="row my-4 py-3">
            <div className="col-md-4 ">
              <div className="border border-2 box1 mb-3 boxbg rounded">
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
              <div className="border border-2 box1 mb-3 boxbg rounded">
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
              <div className="border border-2 box1 mb-3 boxbg rounded">
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

          <div className=" circulum-box">
            <div className="border border-2 box1 mb-3 boxbg p-4 rounded">
              <p className="p1">weeks 16 - 25</p>
              <p className="p2">Internship Program</p>
              <p className=" p3">Students will assigned as interns in</p>
              <p className="p9">startups to gain real time exposure on </p>
              <p className="p10">what they are trained.</p>
              
              <p className="p7">Schedule : 10 AM TO 5 PM</p>
              <p className="p8">Monday to Saturday</p>
            </div>
            <div className="border border-2 box1 mb-3 boxbg p-4 rounded">
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
    </>
  );
};

export default Body;
