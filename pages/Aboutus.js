import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import img from "../images/img3.jpg";
import Image from "next/image";

const Aboutus = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-gamebackground text-[#abb7c4] pt-20">
          <div className="flex flex-wrap px-96 py-10  xxl:px-10 ">
            <Image
              src={img}
              className="h-[45vh] w-[100%] object-cover"
            />
            <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
              <h1>About Pokii</h1>
            </div>
            <div className="text-[18px]">
              <p className="mb-2">
                Welcome to Pokiigame.com, web based gaming platform!
                With over 1000+ games accross 25+ categories we
                provide exllent gaming experience to users.
              </p>
              <p className="mb-2">
                At Pokiigame.com, we understand the power of gaming to
                create memorable experiences and forge connections
                between people. Whether you're a fan of cars or bike
                racing, adventure games, actionable and thrilling
                games, we've covered everything for you.
              </p>
            </div>
            <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
              <h1>Our Mission</h1>
              <p className="text-[18px] text-[#abb7c4] font-light">
                Our mission is to provide smooth gaming experience
                where users can instant play to all our games without
                downloads, login, popups or other distractions.
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light">
                We pride ourselves on delivering a seamless and
                user-friendly gaming experience. Our website is
                designed with intuitive navigation and responsive
                interfaces, ensuring that you can dive into your
                favorite games with just a few clicks. We also
                prioritize your safety and security, implementing
                robust measures to protect your personal information
                and provide a safe environment for all users.
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light">
                Pokii Game is more than just a gaming platform; it's a
                vibrant community. Join our growing community of
                gamers, where you can connect with like-minded
                individuals, share your achievements, and participate
                in lively discussions. Engage in friendly
                competitions, collaborate with fellow players, or
                simply find a place to relax and have fun.
              </p>
            </div>

            <div className="mt-8 font-semibold text-[32px] text-[#4280bf]">
              <h1 className="mb-2">Have any issue?</h1>

              <div className="text-[18px] text-[#abb7c4] font-light">
                <p className="mb-2">
                  Our team of passionate people is dedicated to
                  providing you with exceptional customer support. If
                  you ever encounter any issues or have any questions,
                  our support team is here to assist you every step of
                  the way. We value your feedback and constantly
                  strive to improve our platform based on your
                  suggestions and needs.
                </p>
                <p className="mb-2">
                  So, whether you're seeking an adrenaline rush, a
                  mental challenge, or simply a momentary escape,
                  Pokiigame.com is your go-to destination. Prepare to
                  embark on unforgettable gaming adventures and unlock
                  a world of limitless possibilities. Join us today
                  and let the games begin!
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

export default Aboutus;
