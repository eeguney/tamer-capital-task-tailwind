import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { drawerToggle } from "../../store/actions/settings";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header flex justify-between items-center p-8 bg-white lg:px-32 sticky top-0 left-0 z-50">
      <Link href="/">
        <a>
          <Image src="/images/logo.png" alt="Logo" width={167} height={38} />
        </a>
      </Link>
      <button
        type="button"
        className="w-6 h-6 lg:hidden"
        onClick={() => dispatch(drawerToggle())}
      >
        <Image src="/images/menubar.png" alt="menubar" width={28} height={28} />
      </button>
      <nav className="hidden lg:flex gap-5">
        <li className="text-sm font-bold list-none text-gray-800">
          <Link href="/"><a>HAKKIMIZDA</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-gray-800">
          <Link href="/fotograflar"><a>FOTOGRAFLAR</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-gray-800">
          <Link href="/"><a>ÇALIŞMALARIMIZ</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-gray-800">
          <Link href="/yolculugabasla"><a>YOLCULUĞA BAŞLA</a></Link>
        </li>
        <li className="text-sm font-bold list-none text-gray-800">
          <Link href="/"><a>İLETİŞİM</a></Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
