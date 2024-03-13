import './subscriptionplans.css';
import React, { useContext } from 'react';
 import DataContext from '../../Context/DataProvider';
import ManageSubscriptionInfo from '../ManageSubscriptions/ManageSubscriptionInfo'
const SubscriptionPlans = () => {
  const data = [
    {
      price: 19.99,
      validityMonths: 12,
      printer: "ExamplePrinter1",
      description: "Description for product 1.",
    },
    {
      price: 29.99,
      validityMonths: 6,
      printer: "ExamplePrinter2",
      description: "Description for product 2.",
    },
    {
      price: 39.99,
      validityMonths: 24,
      printer: "ExamplePrinter3",
      description: "Description for product 3.",
    },
    // Add more entries as needed
  ];
   const {appName,subscription} =useContext(DataContext);
   
return (
<div>
 
     <ManageSubscriptionInfo  data={data}/>
 
</div>
)
}

export default SubscriptionPlans;
