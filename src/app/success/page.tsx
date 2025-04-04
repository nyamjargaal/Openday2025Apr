"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
const Success = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleAmo = () => {
    router.push("/success/amo");
  };
  const handleDotood = () => {
    router.push("/success/dotood");
  };
  const handleVanda = () => {
    router.push("/success/vanda");
  };



  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">

        
      <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleAmo}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              Amo & Sasmo
            </button>
          </div>

          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleDotood}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              Дотоод олимпиад
            </button>
          </div>

          <div
            className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
            onClick={handleVanda}
          >
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
              Vanda
            </button>
          </div>

          <div
        className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]"
        onClick={handleHomePage}
      >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow />
          Буцах
        </button>
      </div>
          
      </div>
    

    </div>
  );
};

export default Success;
