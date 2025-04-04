"use client";
import React from "react";
import { useRouter } from "next/navigation";
import shildeg from "../../assets/shildeg.png";
import Image from "next/image";
import { BackArrow } from "@/assets/icons/backArrow";
const Dund = () => {
  const router = useRouter();


  const handleDund8a = () => {
    router.push("/dund/dund8a");
  };

  const handleDund8b = () => {
    router.push("/dund/dund8b");
  };

  const handleDund7a = () => {
    router.push("/dund/dund7a");
  };
  const handleDund7b = () => {
    router.push("/dund/dund7b");
  };

  const handleDund6a = () => {
    router.push("/dund/dund6a");
  };

  const handleDund6b = () => {
    router.push("/dund/dund6b");
  };

  const handleDund6c = () => {
    router.push("/dund/dund6c");
  };

  const handleBaga5a = () => {
    router.push("/dund/dund5a");
  };

  const handleBaga5b = () => {
    router.push("/dund/dund5b");
  };

  const handleBaga5c = () => {
    router.push("/dund/dund5c");
  };

  const handleBaga5d = () => {
    router.push("/dund/dund5d");
  };


  const handleHomePage = () => {
    router.push("/");
  };
  return (
    <div className=" flex flex-col w-screen h-screen items-center p-8 gap-6">
      <div className=" flex flex-col gap-6  items-center">
        <Image
          src={shildeg}
          width={200}
          alt="Шилдэг сургууль"
          onClick={handleHomePage}
        />
      </div>
      <div className=" flex gap-5">
        <div className=" flex flex-col gap-5 w-[120px]">
      
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleDund8a}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              9a
            </button>
          </div>

          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleDund8b}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              9b
            </button>
          </div>
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleDund7a}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              8a
            </button>
          </div>
          <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleDund7b}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                8b
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleDund6a}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                7a
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleDund6b}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                7b
              </button>
            </div>
        </div>

        <div>
          <div className=" flex flex-col gap-5 w-[120px]">
       
 

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleDund6c}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                7c
              </button>
            </div>
            <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga5a}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              6a
            </button>
          </div>
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga5b}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              6b
            </button>
          </div>
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga5c}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              6c
            </button>
          </div>

       
          </div>
        </div>
      </div>

      <div
        className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] w-40"
        onClick={handleHomePage}
      >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow />
          Буцах
        </button>
      </div>
    </div>
  );
};

export default Dund;
