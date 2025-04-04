"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/12B/1.jpg"
import zurag2 from "../../../assets/12B/2.jpg"
import zurag3 from "../../../assets/12B/3.jpg"
import zurag4 from "../../../assets/12B/4.jpg"
import zurag5 from "../../../assets/12B/5.jpg"
import zurag6 from "../../../assets/12B/6.jpg"
import zurag7 from "../../../assets/12B/7.jpg"
import all from "../../../assets/12B/all.jpg"
const Ahlah12b = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleAhlah = () => {
    router.push("/ahlah");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">


      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> З.Тамираа багштай 12б анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 12б анги нийт 21 суралцагчтай ба 10 хүү, 11 охин. Ангийн дарга: Э.Оюунбаатар</p>
          <Image className=" rounded-xl" src={all} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 Манай ангийн амжилтууд
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p >1.Намрын спортын их наадамд 2-р байранд орсон   </p>
          <div className=" flex flex-col gap-2 ">
          <p>2.Эмэгтэй буухиад-нэгдүгээр байр </p>
          <p>3.Эрэгтэй буухиад-Хоёрдугаар байр  </p>
          <p>4.3*3 Сагсан бөмбөгийн эрэгтэй-2 байр</p>
          <p>5.3*3 Сагсан бөмбөгийн эмэгтэй-1 байр </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p >Урлагийн үзлэгийн хамтлаг бүжгийн төрөлд 1-р байр эзэлсэн</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p >Сургуулийн нэрэмжит сагсан бөмбөгийн тэмцээнд</p>
          <p >Эрэгтэй гутгаар байр</p>
          <p >Эмэгтэй нэгдүгээр байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сурагч бүрийн амжилтаас</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg"> Б.Ананд </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Suny Stony Brooks 50% 24000$</p>
            <p className=" text-center text-[12px]">New York University 100%-52500$ </p>
            <p className=" text-center text-[12px]">Tokyo International University 100%- 45000$ </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">Г.Алтанцэцэг </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Дэлхийд 23, Азид 1-т жагсдаг Tsinghua University- Био анагаахын инженер ангид элсэн суралцах</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">З.Оюундарь  </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">NYU Shanghai- 230.000$</p>
            <p className=" text-center text-[12px]">Duke Kunshan- 253.800$</p>
            <p className=" text-center text-[12px]">Drexel University- 177.600$</p>
            <p className=" text-center text-[12px]">Franklin Marshall College- 168.800$</p>
            <p className=" text-center text-[12px]">Hofstra University- 196.600$  </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">Н.Намуундарь</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Lehigh University- 204.000$</p>
            <p className=" text-center text-[12px]">Albion College -285.520$</p>
            <p className=" text-center text-[12px]">Drexel University- 189.000$</p>
            <p className=" text-center text-[12px]">Arizona State University- 120.000$</p>
            <p className=" text-center text-[12px]">Baylor University 195.000$</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">Б.Номин-Эрдэнэ</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Олон улсын хятад хэлний HSK-6 оноотой </p>
            <p className=" text-center text-[12px]">Күнз боловсролын төвийн- 100% тэтгэлэг</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">Э.Оюунбаатар</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Shanghai jiao Tong-University of Michigan joint institu </p>
            <p className=" text-center text-[12px]">Harbin University of Technology-100% тэтгэлэг </p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg">Г.Удвал</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Zhejiang University-100% </p>
            <p className=" text-center text-[12px]">Shanghai School of Business  </p>
            <p className=" text-center text-[12px]">Si Chuan University  </p>
          </div>
        </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleAhlah} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Ahlah12b;
