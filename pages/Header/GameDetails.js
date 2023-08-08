import React from "react";
import Image from "next/image";
import gameimg from "../../images/gameimg.png";
import Footer from "./Footer";
import Header from "./Header";
import GameSection from "./GameSection";
import { LuShare } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
// import { useParams } from "react-router-dom/dist";

const GameDetails = () => {

//   const gamename = useParams();

//   const capitalizeWords = (str) => {
//     const words = str.split('-');
//     const capitalizedWords = words.map((word) => {
//       const firstLetter = word.charAt(0).toUpperCase();
//       const restOfWord = word.slice(1).toLowerCase();
//       return `${firstLetter}${restOfWord}`; 
//     });
//     return capitalizedWords.join(' ');
//   };
//   const capitalizedString = capitalizeWords( gamename?.name);
// console.log('capitalizedString', capitalizedString)

  return (
    <>
      <Header />
      <div className="bg-gamebackground flex py-16 px-96 text-[#abb7c4]">
        <div className="mr-7">
          <Image
            src={gameimg}
            className="w-[360px]  h-[360px] rounded-[8px]"
          />
          <div className="text-center px-[18px] py-[18px] flex flex-col bg-[#020D18] border border-[#0C1C2C]">
            <div className=" bg-[#dd003f] text-white py-[13px] px-[23px] rounded">
              PLAY GAME
            </div>
          </div>
        </div>

        <div className="w-2/3">
          <div className="text-[36px] text-[#ABB7C4] font-semibold mb-[15px]">
            TILTING MAZE
            <span className="text-[24px] font-light text-[#4f5b68]">
              2023
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <LuShare className="text-[#dd003f] " />
            <span className="text-[14PX] text-[#dd003f] mr-[35px] ">
              SHARE
            </span>
          </div>

          <div className="flex items-center justify-start border-[#405266] border-t-2 border-b-2">
            <div className="flex py-5 px-3 items-center">
              <AiFillStar className="text-[#f5b50a] text-2xl mr-1"/>
              <span>9<span className="text-[14px] font-light text-[#4f5b68]">/10</span></span>
            </div>
            <div className="border-l-2 border-[#405266] h-16 pt-5 pl-3">Number of plays : 500 +</div>
          </div>

          <div className="gap-8 mt-10 flex mb-5">
            <div className="text-[#DCF836] text-[18px] font-semibold border-[#DCF836] border-b-2 pb-3">OVERVIEW</div>
            <div className="text-[#ABB7C4] text-[18px] font-semibold">MEDIA</div>
          </div>

          <div className="flex">
            <p className="text-[#ABB7C4] text-[14px] pr-10 font-light leading-[24px]">
            Tilting Maze is a captivating puzzle game that will put your skills to the test. Your objective is to navigate a ball through intricate mazes by tilting your device or using joystick controls. With each level, the mazes become more challenging, featuring obstacles, moving platforms, and other interactive elements. The intuitive controls make it easy to guide the ball, but you'll need precision and strategic thinking to avoid pitfalls and reach the goal. Engaging graphics and immersive sound effects enhance the gameplay experience. Whether you're a puzzle enthusiast or simply looking for an addictive and enjoyable game, Tilting Maze will keep you entertained for hours as you strive to conquer each maze and achieve the highest score. Get ready to tilt, roll, and overcome obstacles in this thrilling maze adventure.
            </p>

            <div className="w-full">
              <div className="mb-2">Plot Keywords:</div>
              <p className="bg-[#233A50] px-2 rounded mb-1 w-fit">puzzle</p>
              <p className="bg-[#233A50] px-2 rounded mb-1 w-fit">ballgames</p>
              <p className="bg-[#233A50] px-2 rounded mb-1 w-fit">addictive</p>
            </div>
          </div>

        </div>
      </div>
      <GameSection />
      <Footer />
    </>
  );
};

export default GameDetails;
