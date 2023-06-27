import React from "react";
import dashboard from "../assets/dashboard.png";
import Patient from "../assets/patient.png";
import Appointment from "../assets/appointment.png";
import Billing from "../assets/biling.png";
import Support from "../assets/support.png";
import Setting from "../assets/setting.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="main-content">
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold text-white ml-8 mb-5 font-Helvitica-rounded">
          LOGO
        </h1>
      </div>
      <div className="mt-16 flex flex-col gap-6 text-white text-base ">
        <ul className="list-items">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-link active"
              aria-current="page"
            >
              <img src={dashboard} alt="dashboard-logo" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/patient" className="nav-link text-white">
              <img src={Patient} alt="dashboard-logo" />
              Patient
            </Link>
          </li>
          <li>
            <Link to="/appointment" className="nav-link text-white">
              <img src={Appointment} alt="dashboard-logo" />
              Appointment
            </Link>
          </li>
          <li>
            <Link to="/billing" className="nav-link text-white">
              <img src={Billing} alt="dashboard-logo" />
              Billing
            </Link>
          </li>

          <li>
            <Link to="/support" className="lower-item text-white">
              <img src={Support} alt="dashboard-logo" />
              Support
            </Link>
          </li>
          <li>
            <Link to="/setting" className="lower-item">
              <img src={Setting} alt="setting-icon" />
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
