"use client"

import { useContext } from "react";
import { About } from "../components/About";
import { BackToTopBtn } from "../components/BackToTopBtn";
import { Cars } from "../components/Cars";
import { Cta } from "../components/Cta";
import { Hero } from "../components/Hero";
import { Testimonial } from "../components/Testimonial";
import { Why } from "../components/Why";
import { AuthContext } from "../context/auth";
import { Brands } from "../components/Brands";

export default function Home() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
    <main
      className="max-w-[1920px] bg-white 
    mx-auto relative overflow-hidden"
    >
      
      <Hero />
      <Brands/>
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      
      <BackToTopBtn />
      {/* <div className="h-[2000px]"></div> */}
    </main>
  )
}
