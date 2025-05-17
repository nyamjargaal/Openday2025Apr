"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/8b/1.png";
import zurag2 from "../../../assets/8b/2.png";
import zurag3 from "../../../assets/8b/3.png";
import zurag4 from "../../../assets/8b/4.png";
import zurag5 from "../../../assets/8b/5.png";
import zurag6 from "../../../assets/8b/6.png";
import zurag7 from "../../../assets/8b/7.png";
import zurag8 from "../../../assets/8b/8.png";
import zurag9 from "../../../assets/8b/9.png";
import zurag10 from "../../../assets/8b/10.png";
import zurag11 from "../../../assets/8b/11.png";
import zurag12 from "../../../assets/8b/12.png";
import zurag13 from "../../../assets/8b/13.png";
import zurag14 from "../../../assets/8b/14.png";
import zurag15 from "../../../assets/8b/15.png";
import zurag16 from "../../../assets/8b/16.png";
import zurag17 from "../../../assets/8b/17.png";
import zurag18 from "../../../assets/8b/18.png";
import zurag19 from "../../../assets/8b/19.png";
import zurag20 from "../../../assets/8b/20.png";
import zurag21 from "../../../assets/8b/21.png";
import zurag22 from "../../../assets/8b/22.png";
import zurag23 from "../../../assets/8b/23.png";
import zurag24 from "../../../assets/8b/24.png";
import zurag25 from "../../../assets/8b/25.png";
import zurag26 from "../../../assets/8b/26.png";
import zurag27 from "../../../assets/8b/27.png";
import zurag28 from "../../../assets/8b/28.png";
import zurag29 from "../../../assets/8b/29.png";
import zurag30 from "../../../assets/8b/30.png";


const Dund8b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Э.Ариунгэрэл багштай 8B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">8B анги нийт 24 суралцагчтай ба 13 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Ц.Энэрэл </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
  
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
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
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleDund} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Dund8b;
