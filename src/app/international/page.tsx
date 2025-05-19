"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from "../../assets/international/1.png"
import slide2 from "../../assets/international/2.png"
import slide3 from "../../assets/international/3.png"
import slide4 from "../../assets/international/4.png"
import slide5 from "../../assets/international/5.png"




const International = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p>Sasmo & Amo & Vanda</p>
      <Image className=" rounded-xl" src={slide1} width={300} alt="Шилдэг сургууль" />
      <p className=" text-center">Sasmo 2024 - 2025</p>
      <Image className=" rounded-xl" src={slide2} width={300} alt="Шилдэг сургууль" />
      <p className=" text-center">Amo 2024 - 2025</p>
      <Image className=" rounded-xl" src={slide3} width={300} alt="Шилдэг сургууль" />
      <p className=" text-center">Vanda 2024 - 2025</p>
      <Image className=" rounded-xl" src={slide4} width={300} alt="Шилдэг сургууль" />
      <Image className=" rounded-xl" src={slide5} width={300} alt="Шилдэг сургууль" />
    
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleHomePage} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default International;
