"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/7b/1.png";
import zurag2 from "../../../assets/7b/2.png";
import zurag3 from "../../../assets/7b/3.png";
import zurag4 from "../../../assets/7b/4.png";
import zurag5 from "../../../assets/7b/5.png";
import zurag6 from "../../../assets/7b/6.png";
import zurag7 from "../../../assets/7b/7.png";
import zurag8 from "../../../assets/7b/8.png";
import zurag9 from "../../../assets/7b/9.png";
import zurag10 from "../../../assets/7b/10.png";



const Dund7b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Б.Содномцэрэн багштай 7B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">7B анги нийт 18 суралцагчтай ба 9 эрэгтэй, 9 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Б.Баярт-од </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800"> Эмэгтэй буухиа уралдаанд: <span className=" text-red-700">Алтан медаль</span></p>
            <p className="text-center text-[20px] font-semibold"> <span className=" text-blue-700">Сурагчид: </span><span className=" text-[16px]">М.Сарангэрэл, Г.Анирцэцэг, Б.Энххатан,  О.Оюумаа  </span> </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">100 метрийн эмэгтэй төрөлд: <span className=" text-red-700">Мөнгөн медаль</span></p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800"> эрэгтэй баг Хүрэл медаль хүртсэн</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Мөнхбаатар </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center"> 2024 оны сургуулийн Шилдэг сурагч Алтан медаль </p>
            <p className="text-center"> АМО-2024 олимпиадын хүрэл медаль  </p>
            <p className="text-center"> Сургуулийн Сагсан бөмбөгийн аварга шалгаруулах тэмцээний хүрэл медаль   </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Yunio</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Баянзүрх дүүргийн Монгол хэл бичгийн олимпиадад Монгол бичгийн төрөлд хүрэл медаль </p>
            <p className="text-center">Баянзүрх дүүргийн Монгол бичгийн түргэн уншлагын олимпиадад тусгай байр </p>
            <p className="text-center">Үндэсний бичиг үсгийн өдөрт зориулсан уншлагын уралдаанд Дэд байранд шалгарсан </p>
            <p className="text-center">Намрын спортын наадамд Уртын хариалтын төрөлд хүрэл медаль </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">Н.Бөртэ</p>
            <p className="text-center">2023-2024 оны Олон улсын шинжлэх ухааны Vanda олимпиадад Амжилттай оролцож Мөнгөн медаль  хүртсэн </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Б.Баярт-Од </p>
            <p className="text-center">2023-2024 оны Олон улсын шинжлэх ухааны Vanda олимпиадад Амжилттай оролцож хүрэл медаль </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Н.Өнөмөнхлэй </p>
            <p className="text-center">2023-2024 оны Олон улсын шинжлэх ухааны Vanda олимпиадад Амжилттай оролцож хүрэл медаль </p>
            <p className="text-center">Карл Попперийн мэтгэлцээний нийгэмлэгийн мэтгэлцэгч хүүхэд сертификиад</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">2024 оны “Аmerician Mathematic olympiad”</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Б.Оргил амжилттай оролцож хүрэл медаль</p>
            <p className="text-center">Vanda- шинжлэх ухааны олимпиадны 2-р шатад амжиллтай оролцож сертипикиадаар Б.Баярт-Од, Н.Бөртэ, Н.Өнөмөнхлэй  шагнагдсан</p>
        </div>
  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Н.Бөртэ </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2023-2024 оны Олон улсын шинжлэх ухааны Vanda олимпиадад Амжилттай оролцож Мөнгөн медаль  хүртсэн </p>
            <p className="text-center">Vanda- шинжлэх ухааны олимпиадны 2-р шатад амжиллтай оролцож сертипикиадаар </p>
            <p className="text-center">Байт харвааны “Amateur archery-2025” тэмцээний групп шатны харваанд Алтан медаль хүртсэн</p>
        </div>
  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Мишээл </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ПИ тооны өдөр зориулсан шатрын тэмцээнд  1-р байранд орсон</p>
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

export default Dund7b;
