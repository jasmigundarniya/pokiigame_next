import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Url, Bucket } from "./ApiComment";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blog = () => {
  const router = useRouter();

  const [blogData, setBlogData] = useState([]);
  console.log("blogdata", blogData);
  const getBlogData = async () => {
    const body = {
      page: 1,
      limit: 4,
    };
    await axios
      .post(`${Url}/user/getblog`, body)
      .then((res) => {
        console.log("blogres", res);
        setBlogData(res?.data?.data?.response);
        console.log("first", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getBlogData();
    window.scrollTo(0, 0);
  }, []);

  const handlenavigate = (item) => {
    console.log("item?.name", item?.title);
    router.push(
      `/Blog/${encodeURIComponent(item.title).toLowerCase()}`
    );
  };

  return (
    <div className="bg-header text-white">
      <div className="px-96 xxl:px-5 xs:px-10 ">
        <div className="flex pt-8 justify-between">
          <div className="text-4xl text-white">Top Blogs</div>
          <Link href='/Moreblogs'>
            <button className="text-white bg-[#dd003f] rounded-[20px] px-[25px] py-[11px] font-[600] text-[14px]">
              MORE BLOGS
            </button>
          </Link>
        </div>
        <div className="flex justify-center mx-auto md:flex-col md:justify-center md:w-full gap-6">
          {blogData.map((v, i) => {
            const capitalizeWords = (str) => {
              const words = str.split("-");
              const capitalizedWords = words.map((word) => {
                const firstLetter = word.charAt(0).toUpperCase();
                const restOfWord = word.slice(1).toLowerCase();
                return `${firstLetter}${restOfWord}`;
              });
              return capitalizedWords.join(" ");
            };
            const capitalizedString = capitalizeWords(v?.title);
            return (
              <>
                <div className="w-1/4 md:w-full py-12">
                  <div className="hover:text-[#dcf836]">
                    <Image
                      src={`${Bucket}${v?.URLs}`}
                      width={310}
                      height={160}
                      onClick={() => handlenavigate(v)}
                      className="w-[310px] h-[160px] cursor-pointer md:mx-auto rounded-[5px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
                    />
                  <h1 className="mt-5 text-[#4280bf] md:text-center hover:text-[#dcf836]">
                    {capitalizedString}
                  </h1>
                  </div>
                  <h1 className="mt-5 md:text-center text-[12px] font-[300] text-[#ABB7C4]">
                    {moment(v?.createdAt).format("DD MMM YYYY")}
                  </h1>
                  <p className="mt-5 md:text-center text-[14px] font-[300] text-[#ABB7C4]">
                    {v?.subtitle}
                  </p>
                </div>
              </>
            );
          })}
      
        </div>
      </div>
    </div>
  );
};
export default Blog;
