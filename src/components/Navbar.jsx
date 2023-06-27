import React from "react";
import SearchIcon from "../assets/searchIcon.png";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <div class="">
          <div class="grid place-items-center h-full w-12 text-[#525252]">
            <img src={SearchIcon} alt="search-iconF" />
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-[#373737] pr-2"
            type="text"
            id="search"
            placeholder="Search Patients"
          />
        </div>
      </div>
      <div className="flex flex-row ml-8 justify-evenly  gap-6">
        <div>
          <ActiveBtn>Make an Appointment</ActiveBtn>
        </div>
        <div>
          <ActiveBtn>Add Patient</ActiveBtn>
        </div>

        <span className="px-3 py-3 bg-[#312E81] font-base text-white rounded-full font-Helvetica">
          <BiBell />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
