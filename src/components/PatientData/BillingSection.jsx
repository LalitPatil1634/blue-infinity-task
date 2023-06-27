import React from "react";
import PatientData from "./PatientData.jsx";

const BillingSection = () => {
  return (
    <>
      <div className="flex flex-row gap-10 mt-3 ">
        {/* all logic of patient Card and Bill of each patient */}
        <PatientData />
      </div>
    </>
  );
};

export default BillingSection;
