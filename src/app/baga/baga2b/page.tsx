"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/2b/1.png";
import zurag2 from "../../../assets/2b/2.png";
import zurag3 from "../../../assets/2b/3.png";
import zurag4 from "../../../assets/2b/4.png";
import zurag5 from "../../../assets/2b/5.png";
import zurag6 from "../../../assets/2b/6.png";
import zurag7 from "../../../assets/2b/7.png";
import zurag8 from "../../../assets/2b/8.png";
import zurag9 from "../../../assets/2b/9.png";




const Baga2b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">З.Нямаа багштай 2B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">2B анги нийт 22 суралцагчтай ба 10 эрэгтэй, 12 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Г.Содбилэг </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
  
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold"> Эрэгтэй </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800"> Байрнаас уртын харайлт </p>
            <p className="text-center text-[20px] font-semibold"> Эрэгтэй төрөлд хүрэл медаль – Э.Амартүвшин </p>
            <p className="text-center text-[20px] font-semibold"> Эмэгтэй төрөлд алтан медаль  - О.Баярмаа</p>
       
        </div>

  


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Baga2b;
