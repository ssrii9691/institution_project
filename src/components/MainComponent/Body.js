import React from "react";
import person from "../pngAssets/person.png";


const Body = () => {
  return (
    <div className="container ">
      <div className="row my-5 py-2">
        <div className="col-7 ">
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
            <span >start earning a minimum 4 lakh per annum—GUARANTEED!</span>
          </p>
         <br />
         <p> Interested?</p>
          

          <button className="btn btn-success btn-lg">YES! I WANT TO JOIN</button>
          <p className="fs-6  lh-sm my-2">So I Can Get A Well-Paying IT Job In 7 Months</p>
        </div>
        <div className="col-5">
          <img src={person} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
