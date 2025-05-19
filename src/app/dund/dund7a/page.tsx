"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/7a/1.png";
import zurag2 from "../../../assets/7a/2.png";
import zurag3 from "../../../assets/7a/3.png";
import zurag4 from "../../../assets/7a/4.png";
import zurag5 from "../../../assets/7a/5.png";
import zurag6 from "../../../assets/7a/6.png";
import zurag7 from "../../../assets/7a/7.png";
import zurag8 from "../../../assets/7a/8.png";
import zurag9 from "../../../assets/7a/9.png";
import zurag10 from "../../../assets/7a/10.png";
import zurag11 from "../../../assets/7a/11.png";
import zurag12 from "../../../assets/7a/12.png";
import zurag13 from "../../../assets/7a/13.png";
import zurag14 from "../../../assets/7a/14.png";
import zurag15 from "../../../assets/7a/15.png";
import zurag16 from "../../../assets/7a/16.png";
import zurag17 from "../../../assets/7a/17.png";
import zurag18 from "../../../assets/7a/18.png";
import zurag19 from "../../../assets/7a/19.png";
import zurag20 from "../../../assets/7a/20.png";
import zurag21 from "../../../assets/7a/21.png";
import zurag22 from "../../../assets/7a/22.png";
import zurag23 from "../../../assets/7a/23.png";
import zurag24 from "../../../assets/7a/24.png";


const Dund7a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Т.Даваачимэг багштай 7А ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">7А анги нийт 19 суралцагчтай ба 9 эрэгтэй, 10 эмэгтэй</p>
          <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">7A BOYS</p>
          <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">7A GIRLS</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">А.Цэлмүүн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Шатрын клубээс зохиосон шатрын тэмцээнд III байр</p>
            <p className="text-center font-semibold">“Пи тоо”-ны өдөр шатрын тэмцээнд II байр</p>
            <p className="text-center font-semibold">“Намрын спортын их наадам”-д “Уртын харайлт” төрөлд I байр, алтан медаль</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Үжин </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">Vanda 2023-2024 олимпиадад Gold medal авсан тул олон улсын хэмжээний уралдаанд амжилттай оролцсоныг үнэлж сургалтын төлбөрөөс тодорхой хувийн хөнгөлөлт эдлэх мөнгөн шагналаар шагнуулсан.</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Г.Жаргалжин</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">6-8-р ангийн дунд зохион байгуулсан “Пи тоо”-ны өдрөөр математикийн үг хэллэгийг хэн сайн мэдэх вэ? АХА тэмцээнд III байр </p>
          <p className="text-center font-semibold">7-р ангийн сурагчдын дунд зохион байгуулагдсан “Хятад хэлний АХА” тэмцээнд II байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Д.Чамин-Эрдэнэ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">7-р ангийн сурагчдын дунд зохион байгуулагдсан “Хятад хэлний АХА” тэмцээнд II байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Т.Мөнхбилэг </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">“Урлагийн их наадам”-д Гоцлол хөгжим төрөлд I байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">3X3 сагсан бөмбөг </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">А.Цэлмүүн, Э.Мөнхтулга, А.Номин-Эрдэнэ - III байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Н.Мандалмаа</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">Танин мэдэхүйн экскурс хичээлийн “Хөгжөөнт  тэмцээн” төрөлд III байр </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">7а ангийн олс таталтын баг</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">“Олс таталт” төрөлд III байр</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн их наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center font-semibold">Гоцлол хөгжим төрөлд 7а ангийн сурагч Т.Мөнхбилэг 1-р байр</p>
          <p className="text-center font-semibold">Хамтлаг бүжиг төрөлд  ангиараа 3-р байр</p>
          <p className="text-center font-semibold">Чөлөөт номер төрөлд 7а ангийн 15 сурагч 3-р байр</p>
          <p className="text-center font-semibold">Найрал дуу төрөлд ангиараа 2-р байр</p>
          <p className="text-center font-semibold text-red-700">“дунд ангийн төрөл”-д ангиараа II байр эзлэв</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Зургийн цомог</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль"/>
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

export default Dund7a;
