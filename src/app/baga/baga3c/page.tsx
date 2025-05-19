"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3c/1.png";
import zurag2 from "../../../assets/3c/2.png";
import zurag3 from "../../../assets/3c/3.png";
import zurag4 from "../../../assets/3c/4.png";
import zurag5 from "../../../assets/3c/5.png";
import zurag6 from "../../../assets/3c/6.png";
import zurag7 from "../../../assets/3c/7.png";
import zurag8 from "../../../assets/3c/8.png";
import zurag9 from "../../../assets/3c/9.png";
import zurag10 from "../../../assets/3c/10.png";
import zurag11 from "../../../assets/3c/11.png";
import zurag12 from "../../../assets/3c/12.png";
import zurag13 from "../../../assets/3c/13.png";
import zurag14 from "../../../assets/3c/14.png";
import zurag15 from "../../../assets/3c/15.png";
import zurag16 from "../../../assets/3c/16.png";
import zurag17 from "../../../assets/3c/17.png";
import zurag18 from "../../../assets/3c/18.png";





const Baga3c = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Т.Ганчимэг багштай 3C ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">3C анги нийт 21 суралцагчтай ба 10 эрэгтэй, 11 эмэгтэй</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Э.Уран </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center"> 2024-2025 оны  Урлагийн наадам “Гоцлол дуу ” төрлөөр 1-р байр Алтан медаль </p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">С.Гэгээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2024-2025 оны  Урлагийн наадам “Хөгжим” төрлөөр 3-р байр Хүрэл медаль </p>  
        </div>

  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">З.Танан</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2024-2025 оны  Урлагийн наадам “Гоцлол бүжиг ” төрлөөр 1-р байр Алтан медаль</p>  
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2024-2025 оны  Урлагийн наадам “Хамтлаг бүжиг ” төрлөөр 2-р байр Мөнгөн медаль</p>  
        </div>

  
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2024-2025 оны  Урлагийн наадам “Найрал дуу” төрлөөр 1-р байр Алтан медаль</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Намрын спорт өдөрлөгөөр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Суниалт эмэгтэй төрөл Б.Уран III байр</p>  
            <p className="text-center">Уртын харайлт эрэгтэй төрөлд Т.Агар I байр</p>  
            <p className="text-center">Уртын харайлт эмэгтэй төрөлд Ө.Ундрах-Эрдэм II байр </p>  
            <p className="text-center">100м гүйлт эмэгтэй төрөлд С.Гэгээн II байр</p>  
            <p className="text-center">100х4  эрэгтэй баг Т.Агар, Г.Гарьд, Б.Бат-Эрдэнэ, У.Баянмөнх I байр</p>  
            <p className="text-center">100х4  эмэгтэй баг Б. Уран, Б.Индра, С.Гэгээн, З.Танан III байр</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">AMO</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">3с ангийн сурагч Б.Бат-Эрдэнэ 3-р байр хүрэл медаль</p>  
            <p className="text-center">3с ангийн сурагч У.Баянмөнх тусгай байр</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">SASMO</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">3с ангийн сурагч Б.Содгэрэл 3-р байр хүрэл медаль</p>  
          </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Аялалт хичээл</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">2025 оны Аялалт хичээлээр байгалийн үзэсгэлэнт газар Тэрэлж рүү хөтөч багшийн танилцуулгаар түүхэн дурсгалт газартай танилцав.  </p>  
          </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Spelling bee- Үсэглэгч зөгий тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>

          </div>
          </div>

          <p className="text-center border-b pb-2 text-[20px] font-semibold">Бид мод тарьж байна </p>
            <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Тэрбум мод үндэсний хөдөлгөөний хүрээнд “Бид мод тарьж байна ” дууны тэмцээнд анги хамт олоноороо амжилттай оролцов.</p>  
          </div>
  
            <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Хүүхдийн зохиолч Э.Амарзаяагийн номын өдөрлөгт оролцов</p>  
          </div>
  

          <p className="text-center border-b pb-2 text-[20px] font-semibold">2025 оны  SASMO</p>
            <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">3с ангийн сурагч Б.Бат-Эрдэнэ 3-р байр хүрэл медаль</p>  
            <p className="text-center">3с ангийн сурагч Ө.Ундрах-Эрдэм 3-р байр хүрэл медаль</p>  
            <p className="text-center">3с ангийн сурагч Т.Төгсбилэг 3-р байр хүрэл медаль</p>  
            <p className="text-center">3с ангийн сурагч Э.Уран тусгай байр </p>  
            <p className="text-center">3с ангийн сурагч Т.Дагиймаа тусгай байр </p>  
            <p className="text-center">3с ангийн сурагч Ш.Мөнгөнгэрэл тусгай байр</p>  
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

export default Baga3c;
