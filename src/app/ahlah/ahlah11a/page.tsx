"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/11a/1.png"
import zurag2 from "../../../assets/11a/2.png"
import zurag3 from "../../../assets/11a/3.png"
import zurag4 from "../../../assets/11a/4.png"
import zurag5 from "../../../assets/11a/5.png"
import zurag6 from "../../../assets/11a/6.png"
import zurag7 from "../../../assets/11a/7.png"
import zurag8 from "../../../assets/11a/8.png"
import zurag9 from "../../../assets/11a/9nomuunaa.png"
import zurag10 from "../../../assets/11a/10Misheel.png"
import zurag11 from "../../../assets/11a/11Tsolmon.png"
import zurag12 from "../../../assets/11a/12.png"
import zurag13 from "../../../assets/11a/13.png"
import zurag14 from "../../../assets/11a/14.png"
import zurag15 from "../../../assets/11a/15.png"
import zurag16 from "../../../assets/11a/16.png"
import zurag17 from "../../../assets/11a/17.png"
import zurag18 from "../../../assets/11a/18.png"
import zurag19 from "../../../assets/11a/19.png"
import zurag20 from "../../../assets/11a/20.png"
import zurag21 from "../../../assets/11a/21.png"
import zurag22 from "../../../assets/11a/22.png"
import zurag23 from "../../../assets/11a/23.png"
import zurag24 from "../../../assets/11a/24.png"

const Ahlah11a = () => {

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
      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Д.Оюунаа багштай 11А ангийн танилцуулга  </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 11A анги нийт 32 суралцагчтай ба 12 эрэгтэй, 20 эмэгтэй.</p>
          <p className=" text-center font-semibold text-lg">Ангийн дарга Т.Мөнхбилгүүн </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Спортын наадам </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg"> Эмэгтэй 100м - Ц.Мишээл- алт</p>
          <p className=" text-center font-semibold text-lg"> Эрэгтэй 100м - О.Содбилэг- алт </p>
          <p className=" text-center font-semibold text-lg"> Эрэгтэй 800м - Ш.Тэнгис- алт </p>
          <p className=" text-center font-semibold text-lg"> Эмэгтэй 800м - Б.Хулан - алт</p>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          <p className=" text-center font-semibold text-lg"> Эрэгтэй 4х100 -Ш.Тэнгис, О.Содбилэг, Т. Мөнхбилгүүн, Э.Наранбаяр- алт</p>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          <p className=" text-center font-semibold text-lg">Эмэгтэй 4х100 - Ц.Мишээл, Б.Хүслэн, У.Номуунаа,Б.Хулан - алт</p>
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          <p className=" text-center font-semibold text-lg">Олс таталт- алт</p>
          <p className=" text-center font-semibold text-lg">Эрэгтэй 3x3 сагсан бөмбөг-Ш.Тэнгис, О.Содбилэг, Э.Наранбаяр - алт</p>
          <p className=" text-center font-semibold text-lg">Эрэгтэй 3x3 сагсан бөмбөг- Т.Мөнхбилгүүн, Н. Хашмандал, Н.Өнөржаргал-мөнгө</p>
          <p className=" text-center font-semibold text-lg">Эмэгтэй 3х3 сагсан бөмбөг-Б.Ану-Үжин, Ч.Тэргэл, Б.Хүслэн, Б.Энхжаргал-алт </p>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          <p className=" text-center font-semibold text-lg">Эмэгтэй гар дээр суниалт- Ч.Тэргэл - мөнгө </p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
          <p className=" text-center font-semibold text-lg">Эрэгтэй уртын харайлт - А.Дөлгөөн - мөнгө </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> IELTS SCORE</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center font-semibold text-lg">Б.Насанцацрал IELTS 7.0 </p>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center font-semibold text-lg">У.Номуунаа IELTS 7.0 </p>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center font-semibold text-lg">Ч. Мишээл IELTS 7.0 </p>
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center font-semibold text-lg">О.Цолмон IELTS 7.0 </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн үзлэг</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            </div>
          <p className=" text-center font-semibold text-lg"> Гоцлол дуу- О.Содбилэг- алт</p>
          <p className=" text-center font-semibold text-lg"> Хөгжим- М.Мөнхбат- хүрэл </p>
          <p className=" text-center font-semibold text-lg">Хамтлаг бүжиг- Ангиараа-алт</p>
          <p className=" text-center font-semibold text-lg">Найрал дуу- алт</p>
          <p className=" text-center font-semibold text-lg">Чөлөөт номер- Б.Хүслэн, Б.Наранбаяр- алт</p>
          <p className=" text-center font-semibold text-lg">Нийлбэр оноо- Хоёрдугаар байр </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Дүүргийн олимпиад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Газарзүй хичээлийн төрөлд</p>
          <p className=" text-center font-semibold text-lg">Ш.Тэнгис- мөнгөн медаль</p>
          <p className=" text-center font-semibold text-lg">Б.Энхсаруул- тусгай байр</p>
          <p className=" text-center font-semibold text-lg">Edex англи хэлний олимпиод</p>
          <p className=" text-center font-semibold text-lg">Б.Энхсаруул-19-р байр</p>
          <p className=" text-center font-semibold text-lg">Б.Урансолонго-40-р байр</p>
          <p className=" text-center font-semibold text-lg">Ш.Тэнгис-51-р байр</p>
          <p className=" text-center font-semibold text-lg">Б.Нандинхүсэл-75-р байр</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
   
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Тэргүүн сурагч- Ш.Тэнгис</p>
   
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Эрэгтэй сагсан бөмбөгийн төрөлд- алт</p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Эрэгтэй шилдэг тоглогч- О.Содбилэг</p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Шатрын тэмцээн- М.Мөнхбат- хүрэл медаль</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">“The World Scholar’s Cup 2025” буюу дэлхийн 60 гаруй оронд жил бүр зохион байгуулагддаг олон төрлийн чиглэлээр англи хэлний мэдлэг, ур чадвараа сорьдог тус тэмцээнд “Senior” ангилалд М.Мөнхбат, Б.Насанцацрал нар амжилттай оролцож Солонгос улсын Сөүл хотод болох Азийн шигшээд оролцох эрхээ авсан</p>
        </div>
        
   

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Гар бөмбөгийн тэмцээн </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">О. Содбилэг ахлагчтай баг- алт</p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Т. Мөнхбилгүүн ахлагчтай баг- мөнгө</p>

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
          </div>
          <p className=" text-center font-semibold text-lg">Шилдэг тоглогч Т.Мөнхбилгүүн</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> “Үсэглэлийн хаад” ахлах ангийн төрөлд: </p>
          <p className=" text-center font-semibold text-lg"> 11а ангийн сурагч Б. Энхсувд-Мөнгөн медаль</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль" />
           </div>
          <p className=" text-center font-semibold text-lg">Шинэ өнөөдөр сургуулийн зохион байгуулсан аеробак тэмцээнд 15-17 нас- Б.Энхсувд, Ц.Одончимэг-4-р байр
          </p>
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

export default Ahlah11a;
