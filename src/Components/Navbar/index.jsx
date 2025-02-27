import React from "react";
import UpperSection from "./UpperSection";

import LowerSection from "./LowerSection";

function index() {
  return (
    <div className="">
      <div className="lg:container md:container">
        <UpperSection /> 
      </div>

      <hr className="hidden lg:block lg:border-t lg:border-third-550 md:block md:border-t md:border-third-550" />

      <div className="lg:container md:container">
        <LowerSection />
      </div>
    </div>
  );
}

export default index;
