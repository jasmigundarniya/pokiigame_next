import React, { useEffect, useState } from "react";
import Image from "next/image";
import game from "../../images/gameimg.png";
import { AiTwotoneStar } from "react-icons/ai";
import { Url, Bucket } from "./ApiComment";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
// import { useNavigate, useParams } from "react-router-dom/dist";
import styles from "../../styles/Footer.module.css";
import { BiChevronRight } from "react-icons/bi";

const GameSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  console.log("data", data);
  const getData = async () => {
    const body = {
      page: 1,
      limit: 100,
      // search: props.search,
      // category: props.category,
    };
    await axios
      .post(`${Url}/user/getgame`, body)
      .then((res) => {
        setData(res?.data?.data?.response);
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
    // getBlogData();
    window.scrollTo(0, 0);
  }, []);

  const handlenavigate = (item) => {
    console.log("item?.name", item?.name);
    // window.location.href = `/Header/GameDetails/${encodeURIComponent(
    //   item?.name
    // ).toLowerCase()}`;
    // router.push(`/Header/GameDetails`);
    router.push(
      `/GameDetails/${encodeURIComponent(item?.name).toLowerCase()}`
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
    <div className="bg-gamebackground text-white pt-20">
      <div
        className="flex flex-wrap justify-between px-96 xxl:px-5 xs:px-10 
      "
      >
        {data?.map((v, i) => {
          const formattedName = v?.name.split("-").join(" ");
          return (
            <>
              <div className="justify-between gap-5 py-5 cursor-pointer">
              
                <div className="relative group hover:text-[#dcf836]">
                  <Image
                    src={`${Bucket}${v?.thumbnail}`}
                    alt=""
                    width={172}
                    height={172}
                    onClick={() => handlenavigate(v)}
                    className="w-[172px] h-[172px] md:h-[160px] md:w-[160px] sm:h-[130px] sm:w-[150px] xxs:h-[130px] xxs:w-[130px] rounded-[8px] opacity-100 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      onClick={() => handlenavigate(v)}
                      className="bg-[#dd003f] flex items-center justify-center rounded-[20px] px-4 py-[8px] font-[600] text-[14px] opacity-0 group-hover:opacity-100 text-white"
                    >
                      <span>Play Now</span>
                      <BiChevronRight />
                    </div>
                  </div>
                  <h1 className="mt-2 text-[14px] xs:w-40 font-[600] ">
                  {formattedName}
                </h1>
                </div>

               

             
                <div className="flex  items-center gap-3">
                  <AiTwotoneStar
                    color="yellow"
                    className="w-[15px] h-[15px]"
                    fontSize={24}
                  />
                  <h1>
                    <span className="font-[400] text-[16px]">
                      {v?.rate}
                    </span>
                    /<span className="text-[14px]">10</span>
                  </h1>
                </div>
              </div>
            </>
          );
        })}
     
      </div>
    </div>
  );
};
export default GameSection;
