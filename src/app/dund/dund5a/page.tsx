"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5a/1.png";
import zurag2 from "../../../assets/5a/2.png";
import zurag3 from "../../../assets/5a/3.png";
import zurag4 from "../../../assets/5a/Khankhangai.png";


const Dund5a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Э.Батцэцэг багштай 5А ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">5А анги нийт 22 суралцагчтай ба 12 эрэгтэй, 10 эмэгтэй</p>
          <p className="text-center">Ангийн дарга П.Жаргалмаа</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold">Олс таталт төрөлд</p>
            <p className="text-center">Ц.Ханхангай,Д.Түвшинбаяр,Ө.Чингүүн,Б.Мөнхдалай,З.Гэгээлэн,Р.Маргад,П.Уранхолбоо,Э.Тэмүгэ</p>
            <p className="text-center">хүрэл медаль</p> 

            <p className="border-b pb-2 text-[20px] font-semibold">100 метрийн гүйлт</p>
            <p className="text-center">Карабазар Яхяамирза-Алт</p> 

            <p className="border-b pb-2 text-[20px] font-semibold">Гар дээр суниалт</p>
            <p className="text-center">М.Эрхэс-Хүрэл</p>  

            <p className="border-b pb-2 text-[20px] font-semibold">4Х100 бухиа</p>
            <p className="text-center">Яхяамирза, Юсамалик,Б.Ананд,Ө.Чингүүн </p>  
            <p className="text-center">Алт</p>  

            <span className=" text-center text-[20px] text-red-700 font-semibold">Урлагийн наадам</span>
            <p className="border-b pb-2 text-[20px] font-semibold">Найрал дууны төрөлд-Дэд байр</p>
            <p className="border-b pb-2 text-[20px] font-semibold">Гоцлол хөгжим төрөлд-Алтан медаль</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ш.Мөнхбаясах</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">Эрдэнэтийн сонат-2024 төгөлдөр хуурын улсын уралдаанд "Алт"</p>
            <p  className=" text-center">2024-2025 оны урлагийн наадам Гоцлол хөгжим төрөлд "Алт"</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ц.Ханхангай </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div  className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">Намрын спортын наадмын олс таталтын төрөлд- Хүрэл</p>
            <p  className=" text-center">Gerege cup хөл бамбөгийн тэмцээнээс хос мөнгөн медаль</p>
            <p  className=" text-center">Хөл бөмбөгийн улсын аварга шалгаруулах тэмцээн алт </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Н.Ананд </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div  className=" flex flex-col gap-2  items-center">
     
            <p className=" text-center">Спортын наадам "Байрнаас уртад харайх" төрөлд- Мөнгө</p>
            <p  className=" text-center">АМО- олон улсын олимпиад- Хүрэл</p>
            <p  className=" text-center">2024-2025 оны хичээлийн жилийн "Тэргүүний сурагч" алтан медаль</p>
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

export default Dund5a;
