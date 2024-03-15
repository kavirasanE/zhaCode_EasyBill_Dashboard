import './subscriptionplans.css';
import React, { useContext } from 'react';
 import DataContext from '../../Context/DataProvider';
import ManageSubscriptionInfo from '../ManageSubscriptions/ManageSubscriptionInfo'
const SubscriptionPlans = () => {
   const {appName,transaction,} =useContext(DataContext);
   console.log(transaction);
   let subscriptionOpen = true
   
return (
<div>
 
     <ManageSubscriptionInfo  transaction={transaction} subscriptionOpen={subscriptionOpen}/>
 
</div>
)
}

export default SubscriptionPlans;
