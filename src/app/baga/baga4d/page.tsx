"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/4d/1.jpg"
import zurag2 from "../../../assets/4d/2.jpg"
import zurag3 from "../../../assets/4d/3.jpg"
import zurag4 from "../../../assets/4d/4.jpg"
import zurag5 from "../../../assets/4d/5.jpg"
import zurag6 from "../../../assets/4d/6.jpg"
import zurag7 from "../../../assets/4d/7.jpg"
import zurag8 from "../../../assets/4d/8.jpg"
import zurag9 from "../../../assets/4d/9.jpg"
import zurag10 from "../../../assets/4d/10.jpg"
import zurag11 from "../../../assets/4d/11.jpg"
import zurag12 from "../../../assets/4d/12.jpg"
import zurag13 from "../../../assets/4d/13.jpg"
import zurag14 from "../../../assets/4d/14.jpg"
import zurag15 from "../../../assets/4d/15.jpg"
import zurag16 from "../../../assets/4d/16.jpg"
import zurag17 from "../../../assets/4d/17.jpg"
const Baga4d = () => {

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
          <p className=" text-center font-semibold text-lg">АМЕРИК МОНГОЛЫН ХАМТАРСАН “ШИЛДЭГ” СУРГУУЛИЙН Энхсайхан БАГШТАЙ 5Д АНГИЙН ТАНИЛЦУУЛГА</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">4Д АНГИ НЬ НИЙТ 23 СУРАГЧТАЙ.
12 АДТАЙ ХӨВГҮҮД
11 ҮЗЭСГЭЛЭНТ ОХИДТОЙ.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">НАМРЫН СПОРТЫН ИХ НААДМЫН АВАРГА, ШИЛЖИН ЯВАХ ЦОМЫН ЭЗЭН АНГИ
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">ШИЛДЭГ СУРГУУЛИЙН УРЛАГИЙН ИХ НААДМЫН ХОШОЙ АВАРГА, ШИЛЖИН ЯВАХ ЦОМЫН ЭЗЭН АНГИ</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">ХАВРЫН ЭКСКУРС АЯЛАЛЫН ТЭРГҮҮН БОЛОН ДЭД БАЙР</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">ТЭЕКВОНДО ДУГУЙЛАНГИЙН СУРАГЧ Ш.АРИУНБОЛД, О.АНАНД, Б.УНДРАХ, М.ХАСБОЛД НАР ШАР БҮСНИЙ БОЛЗОЛ ХАНГАВ</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>
        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">СУРГУУЛИЙН ШАТРЫН АВАРГА ШАЛГАРУУЛАХ ТЭМЦЭЭНИЙ ХҮРЭЛ МЕДАЛЬТ СУРАГЧ Ө.СЭЦЭН, М.ХАСБОЛД, ТУСГАЙ БАЙРЫН ШАГНАЛТ Б.ЕРӨӨЛТ</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023 ОНЫ ТЭРГҮҮНИЙ ШИЛДЭГ СУРАГЧИД Г.МИЧИДМАА, М.ТЭЛМҮҮН, Б.НАЦАГДОРЖ, О.АНАНД </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“VANDA” ОЛОН УЛСЫН БАЙГАЛИЙН УХААНЫ ОЛИМПИАДЫН АЛТАН МЕДАЛЬТ СУРАГЧ М.ТЭЛМҮҮН</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“AMO” ОЛОН УЛСЫН МАТЕМАТИКИЙН ОЛИМПИАДЫН МӨНГӨН МЕДАЛЬТ СУРАГЧ М.МӨНХ-ҮҮЛЭН, ХҮРЭЛ МЕДАЛЬТ СУРАГЧ О.АНАНД</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“VOICE OF SHILDEG” АНГЛИ ДУУНЫ УРАЛДААНЫ СУРГУУЛИЙН АВАРГА, ЦОМЫН ЭЗЭН СУРАГЧ Б.ХАЙЛАН</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">БЯЦХАН МИКРОФОН-2024 УЛСЫН ДУУНЫ УРАЛДААНД СУРАГЧ О.АНАНД, М.МӨНХ-ҮҮЛЭН НАР АМЖИЛТТАЙ ОРОЛЦОВ</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“NEW WORD MASTER” АНГЛИ ҮГ ЦЭЭЖЛЭХ ТЭМЦЭЭНИЙ АВАРГА СУРАГЧИД Б.НАЦАГДОРЖ, Д.ХИШИГ-УНДРАЛ</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“GOLDEN BELL” АСУУЛТ ХАРИУЛТЫН ТЭМЦЭЭНИЙ АВАРГА СУРАГЧИД Б.НАЦАГДОРЖ, М.ТЭЛМҮҮН, Ө.СЭЦЭН, Д.ХИШИГ-УНДРАЛ</p>
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

export default Baga4d;
