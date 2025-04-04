"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5b/1.png"
import zurag2 from "../../../assets/5b/2.jpg"
import zurag3 from "../../../assets/5b/3.jpg"
import zurag4 from "../../../assets/5b//4.png"
import zurag5 from "../../../assets/5b/5.jpg"
import zurag6 from "../../../assets/5b/6.jpg"
import zurag7 from "../../../assets/5b/7.jpg"
import zurag8 from "../../../assets/5b/8.jpg"
import zurag9 from "../../../assets/5b/9.png"
import zurag10 from "../../../assets/5b/10.jpg"
const Dund5b = () => {

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
          <p className=" text-center font-semibold text-lg">  
          Цогзолмаа багштай 6B  Ангийн танилцуулга
</p>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Ангийн танилцуулга</p>
          <div className=" flex flex-col gap-2 items-center ">
            <p className=" text-center text-[12px]">Манай анги нь 19 сурагчтай.Үүнээс охид 8,хөвгүүд 11.
АУБ Ө.Анхжаргал.Ангийн дарга М.Бадрал.Манай ангид урлаг спортын олон авьяаслаг сурагчид суралцдаг.
Энэ хичээлийн жилд бид бүхэн Харилцаагаар манлайлж Хандлагаар үлгэрлэнэ гэсэн уриан дор амжилттай хамтарч ажиллалаа.
</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Намрын спартакиад багийн дүнгээр 5Б анги  ХҮРЭЛ медаль</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center  w-full"> 5Б ангийн сурагч Г.Сорхугтани</p>
          <p className=" text-center w-full"> М.Төгсбилиг,А.Тэмүүлэн,Г.Болор  нар </p>
          <p className=" text-center  w-full"> WORD MASTER тэмцээний ялагчаар тодорло</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">5Б ангийн сурагч А.Мишээл,З.Цэнгүүн,Г.Сорхугтани нар ШАР БҮС ний болзолоо хангалаа.
Сурагч Ч.Тэмүүлэн БАЙТ ХАРВАА төрөлд мөнгөн медаль хүртлээ.
</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">5Б ангийн сурагч А.Тэмүүлэн  Лингорс байгууллагаас зохион байгуулсан 
Улсын уншлагын марафонд А2 түвшинд 2-р байранд шалгарч 
Олон улсын V test үнэгүй өгөх эрхээр шагнуулсан.
</p></div>    </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">5Б ангийн сурагч А.Мишээл сургуулийн шатрын аварга шалгаруулах тэмцээнд охидын төрөлд тусгай байр эзэллээ..
</p></div>    </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Намрын спартакиад 5Б ангийн сурагчид Хөгжөөнт буухиа мөнгөн медаль
Сурагч А.Мишээл Уртын харайлт болон 100 метр гүйлтэд хүрэл медаль хүртлээ.
Сургуулийн шатрын аварга шалгаруулах тэмццээнд А.Мишээл тусгай байр эзэллээ</p></div>    </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">5Б ангийн сурагч М.Төгсбилиг АМО -2023 он олон улсын математикийн олимпиадаас хүрэл медаль,2023 оны 5-р ангиудын бүлгийн ШИЛДЭГ сурагчаар шалгарсан.
</p></div>    </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">УРЛАГ 
Найрал дуу тэргүүн байр 

Англи хэл
ШИЛДЭГ уншигч анги ЛИНГОРС улсын уншлагын уралдаан 2024

</p></div>    </div>

        

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

export default Dund5b;
