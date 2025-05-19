"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";


const Teachers = () => {

  const router = useRouter();

  const handleHomePage = () => {router.push("/");};
  const handleBuzan = () => {router.push("/teachers/buzan"); };
  const handleNuzan = () => {router.push("/teachers/nuzan"); };
  const handleGkhzan = () => {router.push("/teachers/gkhzan"); };
  const handleBazan = () => {router.push("/teachers/bazan"); };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">
    
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleBuzan}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> БУЗАН </button>
        </div>
        
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleNuzan}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> НУЗАН </button>
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleGkhzan}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> ГХЗАН </button>
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleBazan}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> БАЗАН </button>
        </div>

        <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleHomePage}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow />  Буцах </button>
        </div>
          
     </div>

    </div>
  );
};

export default Teachers;
