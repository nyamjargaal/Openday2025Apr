"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/6c/1.png";
import zurag2 from "../../../assets/6c/2.png";
import zurag3 from "../../../assets/6c/3.png";
import zurag4 from "../../../assets/6c/4.png";
import zurag5 from "../../../assets/6c/5.png";


const Dund6c = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">З.Тамираа багштай 6c ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">6c анги нийт 24 суралцагчтай ба 11 эрэгтэй, 13 эмэгтэй</p>
          <p className="text-center">Ангийн дарга З.Энэрэл </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн “Сагсан бөмбөгийн аварга”  шалгаруулах тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Охидын баг 1-р байр</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">2024 оны “Урлагийн үзлэг” </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">хамтлаг бүжэг -  2-р байр</p>   

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">найрал дууны тэргүүн байр</p>   
            <p className="text-center font-semibold">Сансрын нисгэгч “Угтагчийн дуу</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Х.Очир-Эрдэнэ </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">2024 оны Шилдэг сургуулийн  оны тэргүүний сурагч  </p>   
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

export default Dund6c;
