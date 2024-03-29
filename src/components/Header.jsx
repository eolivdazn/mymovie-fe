import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import MenuItem from "@/components/MenuItem";
import SignIn from "@/components/googleSign/signIn";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        {/*<MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />*/}
        <SignIn/>
      </div>
        <div className="flex items-center space-x-5">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="text-xl sm:inline">Not</span>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
