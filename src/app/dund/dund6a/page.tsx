"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/6a/1.png";
import zurag2 from "../../../assets/6a/2.png";
import zurag3 from "../../../assets/6a/3.png";
import zurag4 from "../../../assets/6a/4.png";
import zurag5 from "../../../assets/6a/5.png";
import zurag6 from "../../../assets/6a/6.png";
import zurag7 from "../../../assets/6a/7.png";
import zurag8 from "../../../assets/6a/8.png";
import zurag9 from "../../../assets/6a/9.png";
import zurag10 from "../../../assets/6a/10.png";
import zurag11 from "../../../assets/6a/11.png";
import zurag12 from "../../../assets/6a/12.png";
import zurag13 from "../../../assets/6a/13.png";
import zurag14 from "../../../assets/6a/14.png";
import zurag15 from "../../../assets/6a/15.png";
import zurag16 from "../../../assets/6a/16.png";
import zurag17 from "../../../assets/6a/17.png";
import zurag18 from "../../../assets/6a/18.png";
import zurag19 from "../../../assets/6a/19.png";
import zurag20 from "../../../assets/6a/20.png";
import zurag21 from "../../../assets/6a/21.png";
import zurag22 from "../../../assets/6a/22.png";
import zurag23 from "../../../assets/6a/23.png";
import zurag24 from "../../../assets/6a/24.png";
import zurag25 from "../../../assets/6a/25.png";
import zurag26 from "../../../assets/6a/26.png";
import zurag27 from "../../../assets/6a/27.png";
import zurag28 from "../../../assets/6a/28.png";
import zurag29 from "../../../assets/6a/29.png";


const Dund6a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Д.Ганцэцэг багштай 6A ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">6A анги нийт 24 суралцагчтай ба 11 эрэгтэй, 13 эмэгтэй</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
  
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">Олс таталтын төрөлд :<span className="text-red-700">“ДЭД” байр</span></p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">4х4 гүйлтийн төрөлд  :<span className="text-red-700">“Хүрэл” медал хүртсэн</span></p>
       
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">Холын зайн гүйлтийн ганцаарчилсан төрөлд   : Жаргалхүү<span className="text-red-700">“Мөнгө” медал хүртсэн</span></p>
          
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">Холын зайн гүйлтийн ганцаарчилсан төрөлд   : Эрхжаргал<span className="text-red-700">“Хүрэл” медал хүртсэн</span></p>
       
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold text-blue-800">100-н метрийн гүйлтийн төрөлд    : Индра<span className="text-red-700">“Хүрэл” медал хүртсэн</span></p> 
        </div>

 
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Эх түүхийн хичээлээрээ бид “Чингис хаан”-ы музейг анги хамт олноороо очиж үзсэн.</p>
          </div>
        </div>
 
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">“Сүнсний баяр”-т анги хамт олноороо дүрд хувиран амжилттай сайн оролцлоо</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Сүнсний баярын “Шилдэг дүр” хувиргалтаар сурагч Жаргалхүү шалгарлаа</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн их наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээнд охид, хөвгүүдийн баг амжилттай сайн оролцлоо</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Пи тооны өдөр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Пи тооны өдөрт зориулсан шатрын тэмцээнд сурагч А. Хүслэн, Т.Индра нар амжилттай оролцлоо</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“Шатрын аварга” шалгаруулах тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Сургуулийн  “Шатрын аварга” шалгаруулах тэмцээнд сурагч Үжингоо, Т.Мишээл, Эрхжаргал, Индра, Хүслэн нар амжилттай оролцлоо</p>
          </div>
        </div>

   
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Олон улсын математикийн олимпиадад сурагч Тэргэл, Жаргалхүү, Мөнхтүшиг, Аялгуу, Маргад, Даваажаргал нар өөрийгөө сорьж амжилттай оролцсон</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Олон улсын байгалийн ухааны “Vanda” олимпиадад сурагч Гүнбилэг, Энхжин, Цэлмэг нар өөрийгөө сорьж амжилттай оролцов.</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Олон улсын байгалийн ухааны “Vanda” олимпиадад сурагч Гүнбилэг, Энхжин, Цэлмэг нар өөрийгөө сорьж амжилттай оролцов.</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Олон улсын математикийн олимпиадад сурагч  Жаргалхүү, Маргад, С.Мишээл, Цэлмэг нар өөрийгөө сорьж амжилттай оролцсон</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Hugo and color гар зургийн уралдаанд сурагч  Жаргалхүү, С.Мишээл, Даваажаргал, Тэнүүн, Индра нар өөрийгөө сорьж амжилттай оролцсон.</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Индра</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">“Ирээдүйн одод” цомын тэмцээнд I байр /таеквондо/</p>
            <p className="text-center font-semibold">Сургуулийн урлагийн их наадмын хөгжмийн төрөлд II байр</p>
            <p className="text-center font-semibold">TIA cup тэмцээнд I байр /таеквондо/</p>
            <p className="text-center font-semibold">Эв нэгдэл cup цомын тэмцээний тулаан төрөлд I байр /таеквондо/</p>
            <p className="text-center font-semibold">“Таеквондо пүмсэ” 2025 аварга шалгаруулах тэмцээний IIIбайрын шагналыг тус тус хүртсэн</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Цэлмэг</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Монголын үндэсний бичиг үсгийн баярыг тохиолдуулан зохион байгуулагдсан “Сайхан бичигтэн” уралдаанд сурагч Цэлмэг амжилттай оролцож III байр эзлэв </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Даваажаргал</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">HUGO and COLOR гар зургийн улсын олимпиадуудад амжилттай оролцож “Авьяаслаг хүүхэд” V зэргийн батламж, “Бүтээлч хүүхэд” V зэргийн батламжаар тус тус шагнагдсан</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Хүслэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">“Пи тоо”-ны өдөрт зориулан зохион байгуулагдсан шатрын тэмцээнд III байрын шагналыг хүртэв.</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Хаврын аялалт хичээлд анги хамт олноороо амжилттай хамрагдлаа</p>
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

export default Dund6a;
