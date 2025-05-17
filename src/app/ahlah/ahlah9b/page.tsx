"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/9b/1.png";
import zurag2 from "../../../assets/9b/2.png";
import zurag3 from "../../../assets/9b/3.png";
import zurag4 from "../../../assets/9b/4.png";
import zurag5 from "../../../assets/9b/5.png";
import zurag6 from "../../../assets/9b/6.png";
import zurag7 from "../../../assets/9b/7.png";
import zurag8 from "../../../assets/9b/8.png";
import zurag9 from "../../../assets/9b/9.png";
import zurag10 from "../../../assets/9b/10.png";
import zurag11 from "../../../assets/9b/11.png";
import zurag12 from "../../../assets/9b/12.png";
import zurag13 from "../../../assets/9b/13.png";
import zurag14 from "../../../assets/9b/14.png";
import zurag15 from "../../../assets/9b/15.png";
import zurag16 from "../../../assets/9b/16.png";


const Ahlah9b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleAhlah = () => { router.push("/ahlah");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">А.Март багштай 9B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">9B анги нийт 22 суралцагчтай ба 8 эрэгтэй, 14 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Б.Гомбо-аюуш </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">4*4 Буухиа тэмцээнд </p>
            <p className="text-center text-[20px] font-semibold"> хүрэл медаль</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">100м гүйлт </p>
            <p className="text-center text-[20px] font-semibold">Эмэгтэй төрөлд хүрэл медаль – Баярцэцэг</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Байрнаас уртын харайлт </p>
            <p className="text-center text-[20px] font-semibold">Эмэгтэй төрөлд хүрэл медаль – Баярцэцэг</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">"Нузан"-ы долоо хоногт "Чингис хаан" гар зургийн уралдаан </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Сурагч Э. Есүй-Үжин - тэргүүн байр</p>
            <p className="text-center text-[20px] font-semibold">HUGO гар зургийн улсын олимпиад тэргүүн байр </p>
            <p className="text-center text-[20px] font-semibold">Үндэсний бичиг "цэвэр бичигтэн" дэд байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Гала тоглолтод анги Happy дуугаар оролцлоо</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">САГСАН БӨМБӨГИЙН СУРГУУЛИЙН АВАРГА ШАЛГАРУУЛАХ ТЭМЦЭЭН</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold">Нийт ахлах ангийн охидын багаас III Байрт шалгарч хүрэл медал авсан</p>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold">VOLLEYBALL</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">ШАТРЫН ТЭМЦЭЭН </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold">Оргих 1-р байр</p>
            <p className="text-center text-[20px] font-semibold">Гомбо-Аюуш  2-р байр</p>
          </div>
        </div>
   
        <p className="text-center border-b pb-2 text-[20px] font-semibold">ДЭЛХИЙН МОД ТАРИХ ӨДӨР </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold">төгсөх ангийн сурагчид сургуулийнхаа хашаанд мод тарьсан.</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Halloween </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold">Halloween үйл ажиллагаанд анги нийтээрээ идэвхтэй хамрагдсан</p>
          </div>
        </div>
   
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleAhlah} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Ahlah9b;
