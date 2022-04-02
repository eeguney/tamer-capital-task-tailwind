import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { drawerToggle } from "../../store/actions/settings";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const Drawer = ({ drawer }) => {
  const dispatch = useDispatch();
  return (
    <aside
      className={`h-full overflow-y-auto fixed top-0 right-0 w-10/12 bg-black pt-12 z-50 pl-10 lg:hidden transition-all duration-200 ease-linear ${
        drawer ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={() => dispatch(drawerToggle())}
    >
      <nav className="mb-10">
        <li className="text-white list-none text-sm font-bold border-y border-gray-500 py-4">
          <Link href="/" alt="Hakkımda">
            <a>HAKKIMDA</a>
          </Link>
        </li>
        <li className="flex flex-col gap-4 text-white list-none text-sm font-bold border-y border-gray-500 py-4">
          <Link href="/" alt="Hakkımda">
            <a>YOLCULUĞUM</a>
          </Link>
          <Link href="/" alt="Hakkımda">
            <a>SEMİNERLERİM</a>
          </Link>
          <Link href="/" alt="Hakkımda">
            <a>YOLCULUKLARIMIZ</a>
          </Link>
          <Link href="/" alt="Hakkımda">
            <a>FOTOĞRAFLAR</a>
          </Link>
        </li>
        <li className="text-white list-none text-sm font-bold border-y border-gray-500 py-4">
          <Link href="/" alt="Çalışmalarım">
            <a>ÇALIŞMALARIMIZ</a>
          </Link>
        </li>
        <li className="text-white list-none text-sm font-bold border-y border-gray-500 py-4">
          <Link href="/yolculugabasla" alt="Yolculuğa Başka">
            <a>YOLCULUĞA BAŞLA</a>
          </Link>
        </li>
        <li className="text-white list-none text-sm font-bold border-y border-gray-500 py-4">
          <Link href="/" alt="İletişim">
            <a>İLETİŞİM</a>
          </Link>
        </li>
      </nav>
      <SocialMediaLinks fill={true} />
    </aside>
  );
};

export default Drawer;
