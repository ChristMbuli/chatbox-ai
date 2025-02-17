import React from 'react'
import Avatar from './Avatar'
import { Button } from '@/components/ui/button'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import { Link } from 'react-router-dom';


const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }
`
const HomePage = () => {
  return (
    <main
    className="min-h-screen flex items-center justify-center"
    style={{
      background: "radial-gradient(circle at center, #1E40AF, #000000)",
    }}
  >
    <style jsx global>
      {backgroundStyle}
    </style>
    <div className="bg-pattern"></div>
    <div className="content w-full">
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
            SUP'RH - AI (ChatBox)
          </h2>
        </div>
        <div>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Bienvenue sur SUP'RH - AI, le chatbot qui vous aide à trouver votre stage de rêve. Rejoignez notre liste d'attente pour être parmi les premiers à l'utiliser.   
          </p>
        </div>
        <div className="w-full">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            <Link to={"/chatbox"} className="flex items-center cursor-pointer"><span>Commencer</span> <GoArrowUpRight/></Link>
          </Button>
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex -space-x-2 mr-4">
              <Avatar initials="FK" index={0} />
              <Avatar initials="AS" index={1} />
              <Avatar initials="MK" index={2} />
            </div>
            <p className="text-white font-semibold">Le Membre de l'équipe</p>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
    </div>
   
  </main>
  )
}

export default HomePage
