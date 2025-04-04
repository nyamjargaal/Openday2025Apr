"use client";
import React from "react";
import { useRouter } from "next/navigation";
import shildeg from "../../assets/shildeg.png";
import Image from "next/image";
import { BackArrow } from "@/assets/icons/backArrow";
const Baga = () => {
  const router = useRouter();


  const handleBaga4d = () => {
    router.push("/baga/baga4d");
  };
  const handleBaga4c = () => {
    router.push("/baga/baga4c");
  };

  const handleBaga4b = () => {
    router.push("/baga/baga4b");
  };

  const handleBaga4a = () => {
    router.push("/baga/baga4a");
  };

  const handleBaga3c = () => {
    router.push("/baga/baga3c");
  };

  const handleBaga3b = () => {
    router.push("/baga/baga3b");
  };

  const handleBaga3a = () => {
    router.push("/baga/baga3a");
  };

  const handleBaga2a = () => {
    router.push("/baga/baga2a");
  };

  const handleBaga2b = () => {
    router.push("/baga/baga2b");
  };

  const handleBaga2c = () => {
    router.push("/baga/baga2c");
  };
  const handleBaga2d = () => {
    router.push("/baga/baga2d");
  };
  const handleBaga1a = () => {
    router.push("/baga/baga1a");
  };
  const handleBaga1b = () => {
    router.push("/baga/baga1b");
  };
  const handleBaga1c = () => {
    router.push("/baga/baga1c");
  };
  const handleBaga1d = () => {
    router.push("/baga/baga1d");
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
        <div className=" flex flex-col gap-5 w-[80px]">

          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga4a}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              4a
            </button>
          </div>
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga4b}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              4b
            </button>
          </div>
          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleBaga4c}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              4c
            </button>
          </div>
          <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleBaga4d}>
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                4d
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga3a}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                3a
              </button>
            </div>
        </div>

        <div>
          <div className=" flex flex-col gap-5 w-[80px]">
      
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga3b}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                3b
              </button>
            </div>

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga3c}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                3c
              </button>
            </div>

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga2a}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                2a
              </button>
            </div>

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga2b}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                2b
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga2c}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                2c
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className=" flex flex-col gap-5 w-[80px]">
       
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga2d}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                2d
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga1a}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                1a
              </button>
            </div>

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga1b}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                1b
              </button>
            </div>

            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga1c}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                1c
              </button>
            </div>
            <div
              className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
              onClick={handleBaga1d}
            >
              <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
                1d
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

export default Baga;
