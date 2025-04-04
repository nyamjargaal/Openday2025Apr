"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5c/1.png"
import zurag2 from "../../../assets/5c/2.png"
import zurag3 from "../../../assets/5c/3.png"
import zurag4 from "../../../assets/5c/4.png"
import zurag5 from "../../../assets/5c/5.png"
import zurag6 from "../../../assets/5c/6.png"
import zurag7 from "../../../assets/5c/7.png"
import zurag8 from "../../../assets/5c/8.png"
import zurag9 from "../../../assets/5c/9.png"
import zurag10 from "../../../assets/5c/10.png"
import zurag11 from "../../../assets/5c/11.png"
import zurag12 from "../../../assets/5c/12.png"
import zurag13 from "../../../assets/5c/13.png"
import zurag14 from "../../../assets/5c/14.png"

const Dund5c = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleBaga = () => {
    router.push("/dund");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  С.Адъяасүрэн багштай 5С ангийн 2023-2024 оны хичээлийн жилийн амжилтууд</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 5C анги нь 18 сурагчтай. Үүнээс охид 8, хөвгүүд 10 </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Намрын спорт өдөрлөг” 4x100  хөвгүүд  “АЛТ” 
 </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Намрын спорт өдөрлөг” 
100м гүйлт эр,  АЛТ
          100м гүйлт эм,  МӨНГӨ 
 </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Намрын спорт өдөрлөг” 
Олс таталтын баг тамирчид
АЛТАН МЕДАЛЬ
 </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Намрын спорт өдөрлөг” 
Нийлбэр дүнгээр II байр
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Урлагийн наадам” 
5-8 дугаар ангийн төрөлд нийлбэр оноогоор II байр, 
гоцлол бүжиг “МӨНГӨ”
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Дээлтэй Монгол” 
5 дугаар ангийн төрөлд Шагайн наадгайн  I байр 
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны англи хэлний тэмцээн
 
“New world master”
“Golden bell” 

Т. Бодь-Эрдэнэ I байр
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны англи хэл дээрх “Лингорс” уншлагын уралдаанд
БЗД-ийн хэмжээнд 
Д.Амирлин II байр

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны англи хэл дээрх “Лингорс” уншлагын уралдаанд
сургуулийн Vангийн сурагчдын дунд уншсан үгийн тоогоор 
Х. Очир-Эрдэнэ тэргүүн байр
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны “Таеквондо” дугуйлангийн сурагч 
З.Энхдөлгөөн 
А.Алтаншүр нар 
ШАР БҮС-ний эзэд боллоо.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны 4-5-р ангийн ЭКСКУРС аялал нийлбэр оноогоор “ХОЁРДУГААР БАЙР”

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Dund5c;
