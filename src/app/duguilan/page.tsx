"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";

const Duguilan = () => {

  const router = useRouter();

  const handleHomePage = () => {router.push("/");};
  const handleLetsSpeak = () => {router.push("/duguilan/letsspeakenglish"); };
  const handleCanvas6 = () => {router.push("/duguilan/canvasart4"); };
  const handleCanvas3 = () => {router.push("/duguilan/canvasart2"); };
  const handleHatgamal = () => {router.push("/duguilan/hatgamal"); };
//   const handleWeb = () => {router.push("/duguilan/web"); };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">
    
        {/* <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleWeb}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Вэб сайт хөгжүүлэх </button>
        </div> */}
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleLetsSpeak}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Lets Speak English / Grade 2 / </button>
        </div>
        
        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleCanvas6}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> CanvasArt / Grade 4-6 / </button>
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleCanvas3}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> CanvasArt / Grade 2-3 / </button>
        </div>

        <div className=" p-5 bg-[#222f6e] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleHatgamal}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center "> Зугаатай Хатгамал </button>
        </div>

        <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba]" onClick={handleHomePage}>
            <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow />  Буцах </button>
        </div>
          
     </div>

    </div>
  );
};

export default Duguilan;
