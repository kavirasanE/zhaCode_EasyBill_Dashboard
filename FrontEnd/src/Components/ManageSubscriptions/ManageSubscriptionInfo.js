import React from "react";

const ManageSubscriptionInfo = ({ data, transaction, subscriptionOpen }) => {
  return (
    <>
      {!subscriptionOpen ? (
        <>
          <div className="m-4 d-flex justify-content-end ">
            <button className="px-4 mx-4 rounded btn btn-primary">Add</button>
          </div>
          {data.map((subscription, index) => (
            <div className="row border border-black m-4 rounded-4 py-2">
              <div className="col">
                <p className="md:border-end md:border-black text-nowrap">
                  <span className="fw-bold text-black"> Price:Rs. </span>{" "}
                  {subscription.Price}
                </p>
              </div>
              <div className="col">
                <p className="md:border-end md:border-white">
                  <span className="fw-bold text-black">
                    Validity(In Months) :{" "}
                  </span>
                  {subscription.Sub_Months}
                </p>
              </div>
              <div className="col">
                <p>
                  <span className="fw-bold text-black">IsActive: </span>
                  {subscription.IsActive}
                </p>
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
              <div className="row border border-dark m-4 rounded-4 py-2 justify-content-center ">
                <div className="col">
                  <p className="text-nowrap">
                    <span className="fw-bold text-black">Price:Rs. </span>
                    {transactions.Price}
                  </p>
                </div>
                <div className="col">
                  <p className="text-nowrap">
                    <span className="fw-bold text-black"> Shop Name:</span>{" "}
                    {transactions.ShopName}
                  </p>
                </div>
                <div className="col">
                  <p className="text-nowrap">
                    <span className="fw-bold text-black">Transaction Id:</span>{" "}
                    {transactions.TransactionId}
                  </p>
                </div>
                <div className="col ">
                  <p className="text-nowrap">
                    <span className="fw-bold text-black">Payed On : </span>
                    {transactions.CreatedOn}
                  </p>
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
