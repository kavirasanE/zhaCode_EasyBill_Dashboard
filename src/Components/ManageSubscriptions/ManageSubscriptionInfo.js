import React from "react";

const ManageSubscriptionInfo = ({ data }) => {
  return (
    <>
    <div className="m-4 d-flex justify-content-end ">
    <button className="px-4 mx-4 rounded btn btn-primary">Add</button>
    </div>
    {data.map((subscription,index) => (
          <div className="row border border-black m-4 rounded-4 py-2">
          
         <div className="col">
           <p className="md:border-end md:border-black text-nowrap">Price:Rs.{subscription.Price} </p>
           </div>
           <div className="col">
           <p  className="md:border-end md:border-black">Validity(In Months): {subscription.Sub_Months}</p>
           </div>
           <div className="col">
           <p>IsActive:{subscription.IsActive}</p>
           </div>      
           {/* <div>
           <p className="border-top  border-secondary px-4 p-2 ">Description: {data.description}</p>
         </div> */}
         <div className=" d-flex justify-content-end  py-2 gap-4"> 
          {/* <button className=" px-4 mx-4 rounded btn btn-primary">Edit</button> */}
            <button className=" mx-4 rounded btn btn-danger">
              Delete
            </button>
           {/* <button className="rounded-2">Edit</button>
           <button className="rounded-2">Delete</button> */}
          </div>
       </div>
    ))}</>
    
  );
};

export default ManageSubscriptionInfo;
