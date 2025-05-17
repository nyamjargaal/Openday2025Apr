"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3d/1.png";
import zurag2 from "../../../assets/3d/2.png";
import zurag3 from "../../../assets/3d/3.png";
import zurag4 from "../../../assets/3d/4.png";
import zurag5 from "../../../assets/3d/5.png";
import zurag6 from "../../../assets/3d/6.png";
import zurag7 from "../../../assets/3d/7.png";
import zurag8 from "../../../assets/3d/8.png";
import zurag9 from "../../../assets/3d/9.png";
import zurag10 from "../../../assets/3d/10.png";
import zurag11 from "../../../assets/3d/11.png";
import zurag12 from "../../../assets/3d/12.png";
import zurag13 from "../../../assets/3d/13.png";
import zurag14 from "../../../assets/3d/14.png";
import zurag15 from "../../../assets/3d/15.png";
import zurag16 from "../../../assets/3d/16.png";
import zurag17 from "../../../assets/3d/17.png";
import zurag18 from "../../../assets/3d/18.png";
import zurag19 from "../../../assets/3d/19.png";
import zurag20 from "../../../assets/3d/20.png";




const Baga3d = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ж.Баасансүрэн багштай 3D ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">3D анги нийт 23 суралцагчтай ба 12 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга А.Ердана </p>
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

export default Baga3d;
