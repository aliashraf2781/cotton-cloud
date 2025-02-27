import React from "react";
import { BsChevronDown } from "react-icons/bs";
//applay css  text-primary-900 flex items-center to <a> tag
function LowerSection() {
  return (
    <div>
      <div className=" hidden  justify-center items-center py-4  md:flex gap-8 ">
        <a href="" className=".navbar-ul">
          الرئيسية
        </a>
        <a href="" className=".navbar-ul flex items-center ">
          الفئات
          <div className="dropdown w-5 h-5 ms-[2px]">
            <BsChevronDown className="w-full" />
          </div>
        </a>
        <a href="" className=".navbar-ul">
          عروض رمضان
        </a>
        <a href="" className=".navbar-ul">
          الأكثر مبيعا
        </a>
        <a href="" className=".navbar-ul">
          منتجات بتقييم 5 نجوم
        </a>
      </div>
    </div>
  );
}

export default LowerSection;
