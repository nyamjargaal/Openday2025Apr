"use client";
import React from "react";
import { useRouter } from "next/navigation";
import shildeg from "../../assets/shildeg.png";
import Image from "next/image";
import { BackArrow } from "@/assets/icons/backArrow";
const Ahlah = () => {
  const router = useRouter();

  const handleDund9a = () => {
    router.push("/ahlah/ahlah9a");
  };

  const handleDund9b = () => {
    router.push("/ahlah/ahlah9b");
  };

  const handlePushAhlah10a = () => {
    router.push("/ahlah/ahlah10a");
  };

  const handlePushAhlah11a = () => {
    router.push("/ahlah/ahlah11a");
  };

  const handlePushAhlah11b = () => {
    router.push("/ahlah/ahlah11b");
  };

  const handlePushAhlah12a = () => {
    router.push("/ahlah/ahlah12a");
  };

  const handlePushAhlah12b = () => {
    router.push("/ahlah/ahlah12b");
  };

  const handleHomePage = () => {
    router.push("/");
  };
  return (
    <div className=" flex flex-col w-screen h-screen items-center p-8 gap-8">
      <div className=" flex flex-col gap-6  items-center">
        <Image
          src={shildeg}
          width={200}
          alt="Шилдэг сургууль"
          onClick={handleHomePage}
        />
      </div>
      <div className=" flex flex-col gap-5 w-40">
        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handlePushAhlah12a}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            12A
          </button>
        </div>
        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handlePushAhlah12b}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            12B
          </button>
        </div>
        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handlePushAhlah11a}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            11A
          </button>
        </div>

        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handlePushAhlah11b}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            11B
          </button>
        </div>
        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handlePushAhlah10a}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            10A
          </button>
        </div>

        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handleDund9a}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            9a
          </button>
        </div>
        <div
          className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
          onClick={handleDund9b}
        >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            9b
          </button>
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

export default Ahlah;
