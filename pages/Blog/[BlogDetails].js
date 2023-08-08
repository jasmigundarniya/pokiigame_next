import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import { Url, Bucket } from "../Header/ApiComment";
import gameimg from "../../images/gameimg.png";
import Image from "next/image";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import moment from "moment";
import { htmlToText } from "html-to-text";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState([]);
  console.log("blogData", blogData);
  const searchparams = useSearchParams();
  const blogname = usePathname();
  // console.log('blogname', blogname)

  const blogname1 = blogname ? blogname.split("/").pop() : null;
  console.log("blogname1", blogname1);

  const getBlogData = async () => {
    try {
      console.log("...name", blogname1);
      const response = await axios.get(
        `${Url}/user/blogbyname/${blogname1.toString().toUpperCase()}`
      );
      console.log(response?.data?.data[0], "resblogname");
      setBlogData(response?.data?.data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getBlogData();
    // console.log('blogData :>> ', blogData);
    window.scrollTo(0, 0);
  }, [blogname]);

  const removeCss = (html) => {
    const regex = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;
    if (html) {
      return html.replace(regex, "");
    }
  };

  const convertedHtml = removeCss(blogData?.html_code);

  const cleanedData = blogData?.title?.replace(/[-/]/g, " ");
  const formattedData = cleanedData
    ? cleanedData.charAt(0).toUpperCase() +
      cleanedData.slice(1).toLowerCase()
    : null;

  console.log("Formatted data:", formattedData);

  const removeCssAndTags = (htmlCode) => {
    const textContent = htmlToText(htmlCode);
    return textContent;
  };

  const htmlCode = blogData?.html_code;
  const plainText = removeCssAndTags(htmlCode);

  return (
    <>
      <Header />
      <div className="bg-gamebackground text-[#abb7c4] pt-20">
        <div className="flex flex-wrap px-96 xxl:px-10 ">
          <div>
            <h1 className="text-[36px] font-semibold mb-[25px] text-white mt-5">
              {/* The Specialty Of Fashion Games For Girls */}
              {/* {blogData?.title} */}
              {formattedData}
            </h1>
            <p className="font-light text-[12px]">
              {/* {moment(blogData?.createdAt).format("DD MMM YYYY")} */}
              {moment(blogData?.createdAt)?.format("DD MMM YYYY")}
            </p>

            <img
              // src={gameimg}
              src={`${Bucket}${blogData?.URLs}`}
              className="w-full  h-[420px] rounded-[8px] my-[30px]"
              alt=""
            />

            {/* <h1 className="font-normal text-[20px] leading-[140%] mb-4">
              Introduction
            </h1>
            <p className="text-[14px] font-light mb-[20px]">
              Fashion games have become a popular genre among girls,
              providing an interactive and immersive platform for
              exploring creativity, style, and self-expression. These
              games offer a unique blend of virtual fashion design,
              runway shows, makeovers, and dress-up options. With
              their engaging gameplay and diverse features, fashion
              games empower girls to unleash their imagination,
              experiment with trends, and cultivate a passion for
              fashion. In this article, we will explore the
              specialties of fashion games for girls, highlighting the
              benefits, interactive elements, and positive impact they
              have on nurturing personal style and fostering a sense
              of empowerment.
            </p> */}

            <span
              dangerouslySetInnerHTML={{ __html: convertedHtml }}
            ></span>
{/* <div>{blogData?.html_code}</div> */}
            {/* <p>{plainText}</p> */}

            <div className="flex items-center gap-4 mb-10 border-[#405266] py-5 border-b-2">
              <h4 className="text-[18px] font-semibold mr-[15px] text-white">
                Share it
              </h4>
              <FaFacebook />
              <AiOutlineTwitter />
              <AiOutlineMail />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
