"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/10a/1.png";
import zurag2 from "../../../assets/10a/2.png";
import zurag3 from "../../../assets/10a/3.png";
import zurag4 from "../../../assets/10a/4.png";
import zurag5 from "../../../assets/10a/5.png";
import zurag6 from "../../../assets/10a/6.png";
import zurag7 from "../../../assets/10a/7.png";
import zurag8 from "../../../assets/10a/8.png";
import zurag9 from "../../../assets/10a/9.png";
import zurag10 from "../../../assets/10a/10.png";
import zurag11 from "../../../assets/10a/11.png";
import zurag12 from "../../../assets/10a/12.png";
import zurag13 from "../../../assets/10a/13.png";
import zurag14 from "../../../assets/10a/14.png";
import zurag15 from "../../../assets/10a/15.png";
import zurag16 from "../../../assets/10a/16.png";
import zurag17 from "../../../assets/10a/17.png";
import zurag18 from "../../../assets/10a/18.png";
import zurag19 from "../../../assets/10a/19.png";
import zurag20 from "../../../assets/10a/20.png";
import zurag21 from "../../../assets/10a/21.png";


const Ahlah10a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleAhlah = () => { router.push("/ahlah");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">С.Дуламсүрэн багштай 10A ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">10A анги нийт 20 суралцагчтай ба 9 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга A.Эрхэмхүслэн </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center "> Гар суниалт эрэгтэй төрөлд сурагч Б. Марал-Эрдэнэ Хүрэл медал </p>
            <p className="text-center">  100м гүйлт эрэгтэй төрөлд сурагч Б.Ханшагай Хүрэл медал</p>
            <p className="text-center"> 800м гүйлт эрэгтэй төрөлд сурагч Н. Лхагва-Очир Мөнгөн медал </p>
            <p className="text-center">  Буухиа гүйлтийн төрөлд сурагч Г.Гүнбилиг, Н.Лхагва-Очир, Т. Ананд-Очир, Б.Ханшагай -р байр тус тус Мөнгөн медал эзэллээ. </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Гоцлол дуу 2-р байр</p>
            <p className="text-center">Хөгжим 1-р байр </p>
            <p className="text-center">Хамтлаг бүжиг 2-р байр   </p>
            <p className="text-center">Найрал дуу 2-р байр  </p>
            <p className="text-center">Найрал дуу 2-р байр  </p>
            <p className="text-center"> Чөлөөт номер 1-р байр </p>
            <p className="text-center text-red-600 ">ахлах ангийн төрөлд тэргүүн байр </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Шилдэг сургуулийн сагсан бөмбөгийн аварга шалгаруулах тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">эмэгтэй ангилалд 10А ангийн охидын баг мөнгөн медал хүртлээ</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Оны шилдэг сурагч </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Д.Энэрэл</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Шатрын тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">III- байр эзэлсэн сурагч Д.Номун-Эрдэнэ</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">AMО-2024</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">А. Эрхэмхүслэнд тусгай байр эзэлсэн </p>
            <p className="text-center ">КЕНГУРУ-2025 3-р зэргийн диплом  </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Марал- Эрдэнэ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Өсвөр үе идэрчүүдийн усанд сэлэлтийн улсын аварга </p>
            <p className="text-center ">200 метр араар даллах- Алт 100 метр араар даллах- Мөнгө 50 метр араар даллах - Хүрэл </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Гүюг-Эрдэнэ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Гүюг-Эрдэнэ -ний оролцсон мэтгэлцээнүүд: </p>
            <p className="text-center ">OGOV-2025 </p>
            <p className="text-center ">ESMUN-2025 </p>
            <p className="text-center ">HISMUN-2025 </p>
            <p className="text-center ">BSUMUN-2025 </p>
            <p className="text-center ">GISMUN-2025 </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Hugo and Color-2025 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">Ө.Мишээл </p>
            <p className="text-center ">мөнгөн медал </p>
        </div>

  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Open/Personal project day </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center ">presented on April 28th </p>
        </div>
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleAhlah} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Ahlah10a;
