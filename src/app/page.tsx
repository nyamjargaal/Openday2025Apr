"use client";
import { useRouter } from "next/navigation";
import shildeg from "../assets/shildeg.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handlePushBaga = () => {router.push("/baga");};
  const handlePushDund = () => {router.push("/dund");};
  const handlePushAhlah = () => {router.push("/ahlah"); };
  const handleHomePage = () => {router.push("/");};
  const handleTetgeleg = () => {router.push("/tetgeleg");};
  const handleInternational = () => {router.push("/international");};
  const handleAmjilt = () => {router.push("/success");};
  const handleOlimpiad = () => {router.push("/olimpiad");};

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-8 gap-10 ">
      <div className=" flex flex-col gap-6  items-center">
        <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
        <h1 className=" font-extrabold text-2xl text-[#ed1c24] text-center"> 2024 - 2025 оны хичээлийн жил  </h1>
      </div>
      <div className=" flex gap-4 flex-col">
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handlePushAhlah} >
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Ахлах Бүлэг</button>
        </div>
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handlePushDund}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Дунд Бүлэг</button>
        </div>
        <div  className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handlePushBaga}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Бага Бүлэг </button>
        </div>
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] mb-2" onClick={handleTetgeleg}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">Тэтгэлэг </button>
        </div>
        
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleInternational}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            Sasmo & Amo & Vanda
          </button>
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleOlimpiad}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
            Олимпиад
          </button>    
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleAmjilt}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
           Багш нар
          </button>    
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleAmjilt}>
          <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center ">
           Дугуйлан секц
          </button>    
        </div>
      </div>
    </div>
  );
}
