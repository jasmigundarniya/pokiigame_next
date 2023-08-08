import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import img from "../images/contact.jpg";
import Image from "next/image";

const contactus = () => {
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
              <h1 className="mb-3">Contact US</h1>
              <div className="text-[18px] text-[#abb7c4] font-light">
                <p className="mb-5">pokiigame@gmail.com</p>
              </div>
            </div>
            <div className="font-semibold text-[32px] text-[#4280bf]">
              <h1 className="mb-3">Copy Right Issue</h1>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                We own the Intellectual Property Rights (IPR) to a
                large number of the games on Pokiigames.com' sites,
                and for certain games, we requested and obtained
                licenses from the copyright holders known to us. For
                some games, we could not find any copyright
                information, or, due to general use on the internet,
                this information can no longer be obtained.
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                Some games may be used under special conditions,
                considering a number of prerequisite constraints.
                These prerequisite constraints are, as far as we could
                determine, met by Pokiigame.
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                We do not change anything in the source code of the
                games. For example, credit holders, brand names, or
                references to websites remain unchanged. If any
                copyright or other IPR that you may have is possibly
                being infringed by/on Pokkigame sites, please inform
                us immediately, thereby providing us with the
                following:
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                i) the electronic or physical signature of the owner
                of the IPR or the person authorized to act on the
                owner's behalf;
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                ii) a description of the IP Right that has been
                infringed, and a description of the infringing
                activity;
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                iii) the location where the unauthorized copy of the
                copyrighted work exists (for example, the URL of the
                Pokiigame website where it is posted, or the name of
                the book in which it has been published, or, in case
                of a registered brand name, an excerpt of such
                register evidencing the registry);
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                iv) a copy of a license in which you are granted the
                right to use and to protect such IPR (if you are not
                the owner of the IPR);
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                v) the identification of the URL or other specific
                location on this site where the material that you
                claim is infringing is located; this information must
                be specific enough to enable us to locate such
                material;
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                vi) your name and full contact details; and vii) a
                statement by you that you have a sincere and honest
                belief that the disputed use is not authorized by the
                copyright owner, its agent, or the law.
              </p>
              <p className="text-[18px] text-[#abb7c4] font-light mb-2">
                Send above details at pokiigame@gmail.com. We will
                review it and will start taking action on it as soon
                as possible. We will reply you on any of the query
                within 7 days.
              </p>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-header p-3 mb-2"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-full bg-header p-3 mb-2"
              />
              <textarea
                rows="6"
                cols="100"
                className="w-full bg-header p-3 mb-2"
                placeholder="Your Message"
              ></textarea>

              <button className="text-white bg-[#dd003f] rounded-[20px] px-[25px] py-[11px] font-[600] text-[14px]">
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactus;
