import React, { useState, memo } from "react";
import { MdArrowBackIos } from "react-icons/md";

const userInfoexample = ({ data, open, handleToggle, name }) => {
  // const [open, setOpen] = useState(false);
  // const [allClose, setAllClose] = useState(true);
  console.log("UserInfo - loading - ", name);

  const userStyles = {
    transition: " 0.05s ease-out",
  };

  // const rotateStyle = {
  //   rotate: "90deg",
  // };
  // const UnrotateStyle = {
  //   rotate: "270deg",
  // };
  return (
    <>
    
      {!open ? (
        <div
        onClick={handleToggle}
          style={userStyles}
          className="row align-items-center border-bottom border-primary   p-2"
         
        >
          <p className=" col mx-2 my-2">  {data["Shop Name"]}</p>
          <p className=" col mx-2 my-2">
            <span className="text-success fw-bold ">{data.Subscription ? "Active" : <span className="text-danger">InActive</span>}</span>
          </p>
          <div className=" col d-flex justify-content-end align-items-center mx ">
            <button className="  rounded btn btn-primary">Edit</button>
            <button className=" lg:px-4 mx-4  rounded btn btn-danger">
              table
            </button>
            <button
            
              id={name}
              className="px-2 lg:mx-4 rounded btn btn-dark"
            >
              {"+"}

              {/* <MdArrowBackIos
                style={rotateStyle}
                className="w-20"
                size={20}
                 
              />*/}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`row border border-primary m-4 rounded-4 p-4`}
          style={userStyles}
          onClick={handleToggle}
        >
          <div className="d-flex justify-content-end align-items-center gap-3 mb-4">
            <button className=" px-4 mx-4 rounded btn btn-primary">Edit</button>
            <button className=" px-4 mx-4 rounded btn btn-danger">
              Delete
            </button>
            <button
             
             
              className=" px-2 mx-4 rounded btn btn-dark"
            >
              {"-"}

              {/* <MdArrowBackIos
                style={rotateStyle}
                className="w-20"
                size={20}
                 
              />*/}
            </button>
          </div>
          
          <div className="col">
            <p> Shop Name: {data["Shop Name"]}</p>
            <p>Register On: {data["Register On"]}</p>
            <p>Device ID: {data["Device ID"]}</p>
          </div>
          <div className="col">
            <p>Subscription: <span className="text-success font-weight-bold">{data.Subscription ? "Active" : <span className="text-danger">InActive</span>}</span></p>
            <p>Subscription Start Date: {data.subscriptionStartDate}</p>
            <p>Subscription End Date: {data.subscriptionEndDate}</p>
          </div>
          <div className="col">
            <p>Address: {data.Address}</p>
            <p>Mobile Number: {data["Mobile Number"]}</p>
          </div>
        </div>
      )}

      {/* {!itemOpen && !allOpen && (
        <div
          style={userStyles}
          onClick={() => {
            setItemOpen(true);
          }}
          className="row align-items-center border border-primary m-4 rounded-4 p-2 "
        >
          <p className=" col mx-2 my-2"> Shop Name{data.shopName}</p>
          <p className=" col  mx-2 my-2">
            Subscription:{data.subscription ? "Active" : "Inactive"}
          </p>
          <div className="col ">
            <button className=" px-2 mx-4">Edit</button>
            <button className=" px-2 mx-2">Delete</button>
            <MdArrowBackIos style={rotateStyle} className="w-20" />
          </div>
        </div>
      )}
      {itemOpen && (
        <div
          className={`row border border-primary m-4 rounded-4 p-4`}
          style={userStyles}
          onClick={() => {
            setItemOpen(false);
          }}
        >
          <div className="d-flex justify-content-end gap-3 mb-4">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <div className="col">
            <p> Shop Name{data.shopName}</p>
            <p>Register On: {data.registerOn}</p>
            <p>Device ID: {data.deviceId}</p>
          </div>
          <div className="col">
            <p>Subscription:{data.subscription ? "Active" : "Inactive"}</p>
            <p>Subscription Start Date: {data.subscriptionStartDate}</p>
            <p>Subscription End Date: {data.subscriptionEndDate}</p>
          </div>
          <div className="col">
            <p>Additional Information:{data.additionalInformation}</p>
            <p>Address: {data.address}</p>
            <p>Mobile Number: {data.mobileNumber}</p>
          </div>
        </div>
      )} */}
    </>

    // <div class="accordion" id="accordionExample">
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingOne">
    //       <button
    //         class="accordion-button"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseOne"
    //         aria-expanded="true"
    //         aria-controls="collapseOne"
    //       >
    //         Accordion Item #1
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseOne"
    //       class="accordion-collapse collapse show"
    //       aria-labelledby="headingOne"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the first item's accordion body.</strong> It is
    //         shown by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingTwo">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseTwo"
    //         aria-expanded="false"
    //         aria-controls="collapseTwo"
    //       >
    //         Accordion Item #2
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseTwo"
    //       class="accordion-collapse collapse"
    //       aria-labelledby="headingTwo"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the second item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="accordion-item">
    //     <h2 class="accordion-header" id="headingThree">
    //       <button
    //         class="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseThree"
    //         aria-expanded="false"
    //         aria-controls="collapseThree"
    //       >
    //         Accordion Item #3
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseThree"
    //       class="accordion-collapse collapse"
    //       aria-labelledby="headingThree"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div class="accordion-body">
    //         <strong>This is the third item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS
    //         transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default memo(userInfoexample);
