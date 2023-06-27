import React from "react";
import SearchBar from "./SearchBar";
import BillingOverview from "./BillingOverview";
import BillingSection from "./BillingSection";
const PatientBill = () => {
  return (
    <>
      <div className="pl-8 pt-9">
        {/* Top search bar section */}
        <SearchBar />

        {/* Billing Overview section*/}
        <BillingOverview />

        {/* Patient Card and Bill section*/}
        <BillingSection />
      </div>
    </>
  );
};

export default PatientBill;
