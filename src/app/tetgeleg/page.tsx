"use client";
import Image from "next/image";
import shildeg from "../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from "../../assets/tetgeleg/Slide1.png"
import slide2 from "../../assets/tetgeleg/Slide2.png"
import slide3 from "../../assets/tetgeleg/Slide3.png"
import slide4 from "../../assets/tetgeleg/Slide4.png"
import slide5 from "../../assets/tetgeleg/Slide5.png"
import slide6 from "../../assets/tetgeleg/Slide6.png"
import slide7 from "../../assets/tetgeleg/Slide7.png"
import slide8 from "../../assets/tetgeleg/Slide8.png"
import slide9 from "../../assets/tetgeleg/Slide9.png"
import slide10 from "../../assets/tetgeleg/Slide10.png"
import slide11 from "../../assets/tetgeleg/Slide11.png"
import slide12 from "../../assets/tetgeleg/Slide12.png"
import slide13 from "../../assets/tetgeleg/Slide13.png"
import slide14 from "../../assets/tetgeleg/Slide14.png"
import slide15 from "../../assets/tetgeleg/Slide15.png"
import slide16 from "../../assets/tetgeleg/Slide16.png"
import slide17 from "../../assets/tetgeleg/Slide17.png"
import slide18 from "../../assets/tetgeleg/Slide18.png"
import slide19 from "../../assets/tetgeleg/Slide19.png"
import slide20 from "../../assets/tetgeleg/Slide20.png"
import slide21 from "../../assets/tetgeleg/Slide21.png"
import slide22 from "../../assets/tetgeleg/Slide22.png"
const Tetgeleg = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };


  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4 items-center">
 
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> Бидний бахархал </p>
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

export default Tetgeleg;
