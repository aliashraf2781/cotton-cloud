import React from "react";
import Logo from "../../assets/images/navbar-icon.png";

function UpperSection() {
  return (
    <nav className="flex py-[18px] mx-4 justify-between lg:mx-0 md:mx-0 lg:pt-10 md:pt-10 items-start ">
      <div className="hidden lg:flex gap-3 md:flex ">
        <button>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.031 14.6168L20.3137 18.8995L18.8995 20.3137L14.6168 16.031C13.0769 17.263 11.124 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18 11.124 17.263 13.0769 16.031 14.6168ZM14.0247 13.8748C15.2475 12.6146 16 10.8956 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16C10.8956 16 12.6146 15.2475 13.8748 14.0247L14.0247 13.8748Z"
              fill="#1D1E3D"
            />
          </svg>
        </button>
        <button>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z"
              fill="#1D1E3D"
            />
          </svg>
        </button>
        <button>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.00436 5.41686L0.761719 2.17422L2.17593 0.76001L5.41857 4.00265H20.6603C21.2126 4.00265 21.6603 4.45037 21.6603 5.00265C21.6603 5.09997 21.6461 5.19678 21.6182 5.29L19.2182 13.29C19.0913 13.713 18.7019 14.0027 18.2603 14.0027H6.00436V16.0027H17.0044V18.0027H5.00436C4.45207 18.0027 4.00436 17.5549 4.00436 17.0027V5.41686ZM6.00436 6.00265V12.0027H17.5163L19.3163 6.00265H6.00436ZM5.50436 22.0027C4.67593 22.0027 4.00436 21.3311 4.00436 20.5027C4.00436 19.6742 4.67593 19.0027 5.50436 19.0027C6.33279 19.0027 7.00436 19.6742 7.00436 20.5027C7.00436 21.3311 6.33279 22.0027 5.50436 22.0027ZM17.5044 22.0027C16.6759 22.0027 16.0044 21.3311 16.0044 20.5027C16.0044 19.6742 16.6759 19.0027 17.5044 19.0027C18.3328 19.0027 19.0044 19.6742 19.0044 20.5027C19.0044 21.3311 18.3328 22.0027 17.5044 22.0027Z"
              fill="#1D1E3D"
            />
          </svg>
        </button>
      </div>
      <div className="logo w-[74px] md:w-[177px] lg:w-[177px] ">
        <a href="">
          <img className="w-full" src={Logo} alt="" />
        </a>
      </div>
      <button className="hidden lg:block md:block bg-secondary-550 py-2 w-[193px] rounded-lg text-sm text-primary-900">
        تسجيل دخول
      </button>
      <button className="w-6 lg:hidden md:hidden">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
            fill="#1D1E3D"
          />
        </svg>
      </button>
    </nav>
  );
}

export default UpperSection;
