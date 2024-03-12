import "./dashboard.css";
import DashboardInfo from "./DashboardInfo";
import React, { useEffect, useState, useContext } from "react";
import DataContext from "../../Context/DataProvider";

const Dashboard = () => {
  const { appName, data, setData, subscription, setSubscription } =
    useContext(DataContext);
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    fetchData();
    // console.log(datad);
  }, []);

  useEffect(() => {
    console.log(data);
    // console.log(subscription);
    // console.log(column);
    //   data.SubscribedUsers
    // data.NotSubscribed
    // data.Approved
    // data.Pending
    // data.Expired

    //   {
    //     "Shop Name": "vrk traders",
    //     "Registered On": "Feb 27 2024 12:54PM",
    //     "Device ID": "bb6e08c43704bd89",
    //     "Subscription": 1,
    //     "Address": "அருப்புக்கோட்டை மெயின் ரோடு ,மதுரை ,",
    //     "Mobile Number": "9600664764",
    //     "User Status": 1,
    //     "Transaction ID": "pay_NgiHht7MPnge5a",
    //     "Register On": "Feb 29 2024  1:34PM"
    // }
    const SubscribedUsers = data.filter((itm) => itm.Subscription == 1);
    const NotSubscribed = data.filter((itm) => itm.Subscription == 0);
    const Expired = data.filter((itm) => itm.Subscription == 2);
    const Active = data.filter((itm) => itm["User Status"] == 1);
    const Inactive = data.filter((itm) => itm["User Status"] == 0);
    const dataToUpdate = {
      SubscribedUsers: SubscribedUsers,
      NotSubscribed: NotSubscribed,
      Active: Active,
      Inactive: Inactive,
      Expired: Expired,
    };
    // console.log(dataToUpdate);
    setDashboardData(dataToUpdate);
  }, [data]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/dashboard");
    try {
      if (response.ok) {
        const data = await response.json();
        setData(data.results);
        setSubscription(data.subscriptions);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const data = {
  //   SubscribedUsers: "SubscribedUsers",
  //   NotSubscribed: "NotSubscribed",
  //   Approved: "Approved",
  //   Pending: "Pending",
  //   Expired: "Expired"
  // };
  const column = data.length > 0 && Object.keys(data[0]);

  return (
    <div>
      <DashboardInfo data={dashboardData} />
    </div>
  );
};

export default Dashboard;
// <div>
//   {column.map((data, index) => (
//     <div key={index}>{data}</div>
//   ))}
// </div>
