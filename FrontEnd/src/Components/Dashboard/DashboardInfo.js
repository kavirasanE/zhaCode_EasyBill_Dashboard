import React, { useState } from "react";

const DashboardInfo = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data);
  return (
    <div className="row p-4 ">
      <button className="col-8 col-md-2  border-secondary rounded-4 m-2 p-2 lg:py-4 fw-bold bg-white " onClick={() => setOpen(false)} >
        Subscribed Users: {data.SubscribedUsers?.length || 0}
      </button>
      <button className="col-8 col-md-2  border-secondary rounded-4 m-2 p-2 fw-bold bg-white" onClick={() => setOpen(true)}>
        Not Subscribed: {data.NotSubscribed?.length || 0}
      </button>
      <button className="col-8 col-md-2 border-secondary rounded-4 m-2 p-2 fw-bold bg-white" onClick={() => setOpen(false)}>
        Active Users: {data.Active?.length || 0}
      </button>
      <button className="col-8 col-md-2 border-secondary rounded-4 m-2 p-2 fw-bold bg-white" onClick={() => setOpen(true)}>
        Deactivated Users: {data.Inactive?.length || 0}
      </button>
      <button className="col-8 col-md-2 border-secondary rounded-4 m-2 p-2 fw-bold bg-white" onClick={() => setOpen(true)}>
        Expired: {data.Expired?.length || 0}
      </button>
      {(!open && data.SubscribedUsers?.length >0 ) ?
       <div> 
        <div className="border m-4">
          <table >
            <thead className="border border-black bg-success text-white">
              <tr className="row text-center p-2 ">
                <th className="col-4 border-black border-end">Shop Name</th>
                <th className="col-4 border-black border-end">Mobile Number</th>
                <th className="col-4">Address</th>
              </tr>
            </thead>
           
            { data.SubscribedUsers.map((datas,index) => (
               <>
               <tbody className="border border-black ">
              <tr className="row text-center p-2">
                <td className="col-4 border-black border-end">{datas["Shop Name"]}</td>
                <td className="col-4 border-black border-end">{datas["Mobile Number"]}</td>
                <td className="col-4">{datas["Address"]}</td>
              </tr>
              </tbody>
              </>
               ))}
             
          </table>
          <p></p>
          <p></p>
        </div>
     </div> : ""}
    </div>
  );
};

export default DashboardInfo;
{
  /* <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold '>{fetchData.results.Device ID} :09</div>
      <div className='col-8  col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{fetchData.NotSubscribed}: 03</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{fetchData.Approved}:08</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{fetchData.Pending}:02</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{fetchData.Expired}:04</div> */
}
// <div>
//    {column.map((data) => (  <div>{data} </div>))}
// </div>
