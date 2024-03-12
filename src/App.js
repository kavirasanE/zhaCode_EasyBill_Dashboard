import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Users from "./Components/Users/Users";
import ManageSubscription from "./Components/ManageSubscriptions/ManageSubscription";
import SubscriptionPlans from "./Components/SubscriptionPlans/SubscriptionPlans";
import Layout from "./Layout";
import Userexample from "./Userexample/Userexample";

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userexample" element={<Userexample />} />
          <Route path="/managesubscription" element={<ManageSubscription />} />
          <Route path="/subscriptionplans" element={<SubscriptionPlans />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
