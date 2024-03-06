import Image from "next/image";
import Link from "next/link";
import {
  FaRegUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[100vh] w-screen">
        <div className="context z-10 flex flex-col gap-10 justify-start py-10 items-center  bg-white h-[70vh] w-96 rounded-xl">
          <h1 className="text-black text-3xl font-extrabold">Login</h1>
          <form action="" className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 relative">
              <div className="custom-input flex items-center justify-start gap-1 px-3 h-12 py-2 relative border-b-[3px]">
                <label htmlFor="" className="absolute -top-4 left-0 text-sm">
                  Username
                </label>
                <FaRegUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Type your username"
                  className="h-full w-full outline-none bg-transparent"
                />
                <span className="labelborder"></span>
              </div>
              <div className="custom-input flex items-center justify-start gap-1 px-3 h-12 py-2 relative border-b-[3px]">
                <label htmlFor="" className="absolute -top-4 left-0 text-sm">
                  Password
                </label>
                <FaLock className="text-gray-500" />
                <input
                  type="password"
                  placeholder="Type your password"
                  className="h-full w-full outline-none bg-transparent"
                />
                <span className="labelborder"></span>
              </div>
              <Link href="#" className="text-xs absolute -bottom-5 right-0">
                Forgot Password
              </Link>
            </div>
            <div className=" w-full h-10 mt-10 flex items-center justify-center text-white font-semibold rounded-xl bg-gradient-to-tl from-[#4e54c8] to-[#b1b4f4]">
              <button>Login</button>
            </div>
          </form>
          <div className=" flex flex-col gap-2">
            <div className="text-[10px] text-center">Or Sign Up Using</div>
            <div className="flex gap-2 justify-center items-center">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="h-[30px] w-[30px] bg-blue-600 rounded-full flex items-center justify-center"
              >
                <FaFacebookF className="text-white " />
              </Link>
              <Link
                href="https://www.Twitter.com"
                target="_blank"
                className="h-[30px] w-[30px] bg-[#60bcf6] rounded-full flex items-center justify-center"
              >
                <FaTwitter className="text-white" />
              </Link>
              <Link
                href="https://www.gmail.com"
                target="_blank"
                className="h-[30px] w-[30px] bg-red-500 rounded-full flex items-center justify-center"
              >
                <FaGoogle className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="area absolute">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
