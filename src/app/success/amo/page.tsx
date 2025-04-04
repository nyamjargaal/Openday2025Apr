"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from ".././../../assets/amoandSasmo/Slide1.png"
import slide2 from ".././../../assets/amoandSasmo/Slide2.png"
import slide3 from ".././../../assets/amoandSasmo/Slide3.png"
import slide4 from ".././../../assets/amoandSasmo/Slide4.png"
import slide5 from ".././../../assets/amoandSasmo/Slide5.png"
import slide6 from ".././../../assets/amoandSasmo/Slide6.png"
import slide7 from ".././../../assets/amoandSasmo/Slide7.png"
import slide8 from ".././../../assets/amoandSasmo/Slide8.png"
import slide9 from ".././../../assets/amoandSasmo/Slide9.png"
import slide10 from ".././../../assets/amoandSasmo/Slide10.png"
import slide11 from ".././../../assets/amoandSasmo/Slide11.png"
import slide12 from ".././../../assets/amoandSasmo/Slide12.png"
import slide13 from ".././../../assets/amoandSasmo/Slide13.png"
import slide14 from ".././../../assets/amoandSasmo/Slide14.png"
import slide15 from ".././../../assets/amoandSasmo/Slide15.png"
import slide16 from ".././../../assets/amoandSasmo/Slide16.png"
import slide17 from ".././../../assets/amoandSasmo/Slide17.png"
import slide18 from ".././../../assets/amoandSasmo/Slide18.png"
import slide19 from ".././../../assets/amoandSasmo/Slide19.png"
import slide20 from ".././../../assets/amoandSasmo/Slide20.png"
import slide21 from ".././../../assets/amoandSasmo/Slide21.png"
import slide22 from ".././../../assets/amoandSasmo/Slide22.png"
import slide23 from ".././../../assets/amoandSasmo/Slide23.png"
import slide24 from ".././../../assets/amoandSasmo/Slide24.png"
import slide25 from ".././../../assets/amoandSasmo/Slide25.png"
import slide26 from ".././../../assets/amoandSasmo/Slide26.png"
import slide27 from ".././../../assets/amoandSasmo/Slide27.png"
import slide28 from ".././../../assets/amoandSasmo/Slide28.png"
import slide29 from ".././../../assets/amoandSasmo/Slide29.png"
import slide30 from ".././../../assets/amoandSasmo/Slide30.png"
import slide31 from ".././../../assets/amoandSasmo/Slide31.png"
import slide32 from ".././../../assets/amoandSasmo/Slide32.png"
import slide33 from ".././../../assets/amoandSasmo/Slide33.png"
import slide34 from ".././../../assets/amoandSasmo/Slide34.png"
import slide35 from ".././../../assets/amoandSasmo/Slide35.png"



const Amo = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleBack = () => {
    router.push("/success");
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
  <Image className=" rounded-xl" src={slide17} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide18} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide19} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide20} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide21} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide22} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide23} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide24} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide25} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide26} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide27} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide28} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide29} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide30} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide31} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide32} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide33} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide34} width={300} alt="Шилдэг сургууль" />
  <Image className=" rounded-xl" src={slide35} width={300} alt="Шилдэг сургууль" />

    
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBack} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Amo;
