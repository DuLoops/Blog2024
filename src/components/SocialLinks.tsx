import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


export default function SocialLinks() {
  return (
    <div className='flex flex-row justify-around p-2 px-10 '>
        <a href='https://www.instagram.com/dujinblog/' target='_blank'><FaInstagram size={50}/></a>
        <a href='https://www.youtube.com/@DujinKim' ><FaYoutube size={50} /></a>
        {/* <Link href='https://twitter.com/'><FaXTwitter className='size-4xl' /></Link> */}
    </div>
  )
}
