import React from "react";
// import image
import img from "../../../public/placeholder.png";
function index() {
    return (
        <div className="group overflow-hidden w-[163px] h-[260px] rtl:text-start shadow-lg md:h-[427px] md:w-[300px]">
            <div className="overflow-hidden h-[117px] md:h-[200px]">
                <img src={img} alt="" className="h-[100%] w-[100%] object-cover" />
            </div>
            <div className="h-[143px] bg-se p-2 text-primary-400 text-[12px] flex flex-col justify-between md:p-6 md:text-[16px] md:h-[224px]">
                <h4>الفئة</h4>
                <h3 className="font-semibold text-primary-550">اسم المنتج</h3>
                <div className="overflow-hidden mt-[-4px] "  >
                    <p>نص تجريبي يمكن استبداله نص تجريبي يمكن استبدالهنص تجريبي يمكن استبدالهنص تجريبي يمكن استبدالهنص تجريبي يمكن استبداله </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[0.75rem] md:text-[1rem]">50 ر.س</p>
                    <button className="bg-secondary-550 text-primary-550 text-[0.5rem] md:text-[0.75rem] p-1 sm:p-2 rounded-lg hover:bg-secondary-600">اضافة الى السلة</button>
                </div>
            </div>
        </div>
    );
}

export default index;
