import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Url, Bucket } from "./Header/ApiComment";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import Loader from "./Loader";
import styles from '../styles/Footer.module.css'

const Moreblogs = () => {
  const router = useRouter();
const [isLoading, setIsLoading] = useState(true);

  const [blogData, setBlogData] = useState([]);
  console.log("blogdata", blogData);
  const getBlogData = async () => {
    const body = {
      page: 1,
      limit: 100,
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
    setIsLoading(false);
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

    if (isLoading) {
    return (
      <div>
        <div className={styles?.blurbackground}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div>
        {/* <div className="bg-[#020D18] text-white pt-20 "> */}
        <div className="bg-[#020D18] text-white pt-20">
          <div className={`py-10 px-96 xxl:px-10" ${isLoading ? 'h-[50px] bg-black' : ''}`}>
            <div>
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
                    <div className="flex mb-8 bg-header">
                      <div>
                        <Image
                          src={`${Bucket}${v?.URLs}`}
                          width={250}
                          height={148}
                          onClick={() => handlenavigate(v)}
                          className="w-[310px] h-[160px] rounded-[5px] cursor-pointer transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110 "
                        />
                      </div>

                      <div className="ml-10">
                        <h1 className="mt-5 font-semibold text-[18px] text-[#4280bf]">
                          {capitalizedString}
                        </h1>
                        <h1 className="mt-5 text-[12px] font-[300] text-[#ABB7C4]">
                          {moment(v?.createdAt).format("DD MMM YYYY")}
                        </h1>
                        <p className="mt-5 text-[14px] font-[300] text-[#ABB7C4]">
                          {v?.subtitle}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Moreblogs;
