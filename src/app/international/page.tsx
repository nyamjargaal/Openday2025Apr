"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from "../../assets/international/Slide1.png"
import slide2 from "../../assets/international/Slide2.png"
import slide3 from "../../assets/international/Slide3.png"
import slide4 from "../../assets/international/Slide4.png"
import slide5 from "../../assets/international/Slide5.png"
import slide6 from "../../assets/international/Slide6.png"
import slide7 from "../../assets/international/Slide7.png"
import slide8 from "../../assets/international/Slide8.png"
import slide9 from "../../assets/international/Slide9.png"
import slide10 from "../../assets/international/Slide10.png"
import slide11 from "../../assets/international/Slide11.png"
import slide12 from "../../assets/international/Slide12.png"
import slide13 from "../../assets/international/Slide13.png"
import slide14 from "../../assets/international/Slide14.png"
import slide15 from "../../assets/international/Slide15.png"
import slide16 from "../../assets/international/Slide16.png"



const International = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };


  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4 items-center">
 
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 оны хичээлийн жил 
ОУ-ын шалгалтуудын оноо 
  </p>
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
      <Image className=" rounded-xl" src={slide15} width={300} alt="Шилдэг сургууль" />
      <Image className=" rounded-xl" src={slide16} width={300} alt="Шилдэг сургууль" />
    
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
