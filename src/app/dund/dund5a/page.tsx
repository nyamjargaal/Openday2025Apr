"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5a/1.png"
import zurag2 from "../../../assets/5a/2.jpg"
import zurag3 from "../../../assets/5a/3.jpg"
import zurag4 from "../../../assets/5a/4.png"
import zurag5 from "../../../assets/5a/5.jpg"
import zurag6 from "../../../assets/5a/6.png"
import zurag7 from "../../../assets/5a/7.png"
import zurag8 from "../../../assets/5a/8.png"
import zurag9 from "../../../assets/5a/9.png"
import zurag10 from "../../../assets/5a/10.png"
import zurag11 from "../../../assets/5a/11.png"
import zurag12 from "../../../assets/5a/12.png"
import zurag13 from "../../../assets/5a/13.png"
import zurag14 from "../../../assets/5a/14.png"
import zurag15 from "../../../assets/5a/15.png"
import zurag16 from "../../../assets/5a/16.png"
import zurag17 from "../../../assets/5a/17.png"

const Dund5a = () => {

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
          <p className=" text-center font-semibold text-lg"> Танилцуулга</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">5А анги нь нийт 22 сурагчтай.
Охид-12, хөвгүүд-10
2023-2024 оны хичээлийн жил бид бүхний хувьд ололт амжилт дүүрэн жил байлаа</p>
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 
Намрын спортын их наадмын “Хөгжөөнт буухиа” төрөлд анги хамт олноороо “Тэргүүн” байр эзэлсэн.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Намрын спортын их наадмын “Олс таталт” –ын төрөлд анги хамт олноороо “Дэд” байрын эзэд болсон.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Намрын спортын их наадмын “4х4” гүйлтийн төрөлд сурагч: - М.Гүнбилэг
          А.Хүслэн,
              А.Мөнхтүшиг, Г.Түвшинжаргал
нар “Дэд” байрын эзэд боллоо.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Г.Түвшинжаргал
Намрын спортын их наадмын “эрэгтэй 100м” гүйлтийн төрөлд “Мөнгө” медаль хүртсэн
Таеквондогийн спортоор хичээллэн “Шар” өнгийн бүстэй болсон.

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Т.Саруул
Урлагийн их наадмын “Гоцлол бүжиг”-н төрөлд “Хүрэл” медаль хүртсэн
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Т.Индра
Урлагийн их наадмын “Гоцлол хөгжим”-н төрөлд “Мөнгө” медаль хүртсэн
“ Lingors”  улсын уншлагын марафоны А1 түвшинд БЗД-т  V байр эзэлсэн.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Т.Индра
Таеквондогийн спортоор хичээллэн “Шар” өнгийн бүстэй болсон.
Сургуулийн аварга шалгаруулах Шатрын тэмцээнээс “Хүрэл”  медаль хүртсэн</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Г.Тэнүүн
Эх хэлний 7 хоног аяны хүрээнд зохион байгуулагдсан “Цэвэр бичигтэн” шалгаруулах уралдаанд “Тэргүүн” байр эзэлсэн
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">О.Цэлмэг
Монгол бахархлын өдрөөр зохион явуулсан “Их эзэн Чингис хаан” сэдэвт цэвэр бичгийн уралдаанд  “Алт” медаль хүртсэн
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Б.Намуундарь
Шилдэг сургуулийн сурагчдын дунд зохион байгуулагдсан “VOICE” дууны уралдаанд III байр эзэлсэн.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">С.Мишээл
“ Lingors”  улсын уншлагын марафонд сургуулийн хэмжээнд “Тэргүүн” байр эзэлсэн.
Таеквондогийн спортоор хичээллэн “Шар” өнгийн бүстэй болсон.

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Т.Батжин
SASMO, AMO олимпиадын хос “Алт” “ Мөнгө” медаль хүртсэн 
Монголын математикийн 60-р олимпиадын I даваанд шалгарч II даваанд амжилттай оролцсон
SASMO - 2024 олон улсын математикийн олимпиадаас “Хүрэл” медаль хүртлээ

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">О.Мишээл
Эх хэлний 7 хоног аяны хүрээнд зохион байгуулагдсан “Цэвэр бичигтэн” уралдаан II байр эзэлсэн
“АМО” математикийн олимпиадаас “Мөнгө” медаль хүртсэн</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Э.Энххүслэн
Таеквондогийн спортоор хичээллэн “Шар” өнгийн бүстэй болсон.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Б.Түшиг
Сургуулийн аварга шалгаруулах Шатрын тэмцээнээс “Тусгай” байрын шагнал хүртсэн

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">А.Хүслэн
Сургуулийн аварга шалгаруулах Шатрын тэмцээнээс “Тусгай” байрын шагнал хүртсэн
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
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

export default Dund5a;
