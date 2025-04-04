"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/1a/1.png"
import zurag2 from "../../../assets/1a/2.png"
import zurag3 from "../../../assets/1a/3.png"
import zurag4 from "../../../assets/1a/4.png"
import zurag5 from "../../../assets/1a/5.png"
import zurag6 from "../../../assets/1a/6.png"
import zurag7 from "../../../assets/1a/7.png"
import zurag8 from "../../../assets/1a/8.png"
import zurag9 from "../../../assets/1a/9.png"
import zurag10 from "../../../assets/1a/10.png"
import zurag11 from "../../../assets/1a/11.png"
import zurag12 from "../../../assets/1a/12.png"
import zurag13 from "../../../assets/1a/13.png"
import zurag14 from "../../../assets/1a/14.png"
import zurag15 from "../../../assets/1a/15.png"
import zurag16 from "../../../assets/1a/16.png"
import zurag17 from "../../../assets/1a/17.png"
import zurag18 from "../../../assets/1a/18.png"
import zurag19 from "../../../assets/1a/19.png"
import zurag20 from "../../../assets/1a/20.png"

const Baga1a = () => {

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
 
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> Ариунмөнх багштай 2а анги “Бидний амжилт” </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагчдын хувьд хамгийн анхны тэмцээндээ оролцоод сэтгэгдэл маш өндөр байсан.
Сурагч Ц.Ундрам  ойрын зайн гүйлтийн төрөлд оролцож 
“Мөнгөн медаль”-ийн эзэн боллоо.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">ГХЗАН-ээс зохион байгуулсан “Halloween”-ы баярт анги хамт олноороо идэвхтэй оролцож  анги чимэглэл,ширээ засалт, дүр хувиргалт, ангийн сахилга бат үзүүлэлтээр бусад ангиудыг тэргүүлж “Алтан цом”-ын эзэн боллоо.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>
        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">1а анги “Эгшиг үсэг”-ийн шалгалтаа амжилттай өгөв</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">1-р ангийн бүх сурагчид” Уншиж,бичиж бодож “ сурсан мэдлэгээ  эцэг эхдээ тайлагнав.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Монгол бахархлын өдөр”-өөр үндэсний хувцсаа өмсөж Түүх соёлоо дээдлэн хүндэтгэв</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“New word” , “ Song Master ” тэмцээнд оролцож амжилт гаргасан сурагчид</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Эрдмийн баяр-аар  бүх сурагчид  сурсан шүлэг,  дуу бүжгээрээ эцэг эх, найзууддаа  тайлагнав. 
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Англи хэл дээрх Математик болон Англи хэлний олимпиадад манай ангиас нийт-16  сурагчид мэдлэг чадвараар ОУ-ын сурагчидтай өрсөлдөв.   Сурагч Б.Энгүүн  “Hippo”  олимпиадад амжилттай сайн оролцов.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />

          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Sasmo “ Азийн математикийн олимпиадад амжилт гаргасан сурагчид
</p>
          <p className=" text-center font-semibold text-lg text-blue-700">Мөнгөн медалийн эзэд
Б.Энгүүн
Г.Уриндарья    
Б.Маргад
Б.Дөлгөөн
</p>
          <p className=" text-center font-semibold text-lg text-green-700">Хүрэл медалийн эзэд
     1. М.Тэнүүнтөгс
     2. А.Ирмүүн

</p>
          <p className=" text-center font-semibold text-lg">Тусгай байрын эзэд
     1.  М.Эрхэм
     2. Э.Эрчис

</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
  

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

export default Baga1a;
