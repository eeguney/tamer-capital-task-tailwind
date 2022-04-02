import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black py-8 px-32 gap-6 pb-12 mt-12">
      <div className="flex justify-center lg:justify-between">
      <Link href="/">
        <a>
          <Image src="/images/logo-white.png" alt="Logo" width={167} height={38} />
        </a>
      </Link>
      <nav className="hidden lg:flex gap-5">
        <li className="text-sm font-bold list-none text-white">
          <Link href="/"><a>HAKKIMIZDA</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-white">
          <Link href="/"><a>ÇALIŞMALARIMIZ</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-white">
          <Link href="/yolculugabasla"><a>YOLCULUĞA BAŞLA</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-white">
          <Link href="/"><a>İLETİŞİM</a></Link>
        </li>
      </nav>
      </div>
      <div className="social-links justify-center lg:justify-start flex gap-8">
      <li className="list-none">
        <Link href="/">
          <a>
            <Image
              src="/images/facebook-icon-fill.png"
              alt="facebook icon"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </li>
      <li className="list-none">
        <Link href="/">
          <a>
            <Image
              src="/images/twitter-icon-fill.png"
              alt="twitter icon"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </li>
      <li className="list-none">
        <Link href="/">
          <a>
            <Image
              src="/images/instagram-icon-fill.png"
              alt="instagram icon"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </li>
      <li className="list-none">
        <Link href="/">
          <a>
            <Image
              src="/images/youtube-icon-fill.png"
              alt="youtube icon"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </li>
    </div>
    </footer>
  );
};

export default Footer;
