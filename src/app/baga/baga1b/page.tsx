"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/1b/1.png"
import zurag2 from "../../../assets/1b/2.png"
import zurag3 from "../../../assets/1b/3.png"
import zurag4 from "../../../assets/1b/4.png"
import zurag5 from "../../../assets/1b/5.png"
import zurag6 from "../../../assets/1b/6.jpg"
import zurag7 from "../../../assets/1b/7.jpg"
import zurag8 from "../../../assets/1b/8.png"
import zurag9 from "../../../assets/1b/9.png"
import zurag10 from "../../../assets/1b/10.png"
import zurag11 from "../../../assets/1b/11.png"
import zurag13 from "../../../assets/1b/13.png"
import zurag14 from "../../../assets/1b/14.png"
import zurag15 from "../../../assets/1b/15.png"
import zurag16 from "../../../assets/1b/16.png"
import zurag17 from "../../../assets/1b/17.png"

const Baga1b = () => {

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

      <p className="text-center border-b pb-2 text-[20px] font-semibold">З.Нямаа багштай 1B анги “Бидний амжилт” </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Намрын спорт өдөрлөг”-т анги хамт олноороо амжилттай оролцож, Хөгжөөнт буухиа төрөлд багаараа 2-р байр 
“Мөнгөн медаль”-ийн эзэд боллоо.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">ГХЗАН-ээс зохион байгуулсан “Halloween”-ы баярт анги хамт олноороо идэвхтэй оролцож  анги чимэглэл,ширээ засалт, дүр хувиргалт хийж баяраа тэмдэглэлээ.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Дээлтэй Монгол” өдөрлөгт ангиараа үндэсний хувцасаа өмсөж гангарлаа.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Эрдмийн баяр-аар  бүх сурагчид  сурсан шүлэг,  дуу бүжгээрээ эцэг эх, найзууддаа  тайлагнав. 
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Voice of shildeg” cover дууны тэмцээний оролцогч сурагч Э.Энх-Энэрлэн шалгарлаа.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">1-р ангийн бүх сурагчид “Уншиж, бичиж, бодож” сурсан мэдлэгээ  эцэг эхдээ тайлагнав.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“New word” , “ Song Master ” тэмцээнд оролцож амжилт гаргасан сурагчид</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Англи хэлний “READING DAY”-д амжилттай сайн оролцож, англи хэлээр унших чадвараа шалгууллаа.
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
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

export default Baga1b;
