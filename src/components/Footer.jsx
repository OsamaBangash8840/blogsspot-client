import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
  } from "react-icons/fa";
import Newsletter from './NewsLetter';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div>
        <Newsletter/>
         <section className="w-full bg-secondary m-auto border-y-2 border-primary grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className="text-primary text-[14px] font-ubuntu text-center">
            Copyright 2024, blogsSpot, All Rights Reserved
          </h1>
        </div>
        <div>
          <Link href='/'>
          <p className="text-primary text-3xl text-center font-ubuntu font-bold">
            blogs
            <span className="text-primary">Spot</span>
          </p>
          </Link>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <FaFacebook className="text-blue-600 size-6" />
          <FaInstagram className="text-red-300 size-6" />
          <FaYoutube className="text-red-600 size-6" />
          <FaTwitter className="text-blue-400 size-6" />
        </div>
      </section>
    </div>
  )
}
