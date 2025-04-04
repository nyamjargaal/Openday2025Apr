"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/9a/1.png"
import zurag2 from "../../../assets/9a/2.png"
import zurag3 from "../../../assets/9a/3.png"
import zurag4 from "../../../assets/9a/4.png"
import zurag5 from "../../../assets/9a/5.png"
import zurag6 from "../../../assets/9a/6.png"
import zurag7 from "../../../assets/9a/7.png"
import zurag8 from "../../../assets/9a/8.png"
import zurag9 from "../../../assets/9a/9.png"
import zurag10 from "../../../assets/9a/10.png"
import zurag11 from "../../../assets/9a/11.png"
import zurag12 from "../../../assets/9a/12.png"
import zurag13 from "../../../assets/9a/13.png"
const Dund9a = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleDund = () => {
    router.push("/ahlah");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4 items-center">

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> C.Дуламсүрэн багштай 9А анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>

       
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2">
          <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сурагч Б.Марал-Эрдэнэ</p>
            <Image className=" rounded-xl m-auto" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <ul className=" list-disc pl-4">
              <li>2023 Сүхбаатар аймгийн Баруун - Урт сумд зохион байгуулагдсан Усан сэлэлтийн
насанд хүрэгчдийн улсын аваргаар 4*100 холимог буухиа сэлэлт III-р байр</li>
              <li>Баянзүрх дүүргийн усан сэлэлтийн аварга шалгаруулах тэмцээнээс 200 метр араар
даллах сэлэлт III-р байр, 200 метр мэлхий сэлэлт III-р байр, 50 метр араар даллах
сэлэлт III-р байр
</li>
              <li>2023 оны Эрдэнэт хотод зохион байгуулагдсан усан сэлэлтийн өсвөр үе идэрчүүдийн
улсын аварга шалгаруулах тэмцээнээр: 200 метр холимог сэлэлт III-р байр, 100 метр
араар даллах сэлэлт III-р байр, 50 метр араар даллах сэлэлт III-р байр, 4*50Mix
холимог буухиа сэлэлт II-р байр, 4*50Mix өврөөр даллах буухиа II-р байр , 4*100Mix
холимог буухиа сэлэлт- II-р байр, 4*100Mix өврөөр даллах буухиа - III-р байр
</li>
              <li>2023 онд Улаанбаатар хотод Монгол улсын ерөнхийлөгчийн цомын төлөөх тэмцээн:
100 метр араар даллах сэлэлт III-р байр</li>
              <li>2023 онд Усан сэлэлтийн I-р зэрэг</li>
              <li>2023 оны Тэргүүний сурагч</li>
              <li>32 дахь удаагийн усан сэлэлтийн насанд хүрэгчдийн аварга шалгаруулах тэмцээнээс 4*100м өврөөр даллах буухиа сэлэлтийн төрөлд II-байр, 4*50м холимог сэлэлт буухиа сэлэлтийн төрөлд II-байр, 4*100 метр холимог сэлэлтийн буухиа төрөлд II-р байр</li>
            </ul>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">SPORT DAY </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн спортын өдөрлөгийн 800м гүйлт
Сурагч Г.Мөнгөлжин II-байр
</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">SPORT DAY </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн спортын өдөрлөгийн 3х3 сагсан бөмбөгийн тэмцээнд хөвгүүд 3- байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">УРЛАГИЙН НААДАМ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн урлагийн наадам нэгдсэн дүнгээр III-байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">СУРГУУЛИЙН УРЛАГИЙН НААДАМ ХӨГЖМИЙН ТӨРӨЛД</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сурагч Б.Марал-Эрдэнэ II-байр</p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сурагч Б.Гэрэлтэмүүлэх  II-байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">СУРГУУЛИЙН УРЛАГИЙН НААДАМ БҮЖГИЙН ТӨРӨЛД</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Хамтлаг бүжиг II-р байр</p>
         </div>
        </div>

        <p className="text-center text-[20px] font-semibold">"PRESERVING CULTURAL HERITAGE IN MODERN WORLD" </p>
        <p className="text-center border-b pb-2 text-[16px] font-semibold">Англи хэлний эсээ бичлэгийн уралдаан </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сурагч Б.Амулиа I-р байр</p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сурагч Ө.Мишээл III-р байр </p>
         </div>
        </div>

        <p className="text-center text-[20px] font-semibold">“СУРГУУЛИЙН ЭХ  ХЭЛНИЙ 7 ХОНОГ" </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Цэвэр бичигтэн </p>
            <p className=" text-center text-[12px]">Сурагч Б.Гэрэлтэмүүлэх II-р байр</p>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Уншлагын уралдаан </p>
            <p className=" text-center text-[12px]">Сурагч  Б.Дашдэмбэрэл I-байр</p>
         </div>
        </div>

        <p className="text-center text-[20px] font-semibold">"Дүүргийн олимпиад" </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">                   БЗД-ийн Англи хэлний олимпиадад 
/гүнзгий төрөл/ 9-р ангийн төрөлд сурагч Б.Амулиа III-р байр </p>

  
         </div>
        </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleDund} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Dund9a;
