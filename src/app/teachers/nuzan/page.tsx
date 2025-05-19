"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from ".././../../assets/teachers/nuzan/1.png"
import slide2 from ".././../../assets/teachers/nuzan/2.png"
import slide3 from ".././../../assets/teachers/nuzan/3.png"
import slide4 from ".././../../assets/teachers/nuzan/4.png"
import slide5 from ".././../../assets/teachers/nuzan/5.png"
import slide6 from ".././../../assets/teachers/nuzan/6.png"
import slide7 from ".././../../assets/teachers/nuzan/7.png"
import slide8 from ".././../../assets/teachers/nuzan/8.png"
import slide9 from ".././../../assets/teachers/nuzan/9.png"
import slide10 from ".././../../assets/teachers/nuzan/10.png"
import slide11 from ".././../../assets/teachers/nuzan/11.png"
import slide12 from ".././../../assets/teachers/nuzan/12.png"
import slide13 from ".././../../assets/teachers/nuzan/13.png"
import slide14 from ".././../../assets/teachers/nuzan/14.png"


const Nuzan = () => {

  const router = useRouter();
  const handleHomePage = () => {router.push("/");};
  const handleBack = () => {router.push("/teachers");};

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
      <p className="text-center border-b pb-2 text-[20px] font-semibold">Нийгмийн ухааны заах аргын нэгдэл</p>
        <Image className=" rounded-xl" src={slide1} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide2} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide3} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide4} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide5} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide6} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide7} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide8} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide9} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide10} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide11} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide12} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide13} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide14} width={300} alt="Шилдэг сургууль" />
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBack} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"><BackArrow/> Буцах</button>
      </div>
    </div>
  );
};

export default Nuzan;
