import React from "react";
import Task from "./components/Task";

const App = () => {
  let data = [
    {
      tag: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateicon: "fa fa-times",
      privatetext: "text-secondary",
      privateprojects: "Unlimited Private Project",
      supporticon: "fa fa-times",
      supporttext: "text-secondary",
      support: "Dedicated Phone Support",
      subicon: "fa fa-times",
      subtext: "text-secondary",
      subdomain: "Free Subdomain",
      reporticon: "fa fa-times",
      reporttext: "text-secondary",
      reports: "Monthly status Reports",
    },
    {
      tag: "PLUS",
      price: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateicon: "fa fa-check",
      privatetext: "fw-normal",
      privateprojects: "Unlimited Private Project",
      supporticon: "fa fa-check",
      supporttext: "fw-normal",
      support: "Dedicated Phone Support",
      subicon: "fa fa-check",
      subtext: "fw-normal",
      subdomain: "Free Subdomain",
      reporticon: "fa fa-times",
      reporttext: "text-secondary",
      reports: "Monthly status Reports",
    },
    {
      tag: "PRO",
      price: "$49/month",
      user: "Unlimited Users",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateicon: "fa fa-check",
      privatetext: "fw-normal",
      privateprojects: "Unlimited Private Project",
      supporticon: "fa fa-check",
      supporttext: "fw-normal",
      support: "Dedicated Phone Support",
      subicon: "fa fa-check",
      subtext: "fw-normal",
      subdomain: "Free Subdomain",
      reporticon: "fa fa-check",
      reporttext: "fw-normal",
      reports: "Monthly status Reports",
    },
  ];
  return (
    <div>
      <Task data={data} />
    </div>
  );
};

export default App;
