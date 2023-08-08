"use client";
import React from "react";
import Image from "next/image";
import Header from "@/pages/Header/Header";
import Blog from "@/pages/Header/Blog";
import GameSection from "@/pages/Header/GameSection";
import Footer from "@/pages/Header/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <GameSection />
      <Blog />
      <Footer />
    </>
  );
}
