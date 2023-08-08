import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import img from "../images/img1.jpg";
import Image from "next/image";

const Affiliates = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-gamebackground text-[#abb7c4] pt-20">
          <div className="flex flex-wrap px-96 py-10 xxl:px-10 ">
            <Image
              src={img}
              className="h-[45vh] w-[100%] object-cover"
            />
            <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
              <h1>Affiliate Program for Pokii Game</h1>
            </div>
            <div className="text-[18px]">
              <p className="mb-2">
                We welcomes web and mobile app developers to drive
                traffic to our website and start earning money through
                your traffic.
              </p>
              <p className="mb-2">
                We are biggest library of HTML5 games, optimized for
                both desktop and mobile devices. You can easily choose
                a few games or set up your own gaming portal as you
                wish. We are working hard to make sure all your
                demands are met – especially in terms of content and
                marketing. We strive to make sure our partners get the
                best possible results
              </p>
            </div>
            <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
              <h1>Contact Us and Join our affiliate program</h1>
              <p className="text-[18px] text-[#abb7c4] font-light">
                pokiigame@gmail.com
              </p>
            </div>

            <div className="mt-8 font-semibold text-[32px] text-[#4280bf]">
              <h1 className="mb-2">About Pokii Game</h1>
            
            <div className="text-[18px] text-[#abb7c4] font-light">
              <p className="mb-2">
                PokiiGame has a team of 25 people working on our
                gaming platform. Our mission is simple - to create a
                browser-gaming platform that works seamlessly for
                users around the world, and rewards developers both
                big and small.
              </p>
              <p className="mb-2">
                Our games are playable on desktop, tablet and mobile
                so you can enjoy them at school, at home or on the
                road. Every month millions of gamers from all over the
                world play their favorite games on ThopGames. Our goal
                is to create the ultimate online playground. Free and
                open to all.
              </p>
              <p className="mb-2">
                We're a team of makers, techies, adventurers – and
                some gamers too. We’re kids of all ages, and love what
                we do.
              </p>
              <p className="mb-2">
                Just load up your favorite games instantly in your web
                browser and enjoy the experience.
              </p>
              <p className="mb-2">
                You can play our games on desktop mobile devices. That
                includes everything from desktop PCs, laptops, and
                Chromebooks, to the latest smartphones and tablets
                from Apple and Android.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Affiliates;
