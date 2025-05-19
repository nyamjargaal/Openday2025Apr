"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/4a/1.png";
import zurag2 from "../../../assets/4a/2.png";
import zurag3 from "../../../assets/4a/3.png";


const Baga4a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">М. Содмаа  багштай 4A ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">4A анги нийт 21 суралцагчтай ба 11 эрэгтэй, 10 эмэгтэй</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">Байрнаас уртад харайх төрөл, Ц.Содонсувд, Мөнгөн медаль </p>  
            <p className="text-center text-[20px] font-semibold">Суниалтын төрөлд, Ц.Цолмон, Мөнгөн медаль</p>  
            <p className="text-center text-[20px] font-semibold">Суниалтын төрөлд, Ц.Цолмон, Мөнгөн медаль</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">Чөлөөт үзүүлбэр, мөнгөн медаль</p>  
            <p className="text-center text-[20px] font-semibold">Хамтлаг бүжиг, хүрэл медаль</p>  
            <p className="text-center text-[20px] font-semibold">Гоцлол бүжиг, мөнгөн медаль</p>  
            <p className="text-center text-[20px] font-semibold">Гоцлол хөгжим, хүрэл медаль</p>  
            <p className="text-center text-[20px] font-semibold">Гоцлол дуу, алтан  медаль</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">АМО & SASMO</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center text-[20px] font-semibold">Олон Улсын АМО Математикийн олимпиад- 2024, Г. Түшиг, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, А. Баттулга, алтан медаль</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Ц. Цолмон, мөнгө медаль</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Б. Бат- Оргил, хүрэл медаль</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Б. Мөнх- Энэрэл, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Ц. Содонсувд, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, З. Ханхүү, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Б. Ананд, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, Д. Ариунтунгалаг, тусгай байр</p>  
            <p className="text-center text-[20px] font-semibold">Олон Улсын SASMO Математикийн олимпиад- 2025, А. Молор, тусгай байр</p>  
       
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

export default Baga4a;
