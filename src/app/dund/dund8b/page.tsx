"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/8b/1.jpg"
import zurag2 from "../../../assets/8b/2.jpg"
import zurag3 from "../../../assets/8b/3.jpg"
import zurag4 from "../../../assets/8b/4.jpg"
import zurag5 from "../../../assets/8b/5.jpg"
import zurag6 from "../../../assets/8b/6.jpg"
import zurag7 from "../../../assets/8b/7.jpg"
import zurag8 from "../../../assets/8b/8.jpg"
import zurag9 from "../../../assets/8b/9.jpg"
import zurag10 from "../../../assets/8b/10.jpg"
import zurag11 from "../../../assets/8b/11.jpg"
import zurag12 from "../../../assets/8b/12.jpg"
import zurag13 from "../../../assets/8b/13.jpg"
import zurag14 from "../../../assets/8b/14.jpg"
import zurag15 from "../../../assets/8b/15.jpg"
import zurag16 from "../../../assets/8b/16.jpg"
import zurag17 from "../../../assets/8b/17.jpg"
import zurag18 from "../../../assets/8b/18.jpg"
import zurag19 from "../../../assets/8b/19.jpg"
import zurag20 from "../../../assets/8b/20.jpg"
import zurag21 from "../../../assets/8b/21.jpg"
const Dund8b = () => {
  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleDund = () => {
    router.push("/dund");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image
        src={shildeg}
        width={200}
        alt="Шилдэг сургууль"
        onClick={handleHomePage}
      />
      <div className=" flex  flex-col gap-4">
    

        <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Март багштай 8б анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 8б анги нийт 20 суралцагчтай ба 9 хүү, 11 охин. Ангийн дарга Б. Мөрөн. </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Бидний уриа</p>
          <div className=" flex flex-col gap-2 items-center ">
            <p className=" text-center text-[12px] text-red-500">
              ”Оролдлого сайт Оройд гарна”{" "}
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Сургуулийн намрын спортын их наадам</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">дунд ангийн төрөлд “1-р байр” шилжин явах цомын эзэд болсон. </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Сургуулийн намрын спортын их наадам</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />

            <p className=" text-center text-[18px] font-semibold">Сурагч Б. Тулга </p>
            <ul className=" list-disc pl-4">
              <li>Намрын Спортын Их Наадам 800 метрийн гүйлт Алтан медаль</li>
              <li>Урлагийн Их Наадам гоцлол дуу”Хөдөөгийн Баясгалан киноны дуу” Алтан медаль</li>
            </ul>

            <p className=" text-center text-[18px] font-semibold">Сурагч Н. Оргих</p>
            <ul className=" list-disc pl-4">
              <li>Намрын Спортын Их Наадам гар дээр  суниалт мөнгөн медаль</li>
              <li>Шатрын тэмцээнд дунд ангийн төрөлд 3-р байр</li>
            </ul>

            <p className=" text-center text-[18px] font-semibold">Сурагч Б. Сувд:</p>
            <ul className=" list-disc pl-4">
              <li>Намрын Спортын Их Наадам уртын харайлт мөнгөн медаль</li>
              <li>Шатрын тэмцээний дунд ангийн 
төрөлд 1-р байр</li>
            </ul>

            <p className=" text-center text-[18px] font-semibold">Сурагч Э. Нэгүн</p>
            <ul className=" list-disc pl-4">
              <li>Намрын Спортын Их Наадам 100 метрийн гүйлт алтан медаль</li>
            </ul>

            <p className=" text-center text-[18px] font-semibold">Сурагч Б. Али</p>
            <ul className=" list-disc pl-4">
              <li>Намрын Спортын Их Наадам байрнаас уртад харайлт алтан медаль</li>
            </ul>
            <p className=" text-center text-[18px] font-semibold">Ангиараа Олс таталт хүрэл медаль, Охидын буухиа хүрэл медаль нийлбэр дүн 1-р байр шилжин явах цом
</p>
          </div>
        </div>

        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[18px] font-semibold">Сурагч М. Бэлгүтэй</p>
            <p className=" text-center text-[12px] font-semibold">“Алтан хонх” тэмцээнд  1-р байр</p>

            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[18px] font-semibold">Сурагч Х. Тэмүүлэн</p>
            <p className=" text-center text-[12px] font-semibold">Англи хэлний шүлгийн тэмцээнд 3-р байр        </p>

            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px] font-semibold">Сургуулийн сурагчдын Удирдах Зөвлөлөөс зохион байгуулсан E-sport ын дунд ангийн төрөлд 1-р байр
     </p>
          </div>
        </div>
        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className=" text-center font-semibold text-lg"> Сургуулийн урлагийн их наадам</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px] font-semibold">дунд ангийн төрөлд “1-р байр” эзлэв</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Сургуулийн Halloween үйл ажиллагаанд анги хамт олноороо амжилттай оролцов.</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  “Оны шилдэг сурагчид” шалгарав.</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Төрийн ордонд 12-14 насны сурагчдад зориулсан "Парламентын Боловсрол Хөтөлбөр” т хамрагдаж Улсын Их Хурал гэж ямар байгууллага, Монголчуудын туг сүлдний бэлгэдэлт ёсны талаар видео контент үзэх, хүндэтгэлийн өргөөнд анги хамт олноороо зургаа авхуулах зэрэг хүүхэд насны дурсгалт сайхан түүхийг бүтээцгээв.</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">”Карьер” хүүхэд хөгжүүлэх сургалтын төвтэй хамтарч анги удирдсан багшийн санаачилгаар  Миний Ирээдүйн Мэргэжил Сонголт сургалтад амжилттай хамрагдав. </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Тө. Мишээл “Voice of Shildeg” ковер дууны уралдаанд амжилттай оролцож “Хамгийн бүтээлч дуучин”-аар шалгарав</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээнд амжилттай оролцож дунд ангийн төрөлд “хос мөнгөн медаль” авч хурд хүч, авхаалж самбаагаа сорин оролцов.</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div
        className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2"
        onClick={handleDund}
      >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow />
          Буцах
        </button>
      </div>
    </div>
  );
};

export default Dund8b;
