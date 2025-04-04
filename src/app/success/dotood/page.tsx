"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from "../../../assets/dotood/Slide1.png"
import slide2 from "../../../assets/dotood/Slide2.png"
import slide3 from "../../../assets/dotood/Slide3.png"
import slide4 from "../../../assets/dotood/Slide4.png"
import slide5 from "../../../assets/dotood/Slide5.png"
import slide6 from "../../../assets/dotood/Slide6.png"
import slide7 from "../../../assets/dotood/Slide7.png"
import slide8 from "../../../assets/dotood/Slide8.png"
import slide9 from "../../../assets/dotood/Slide9.png"
import slide10 from "../../../assets/dotood/Slide10.png"
import slide11 from "../../../assets/dotood/Slide11.png"
import slide12 from "../../../assets/dotood/Slide12.png"
const Dotood = () => {

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

export default Dotood;
