"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3a/1.png";
import zurag2 from "../../../assets/3a/2.png";
import zurag3 from "../../../assets/3a/3.png";
import zurag4 from "../../../assets/3a/4.png";
import zurag5 from "../../../assets/3a/5.png";
import zurag6 from "../../../assets/3a/6.png";
import zurag7 from "../../../assets/3a/7.png";
import zurag8 from "../../../assets/3a/8.png";
import zurag9 from "../../../assets/3a/9.png";
import zurag10 from "../../../assets/3a/10.png";
import zurag11 from "../../../assets/3a/11.png";
import zurag12 from "../../../assets/3a/12.png";



const Baga3a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Д.Нансалмаа 3А ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">3А анги нийт 20 суралцагчтай ба 9 эрэгтэй, 11 эмэгтэй</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Босхол</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">2024-2025 оны хичээлийн жилийн “АМО” олимпиадын Мөнгөн медальт </p>       
          <p className="text-center">ОУ-ын “SASMO” олимпиадын “Алтан медальт”</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Т.Есөгүн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">2024-2025 оны хичээлийн жилийн “АМО” олимпиадын Хүрэл медальт </p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ц.Аминзул</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">2024-2025 оны хичээлийн жилийн “АМО” олимпиадын Хүрэл медальт </p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">2024-2025 оны “АМО” олимпиадын шагналт байр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">2024-2025 оны хичээлийн жилийн “АМО” олимпиадын Хүрэл  медальт, уртын харайлтын Хүрэл медальт</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Сонор</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">3а ангийн сурагч:  Босхол -Алтан медаль
О.Ананд – Мөнгөн медаль
Ц.Аминзул – Хүрэл медаль
Т.Есөгүн     - Хүрэл медаль
Б.Сонор -  Хүрэл медаль
Ш.Амина – Хүрэл медаль
</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Англи хэлний тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">           1-р байр: Ш.Амина </p>       
          <p className="text-center">   2-р байр: Ж.Үүрийнгэгээ</p>       
          <p className="text-center">3-р байр: Ө.Мишээл</p>       
        </div>
        

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">  2024-2025 оны хичээлийн жилийн урлагийн үзлэг Хамтлаг бүжиг 3-р байр</p>       
     
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center">ОУ-ын “SASMO” олимпиадын тусгай байрын шангалт 3а ангийн сурагч Ц.Аминзул         Ө.Мишээл </p>       
     
        </div>

  


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Baga3a;
