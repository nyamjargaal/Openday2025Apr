"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from "../../../assets/vanda/Slide1.png"
import slide2 from "../../../assets/vanda/Slide2.png"
import slide3 from "../../../assets/vanda/Slide3.png"
import slide4 from "../../../assets/vanda/Slide4.png"
import slide5 from "../../../assets/vanda/Slide5.png"
const Vanda = () => {

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

export default Vanda;
