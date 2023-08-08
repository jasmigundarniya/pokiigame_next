import Link from "next/link";
import React, { useEffect } from "react";
import mainlogo from "../../images/mainlogo.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Games = () => {

  const gamename = usePathname();
  console.log("gamename",gamename);
    useEffect(() => {
      // getGameData();
      window.scrollTo(0, 0);
    }, [gamename]);
    console.log("game detail page");

  //   let iframePath;
  // if(gamename?.game === 'games' ){
  //   iframePath = `/${gamename?.game}/${gamename?.subfolder}/${gamename?.filename}`
  // }
  // else{
  //   iframePath = `/games/${gamename?.gameCode}/${gamename?.subfolder}`
  // }
  // console.log('iframePath',iframePath);
  
  return (
    <div className="startgame">
      <Link href="/">
        {/* <img
          src={mainlogo}
          width={80}
          style={{
            position: "absolute",
            top: 30,
            left: 20,
            cursor: "pointer",
          }}
        /> */}
        <Image src={mainlogo} width={60} height={40}  
        style={{
            position: "absolute",
            top: 30,
            left: 20,
            cursor: "pointer",
          }} />
      </Link>
      {/* <iframe src='/games/Gamecode38/index.html' title="Game" /> */}
      <iframe src={iframePath} title="Game" />
    </div>
  );
};

export default Games;
