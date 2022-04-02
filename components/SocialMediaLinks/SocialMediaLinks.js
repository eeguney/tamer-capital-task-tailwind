import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaLinks = ({ fill }) => {
  return (
    <div className="social-links flex justify-center gap-8 lg:flex-col lg:gap-4 lg:top-0 lg:bottom-0 lg:left-12 lg:m-auto lg:fixed">
      <li className="list-none">
        <Link href="/">
          <a>
            <Image
              src={`${fill ? "/images/facebook-icon-fill.png" : "/images/facebook-icon.png"}`}
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
              src={`${fill ? "/images/twitter-icon-fill.png" : "/images/twitter-icon.png"}`}
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
              src={`${fill ? "/images/instagram-icon-fill.png" : "/images/instagram-icon.png"}`}
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
              src={`${fill ? "/images/youtube-icon-fill.png" : "/images/youtube-icon.png"}`}
              alt="youtube icon"
              width={24}
              height={24}
            />
          </a>
        </Link>
      </li>
    </div>
  );
};

export default SocialMediaLinks;
