"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../assets/olimpiad/1.png";
import zurag2 from "../../assets/olimpiad/2.png";
import zurag3 from "../../assets/olimpiad/3.png";
import zurag4 from "../../assets/olimpiad/4.png";
import zurag5 from "../../assets/olimpiad/5.png";
import zurag6 from "../../assets/olimpiad/6.png";
import zurag7 from "../../assets/olimpiad/7.png";
import zurag8 from "../../assets/olimpiad/8.png";
import zurag9 from "../../assets/olimpiad/9.png";
import zurag10 from "../../assets/olimpiad/10.png";
import zurag11 from "../../assets/olimpiad/11.png";
import zurag12 from "../../assets/olimpiad/12.png";
import zurag13 from "../../assets/olimpiad/13.png";
import zurag14 from "../../assets/olimpiad/14.png";
import zurag15 from "../../assets/olimpiad/15.png";


const Olimpiad = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};


  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
  
        </div>
  
  

        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleHomePage} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Olimpiad;
