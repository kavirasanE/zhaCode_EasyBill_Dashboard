import './managesubscription.css'
import React, { useContext } from 'react'
import ManageSubscriptionInfo from './ManageSubscriptionInfo';
import DataContext from "../../Context/DataProvider"

const ManageSubscription = () => {
  const {appName,subscription} =useContext(DataContext)
  console.log(subscription);
  // const data = [
  //   {
  //     price: 19.99,
  //     validityMonths: 12,
  //     printer: "ExamplePrinter1",
  //     description: "Description for product 1.",
  //   },
  //   {
  //     price: 29.99,
  //     validityMonths: 6,
  //     printer: "ExamplePrinter2",
  //     description: "Description for product 2.",
  //   },
  //   {
  //     price: 39.99,
  //     validityMonths: 24,
  //     printer: "ExamplePrinter3",
  //     description: "Description for product 3.",
  //   },
  //   // Add more entries as needed
  // ];
  
return (
<div>
     <ManageSubscriptionInfo data ={subscription} />
 
</div>
)
}

export default ManageSubscription