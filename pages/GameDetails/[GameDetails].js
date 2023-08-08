"use clinet";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import gameimg from "../../images/gameimg.png";
import Footer from "../Header/Footer";
import Header from "../Header/Header";
import GameSection from "../Header/GameSection";
import { LuShare } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { Url, Bucket } from "../Header/ApiComment";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { BsChatLeftDots, BsFacebook } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// import { usePathname } from 'next/navigation'
const GameDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [open, setOpen] = React.useState(false);
  console.log("open", open);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const searchparams = useSearchParams();
  // const search= searchparams.get()
  console.log("searchparams", searchparams);
  const gamename = usePathname();
  console.log("data1", data);
  const gamename1 = gamename ? gamename.split("/").pop() : null;

  const getGameData = async () => {
    try {
      console.log(".name", gamename1);
      const response = await axios.get(
        `${Url}/user/gamebyname/${gamename1.toString().toUpperCase()}`
      );
      // console.log(response?.data?.data[0], "res");
      console.log("responsegame", response?.data?.data[0]);
      setData(response?.data?.data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getGameData();
    window.scrollTo(0, 0);
  }, [gamename]);
  console.log("game detail page");

  const cleanedData = data?.name?.replace(/[-/]/g, " ");
  console.log("Cleaned data:", cleanedData);

  const handleRedirect = (id) => {
    console.log("id123", id);
    // router.push(`/Games/Games.js`);
    router.push(`/${id?.path}`);
  };

  let a = "";
  if (typeof window !== "undefined") {
    a = window.location.href;
  }
  console.log("apath", a);

  const fbUrl = a;
  const twitterUrl = a;
  const wpUrl = a;
  const mailUrl = a;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: 1,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      formData?.name === "" ||
      formData?.email === "" ||
      formData?.message === ""
    ) {
      alert("Please flied all details!");
    } else if (
      !formData?.email ||
      reg.test(formData?.email) === false
    ) {
      alert("Email Field is Invalid");
    } else {
      let body = {
        ...formData,
        gameId: data._id,
      };
      axios
        .post(`${Url}/user/contect`, body)
        .then((response) => {
          // Handle the response
          alert("Message Sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setOpen(false);
        })
        .catch((error) => {
          // Handle the error
          alert(error);
          console.error(error);
        });
    }
  };

  console.log('data?.description', data?.descripiton)
  return (
    <>
      <Header />
      <div className="bg-gamebackground flex md:flex-col py-16 px-96 xxl:px-10 lg:px-10  text-[#abb7c4]  pt-28">
        <div className="mr-7">
          <img
            // src={gameimg}
            src={`${Bucket}${data?.thumbnail}`}
            className="w-[360px]  h-[360px] rounded-[8px] md:mx-auto"
          />
          <div className="text-center px-[18px] py-[18px] flex flex-col bg-[#020D18] border border-[#0C1C2C]">
            <div
              onClick={() => handleRedirect(data)}
              className=" bg-[#dd003f] text-white py-[13px] cursor-pointer px-[23px] rounded"
            >
              PLAY GAME
            </div>
          </div>
        </div>

        <div className="w-2/3 md:w-full">
          <div className="text-[36px] text-[#ABB7C4] font-semibold mb-[15px]">
            {/* {data?.name} */}
            {cleanedData}
            {/* TILTING MAZE  */}
            <span className="text-[24px] font-light text-[#4f5b68]">
              {data?.year}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-2 mb-4 group">
                <LuShare className="text-[#dd003f]" />
                <span className="text-[14PX] text-[#dd003f] mr-[35px] ">
                  SHARE
                </span>
                <div className="bg-[#dd003f] text-white flex w-fit px-3 py-3 gap-3 opacity-0 group-hover:opacity-100">
                  <FacebookShareButton url={fbUrl}>
                    <BsFacebook />
                  </FacebookShareButton>
                  <TwitterShareButton url={twitterUrl}>
                    <BiLogoTwitter />
                  </TwitterShareButton>
                  <EmailShareButton url={mailUrl}>
                    <MdMail />
                  </EmailShareButton>
                  <WhatsappShareButton url={wpUrl}>
                    <FaWhatsapp />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>

            <div className="cursor-pointer" onClick={handleOpen}>
              <BsChatLeftDots className="text-[#dd003f]" />
            </div>
          </div>

          <div className="flex items-center justify-start border-[#405266] border-t-2 border-b-2">
            <div className="flex py-5 px-3 items-center">
              <AiFillStar className="text-[#f5b50a] text-2xl mr-1" />
              <span>
                {data?.rate}
                <span className="text-[14px] font-light text-[#4f5b68]">
                  /10
                </span>
              </span>
            </div>
            <div className="border-l-2 border-[#405266] h-16 pt-5 pl-3">
              Number of plays : {data?.totalreview}+
            </div>
          </div>

          {/* <div className="gap-8 mt-10 flex mb-5">
            <div className="text-[#DCF836] text-[18px] font-semibold border-[#DCF836] border-b-2 pb-3">
              OVERVIEW
            </div>
            <div className="text-[#ABB7C4] text-[18px] font-semibold">
              MEDIA
            </div>
          </div> */}
          <div>
            <ul class="gap-8 mt-10 flex mb-5">
              <li
                className={
                  activeTab === "overview"
                    ? "text-[#DCF836] border-[#DCF836] border-b-2 pb-3"
                    : "text-[#ABB7C4]"
                }
                onClick={() => setActiveTab("overview")}
              >
                <a className="text-[18px] font-semibold cursor-pointer">Overview</a>
              </li>
              <li
                className={
                  activeTab === "media"
                    ? "text-[#DCF836] border-[#DCF836] border-b-2 pb-3"
                    : "text-[#ABB7C4]"
                }
                onClick={() => setActiveTab("media")}
              >
                <a className="text-[18px] font-semibold cursor-pointer"> Media</a>
              </li>
            </ul>

            <div>
              <div className="flex w-[100%]">
                {/* <p className="text-[#ABB7C4] text-[14px] pr-10 font-light leading-[24px]">
                  {data?.descripiton}
                </p> */}
                <p className="text-[#ABB7C4] text-[14px] pr-10 font-light leading-[24px] w-[100%]">
                {activeTab === "overview" ? data?.descripiton : "No media available"}
                </p>

                <div className="">
                  <div className="mb-2">Plot Keywords:</div>
                  {data?.tag &&
                    data?.tag.map((m, d) => {
                      return (
                        <div className="bg-[#233A50] px-2 rounded mb-1 w-fit text-[14px] ">
                          <a href="#">{m}</a>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* <div
                 className="flex"
              >
                <p className="text-[#ABB7C4] text-[14px] pr-10 font-light leading-[24px]">
                  No media available
                </p>

                <div className="w-full">
                  <div className="mb-2">Plot Keywords:</div>
                  {data?.tag &&
                    data?.tag.map((m, d) => {
                      return (
                        <div className="bg-[#233A50] px-2 rounded mb-1 w-fit text-[14px]">
                          <a href="#">{m}</a>
                        </div>
                      );
                    })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="absolute top-[25%] left-[40%] w-[400px] bg-white p-[32px]">
            <h2 className="text-[28px] font-semibold">
              Report This Game!
            </h2>
            <div class="grid gap-3">
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                // value={search}
                className="border border-black mt-[10px] mr-[10px] px-3 py-3"
                placeholder="Your Name"
                // onChange={(e) => setSearch(e.target.value)}
              />
              <input
                type="text"
                name="email"
                // value={search}
                placeholder="Your Email"
                className="border border-black mt-[10px] mr-[10px] px-3 py-3"
                value={formData.email}
                onChange={handleChange}
                // onChange={(e) => setSearch(e.target.value)}
              />
              <textarea
                // value={search}
                className="border border-black mt-[10px] mr-[10px] px-3 py-3"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                // onChange={(e) => setSearch(e.target.value)}
              />
              {/* <ReCAPTCHA
                // sitekey="6LfaHIEmAAAAAEw_5j1kx9524UPf_lOH8pR5ts0a"
                // sitekey="6LdywY0mAAAAAFGdlxT7ChQj9ngPxu3Kn6TOa9X2"
                sitekey="6LdNZJMmAAAAAK0Ncd2mwRccjJ7gV0Yn_PTJpKLU"
                onChange={onChange}
              /> */}
              <button
                // disabled={!verified}
                onClick={handleSubmit}
                className="bg-[#dd003f]  rounded-lg px-5 py-3 text-white"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>

      <GameSection />
      <Footer />
    </>
  );
};

export default GameDetails;
