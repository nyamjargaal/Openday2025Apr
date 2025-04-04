"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import all from "../../../assets/3b/all.jpg"
import sportday from "../../../assets/3b/sportdayy.jpg"
import zurag1 from "../../../assets/3b/1.jpg"
import zurag2 from "../../../assets/3b/2.jpg"
import zurag3 from "../../../assets/3b/Unhallow.jpg"
import zurag4 from "../../../assets/3b/uuu.jpg"
import zurag5 from "../../../assets/3b/uuu222.jpg"
import d1 from "../../../assets/3b/d1.jpg"
import d2 from "../../../assets/3b/d2.jpg"
import d3 from "../../../assets/3b/d3.jpg"
import newyear from "../../../assets/3b/newyaer.jpg"

const Baga3b = () => {

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

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Р.Жавзандулам багштай 3b анги. 

      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Нийт 23 сурагчтай. Үүнээс 14 Охин 9 Хүү</p>
          <Image className=" rounded-xl" src={all} width={300}alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 оны хичээлийн жилд 3b ангийн сурагчдын гаргасан амжилт
 
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={sportday} width={300} alt="Шилдэг сургууль" />
            <ul className=" list-disc pl-4">
              <li>2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “Уртын харайлт”, 1-р байр М. Өсөннэмэх
</li>
              <li>2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “Уртын харайлт”, 1-р байр З. Сувдансондор</li>
              <li>2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “4x100м гүйлт”, 2-р байр </li>
              <li>2023 он, Шилдэг ЕБС-Намрын Спортын Наадам, “100м гүйлт”, 2-р байр Б. Хантэнгэр</li>
            </ul>
        
          </div>
        </div>

        
        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Amo болон Sasmo олимпиадын медальтангууд
 
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Олимпиадын медальтангууд
 
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={d1} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={d2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={d3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Halloween-ийн баяраар
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Урлагийн наадмаар
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">2023 он, Шилдэг ЕБС-Урлагийн их наадам, “Найрал дуу”,  3-р байр
</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Шинэ жилээр
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={newyear} width={300} alt="Шилдэг сургууль" />

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

export default Baga3b;
