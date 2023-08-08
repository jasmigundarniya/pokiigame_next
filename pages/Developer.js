import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import img from "../images/img2.jpg";
import Image from "next/image";

const Developer = () => {
  return (
    <>
      <Header />

      <div>
        <div className="bg-gamebackground text-[#abb7c4] pt-20">
          <div className="flex flex-wrap px-96 py-10 xxl:px-10 ">
            <Image src={img} className="h-[45vh] w-[100%] object-cover" />
            <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
                <h1>Developers - PokiiGame</h1>
              </div>
              <div className="text-[18px]">
                <p className="mb-2">
                  PokiiGame is a professional game development studio focusing
                  on games. We also offer services for games applications, as
                  well as responsive games. The PokiiGame platform allows
                  developers to upload their content directly within the
                  website, publish it, track it, and even monetize it just like
                  a normal website but with a huge difference. There is a good
                  traffic on pokiigame.com where developer can get traffic
                  easily and can monetize games.
                </p>
              </div>
              <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
                <h1>Contact Us and Join Now</h1>
              <p className="text-[18px] text-[#abb7c4] font-light mt-2">contact@pokiigame.com</p>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Developer;
