import React from "react";

import SearchIcon from "../../assets/searchIcon.png";
import BellIcon from "../../assets/bellicon.png";
import BlueButtons from "../BlueButtons";

const SearchBar = () => {
  return (
    <>
      <div className="main-searchBar">
        {/* Search Bar */}
        <div className=" w-[60%]">
          <div className="input-box">
            <div className="search-logo">
              <img src={SearchIcon} alt="search-icon" />
            </div>
            <input type="text" placeholder="Search Patients" />
          </div>
        </div>
        <div className="header-btn">
          <div>
            <BlueButtons>Make an Appointment</BlueButtons>
          </div>
          <div>
            <BlueButtons>Add Patient</BlueButtons>
          </div>
          <span className="bell-icon">
            <img src={BellIcon} alt="bell-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
