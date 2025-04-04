"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3c/1.jpg"
import zurag2 from "../../../assets/3c/2.jpg"
import zurag3 from "../../../assets/3c/3.jpg"
import zurag4 from "../../../assets/3c/4.jpg"
import zurag5 from "../../../assets/3c/5.jpg"
import zurag6 from "../../../assets/3c/6.jpg"
import zurag7 from "../../../assets/3c/7.jpg"
import zurag8 from "../../../assets/3c/8.jpg"
import zurag9 from "../../../assets/3c/9.jpg"
import zurag10 from "../../../assets/3c/10.jpg"
import zurag11 from "../../../assets/3c/11.jpg"
import zurag12 from "../../../assets/3c/12.jpg"


const Baga3c = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleBaga = () => {
    router.push("/baga");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">


      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Ерөнхий боловсролын “Шилдэг” сургуулийн 
Т. Буяндэлгэр багштай “3С” анги нь 2023-2024 оны хичээлийн жилд нийт 19 суралцагчтай. 
Үүнээс: 
Эрэгтэй сурагч: 9
Эмэгтэй сурагч: 10
</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 оны хичээлийн жилд 3с ангийн сурагчдын гаргасан амжилт
</p>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “4х100м гүйлт”, 3-р байр</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “Олс таталт”, 2-р байр
</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>2023 он, Шилдэг ЕБС-Уралгийн их наадам, “Гоцлол дуу” 1-р байр, Г. Гэгээ</li>
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “New world master” Г. Гэгээ</li>
              <li>2023 он, Шилдэг ЕБС- Voice of Shildeg, “2-р шатанд тэнсэн” Г. Гэгээ </li>

            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023 он, Шилдэг ЕБС-Уралгийн их наадам,  3-р байр
</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “Spelling be” 1-р байр Ө. Урангоо</li>
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “New world master” Ө. Урангоо</li>
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “New world master” Э. Саруултуяа </li>
              <li>2024 он, Hippo Олон Улсын Олимпиадын нэгдүгээр шатанд Ө. Урангоо, Э. Саруултуяа </li>

            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “New world master” С. Анунгоо</li>
              <li>2023 он, Шилдэг ЕБС-Англи хэлний долоо хоног, “New world master” Д. Ананд</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>2023 он, Шилдэг ЕБС-Миний мэдэх “Чингис хаан” гар зургийн уралдаан 1-р байр 
Э. Мөнх-Үжин</li>
              <li>2024 он, Шилдэг ЕБС-Шатрын тэмцээнд “Тусгай байр” Х. Батхаан
</li>
            </ul>
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

export default Baga3c;
