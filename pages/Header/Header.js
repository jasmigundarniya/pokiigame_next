import React, { useEffect, useState } from "react";
import Image from "next/image";
import mainlogo from "../../images/mainlogo.svg";
import "../../styles/globals.css";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

function Header() {
  // const pathName = window?.location?.pathname;

  const pathName = usePathname();

  const [showToggleButton, setShowToggleButton] = useState(false);
  const [showNavigationLinks, setShowNavigationLinks] =
    useState(false);

  const handleToggleClick = () => {
    setShowNavigationLinks(!showNavigationLinks);
  };

  return (
    <>
      {/* <div className="bg-header">
        <div className="flex items-center justify-between xxl:px-5 xs:px-10 px-96 py-4">
          <div className="flex  items-center gap-7">
            <Image src={mainlogo} className="w-[60px] h-[40px]" />
            <div className="flex gap-5">
              <Link href='/'>
              <h1 className="text-[#abb7c4] font-[600] text-[14px]">HOME</h1></Link>
              <Link href='/Developer'>
              <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                DEVELOPER
              </h1></Link>
              <Link href='/Moreblogs'>
              <h1 className="text-[#abb7c4] font-[600] text-[14px]">BLOG</h1></Link>
              <Link href='/Affiliates'><h1 className="text-[#abb7c4] font-[600] text-[14px]">
                AFFILIATES
              </h1></Link>
              <Link href='/Aboutus'> <h1 className="text-[#abb7c4] font-[600] text-[14px]">ABOUTUS</h1></Link>
            </div>
          </div>
          <Link href='/Contactus'>
          <div>
            <button className="text-white bg-[#dd003f] rounded-[20px] px-[25px] py-[11px] font-[600] text-[14px]">
              CONTACT US
            </button>
          </div>
          </Link>
        </div>
      </div> */}

      <div className="bg-header fixed w-full z-10">
        <div className="flex items-center justify-between xxl:px-5 xs:px-10 px-96 py-4">
          <div className="flex items-center gap-7">
            <Image src={mainlogo} className="w-[60px] h-[40px]" />
            {showToggleButton ? (
              //   <div onClick={handleToggleClick}>
              //   {showNavigationLinks ? (
              //     <IoCloseOutline size={35} className="text-white" />
              //   ) : (
              //     <VscThreeBars size={35} className="text-white" />
              //   )}
              // </div>
              <></>
            ) : (
              <div className="flex gap-5 lg:hidden">
                <Link href="/">
                  <h1
                    className={`font-[600] text-[14px] ${
                      pathName === "/"
                        ? "text-[#dcf836]"
                        : "text-[#abb7c4]"
                    }`}
                    // "text-[#abb7c4] font-[600] text-[14px]"
                  >
                    HOME
                  </h1>
                </Link>
                <Link href="/Developer">
                  <h1
                    className={`font-[600] text-[14px] ${
                      pathName === "/Developer"
                        ? "text-[#dcf836]"
                        : "text-[#abb7c4]"
                    }`}
                  >
                    DEVELOPER
                  </h1>
                </Link>
                <Link href="/Blogmain">
                  <h1
                    className={`font-[600] text-[14px] ${
                      pathName === "/Blogmain"
                        ? "text-[#dcf836]"
                        : "text-[#abb7c4]"
                    }`}
                  >
                    BLOG
                  </h1>
                </Link>
                <Link href="/Affiliates">
                  <h1
                    className={`font-[600] text-[14px] ${
                      pathName === "/Affiliates"
                        ? "text-[#dcf836]"
                        : "text-[#abb7c4]"
                    }`}
                  >
                    AFFILIATES
                  </h1>
                </Link>
                <Link href="/Aboutus">
                  <h1
                    className={`font-[600] text-[14px] ${
                      pathName === "/Aboutus"
                        ? "text-[#dcf836]"
                        : "text-[#abb7c4]"
                    }`}
                  >
                    ABOUTUS
                  </h1>
                </Link>
              </div>
            )}
          </div>
          {!showToggleButton && (
            <Link href="/Contactus">
              <div className="lg:hidden">
                <button className="text-white bg-[#dd003f] rounded-[20px] px-[25px] py-[11px] font-[600] text-[14px]">
                  CONTACT US
                </button>
              </div>
            </Link>
          )}
          <div
            onClick={handleToggleClick}
            className="hidden lg:block "
          >
            {showNavigationLinks ? (
              <IoCloseOutline size={35} className="text-white" />
            ) : (
              <VscThreeBars size={35} className="text-white" />
            )}
          </div>
        </div>
        {!showToggleButton && showNavigationLinks && (
          <div className="">
            <div className="grid gap-5 px-5 py-5">
              <Link href="/">
                <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                  HOME
                </h1>
              </Link>
              <Link href="/Developer">
                <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                  DEVELOPER
                </h1>
              </Link>
              <Link href="/Blogmain">
                <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                  BLOG
                </h1>
              </Link>
              <Link href="/Affiliates">
                <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                  AFFILIATES
                </h1>
              </Link>
              <Link href="/Aboutus">
                <h1 className="text-[#abb7c4] font-[600] text-[14px]">
                  ABOUTUS
                </h1>
              </Link>
              <button className="text-white bg-[#dd003f] rounded-[20px] px-[25px] py-[11px] font-[600] text-[14px]">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
