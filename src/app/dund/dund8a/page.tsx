"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/8a/1.png";
import zurag2 from "../../../assets/8a/2.png";
import zurag3 from "../../../assets/8a/3.png";
import zurag4 from "../../../assets/8a/4.png";
import zurag5 from "../../../assets/8a/5.png";
import zurag6 from "../../../assets/8a/6.png";
import zurag7 from "../../../assets/8a/7.png";
import zurag8 from "../../../assets/8a/8.png";
import zurag9 from "../../../assets/8a/9.png";
import zurag10 from "../../../assets/8a/10.png";
import zurag11 from "../../../assets/8a/11.png";
import zurag12 from "../../../assets/8a/12.png";
import zurag13 from "../../../assets/8a/13.png";


const Dund8a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ба.Болорцэцэг багштай 8A ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">8A анги нийт 24 суралцагчтай</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга сагсан бөмбөгийн тэмцээн </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold">Хөвгүүд 2-р байр</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold">Охид 3-р байр </p>
        </div>


        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold ">Б. Төв-Амгалан </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">800 метр: <span className=" text-red-700">1-р байр</span></p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold ">Н. Эмүжин  </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">800 метр: <span className=" text-red-700">2-р байр </span></p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold ">Б.Нандинтүшиг </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">100 метр: <span className=" text-red-700">1-р байр </span></p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Буухиа /охид /  : <span className=" text-red-700">2-р байр </span></p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold ">Г.Тэгшбилиг </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Гар дээр суниалт: <span className=" text-red-700">3-р байр </span></p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Олс таталт: <span className=" text-red-700">1-р байр </span></p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Намрын спартикад нийлбэр дүнгээр <span className=" text-red-700">1-р байр </span></p>
        </div>


        <p className="text-center border-b pb-2 text-[20px] font-semibold">Х. Намуунзаяа</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">2025 Урлагийн наадам “Гоцлол бүжиг” 1-р байр </p>
            <p className=" text-center text-[12px]">Намрын спартикад “100 метр” 1-р байр</p>
            <p className=" text-center text-[12px]">“Miss international” тэмцээнд тусгай байр </p>
            <p className=" text-center text-[12px]">“Уран хэлхээ” бүжгийн тэмцээнд 3-р байр </p>
          </div>
        </div>
        
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б. Сарнай </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Монголын усан спортыг үүсгэн байгуулагч УСС Төвийн анхны захирал багш Д.Баяраагийн нэрэмжит тэмцээн  </p>
            <p className=" text-center text-[12px] text-red-700 font-semibold">2-р байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б. Хулан </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
       
              <p className="text-center">Эв нэгдэл cup “Таеквондо”-н цомын тэмцээнд 2-р байр </p>
              <p className="text-center">Монголын олимпын таеквондогийн VII их наадам 2-р байр</p>
              <p className="text-center">Asian idiol academy-н бүжгийн тэмцээн 3-р байр </p>
              <p className="text-center">Asian idiol academy-н 2024 оны “MISS TEEN” </p>
              <p className="text-center">Шилдэг сургуулийн намрын спартикад “Уртын харайлт” 3-р байр</p>
              <p className="text-center">Шилдэг сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээнд 3-р байр </p>
      
          </div>
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

export default Dund8a;
