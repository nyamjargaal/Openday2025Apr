"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/9a/1.png";
import zurag2 from "../../../assets/9a/2.png";
import zurag3 from "../../../assets/9a/3.png";
import zurag4 from "../../../assets/9a/4.png";
import zurag5 from "../../../assets/9a/5.png";
import zurag6 from "../../../assets/9a/6.png";
import zurag7 from "../../../assets/9a/7.png";



const Ahlah9a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleAhlah = () => { router.push("/ahlah");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">МХУЗ Ч.Цээлэй багштай 9a ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">9a анги нийт 22 суралцагчтай</p>
          <p className="text-center">Ангийн дарга Б.Тод-од</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Оны шилдэг сурагч “М. Намуун”</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold"></p>
            <p className="text-center ">Америкийн математикийн олимпиадад(AMO) хүрэл медаль </p>
            <p className="text-center ">Сингапурын олон улсын математикийн олимпиадад(SIMOC) оролцоход тэнцсэн </p>
            <p className="text-center ">ESMUN'25, HISMUN'25, BSUMUN'25-д оролцож (Outstanding Delegate, Honourable Mentions) тус тус шагнал авсан </p>
            <p className="text-center ">9-р ангийн “Оны тэрүүний сурагч” шагнал</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold"></p>
            <p className="text-center ">“Гоцлол бүжиг” сурагч Б. Баянсүлд 2-р байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">И. Цэлмүүн </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold"></p>
            <p className="text-center ">Урлагийн наадам “Гоцлол дуу” сурагч </p>
            <p className="text-center ">Brahms нэрэмжит олон улсын төгөлдөр хуурын тэмцээнд 2-р байр </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Баянзүрх дүүргийн мэтгэлцээний тэмцээнд амжилттай оролцсон </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Э. Хулан </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Б. Хулан  </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Дүүргийн англи хэлний олимпиад </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Б. Тод-Од, Э. Энхбаатар нар тусгай байр </p>
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

export default Ahlah9a;
