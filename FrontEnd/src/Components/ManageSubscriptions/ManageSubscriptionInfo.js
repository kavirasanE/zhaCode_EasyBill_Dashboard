import React from "react";

const ManageSubscriptionInfo = ({ data, transaction, subscriptionOpen }) => {
  return (
    <>
      <div className="m-4 d-flex justify-content-end ">
        <button className="px-4 mx-4 rounded btn btn-primary">Add</button>
      </div>
      {!subscriptionOpen ? (
        <>
          {data.map((subscription, index) => (
            <div className="row border border-black m-4 rounded-4 py-2">
              <div className="col">
                <p className="md:border-end md:border-black text-nowrap">
                  Price:Rs.{subscription.Price}
                </p>
              </div>
              <div className="col">
                <p className="md:border-end md:border-black">
                  Validity(In Months):{subscription.Sub_Months}
                </p>
              </div>
              <div className="col">
                <p>IsActive:{subscription.IsActive}</p>
              </div>
              {/* <div>
           <p className="border-top  border-secondary px-4 p-2 ">Description: {data.description}</p>
         </div> */}
              <div className=" d-flex justify-content-end  py-2 gap-4">
                {/* <button className=" px-4 mx-4 rounded btn btn-primary">Edit</button> */}
                <button className=" mx-4 rounded btn btn-danger">Delete</button>
                {/* <button className="rounded-2">Edit</button>
           <button className="rounded-2">Delete</button> */}
              </div>
            </div>
          ))}{" "}
        </>
      ) : (
        <>
          {transaction.map((transactions) => (
            <>
              <div className="row border border-black m-4 rounded-4 py-2 ">
                <div className="col-2">
                  <p className=" ">
                    Price:Rs. <span className="fw-bold text-black">{transactions.Price} </span>
                  </p>
                </div>
                <div className="col">
                  <p className="">
                    Validity(In Months): <span className="fw-bold text-black">{transactions.ShopName}</span>
                  </p>
                </div>
                <div className="col">
                  <p className="text-nowrap">Transaction Id: <span className="fw-bold text-black">{transactions.TransactionId}</span></p>
                </div>
                <div className="col">
                  <p>Payed On :<span className="fw-bold text-black">{transactions.CreatedOn}</span></p>
                </div>
                {/* <div>
            <p className="border-top  border-secondary px-4 p-2 ">Description: {data.description}</p>
          </div> */}
                
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default ManageSubscriptionInfo;
