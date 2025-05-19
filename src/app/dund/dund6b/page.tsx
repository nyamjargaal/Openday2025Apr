"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/6b/1.png";
import zurag2 from "../../../assets/6b/2.png";
import zurag3 from "../../../assets/6b/2.1.png";
import zurag4 from "../../../assets/6b/3.png";
import zurag5 from "../../../assets/6b/4.png";
import zurag6 from "../../../assets/6b/5.png";
import zurag7 from "../../../assets/6b/6.png";
import zurag8 from "../../../assets/6b/7.png";
import zurag9 from "../../../assets/6b/7.1.png";
import zurag10 from "../../../assets/6b/7.2.png";
import zurag11 from "../../../assets/6b/8.png";
import zurag12 from "../../../assets/6b/9.png";
import zurag13 from "../../../assets/6b/10.png";
import zurag14 from "../../../assets/6b/11.png";
import zurag15 from "../../../assets/6b/12.png";
import zurag16 from "../../../assets/6b/13.png";
import zurag17 from "../../../assets/6b/14.png";



const Dund6b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Н.Цогзолмаа багштай 6B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">6B анги нийт 24 суралцагчтай ба 10 эрэгтэй, 14 эмэгтэй</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Sport day 2024</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Гар дээр суниалтын төрөлд Цэнгүүн алтан медаль</p>
            <p className="text-center font-semibold">100м гүйлтийн төрөлд Бадрал хүрэл медаль</p>
            <p className="text-center font-semibold">Холын зайн 800м эмэгтэй гүйлтийн төрөлд А.Мишээл алтан медаль</p>
            <p className="text-center font-semibold">Байрнаас уртын хариалт төрөлд Энхзолбоо 4-р байр</p>
            <p className="text-center font-semibold">Холын зайн 800м эрэгтэй гүйлтийн төрөлд Чингүүн 4-р байр</p>
            <p className="text-center font-semibold">100м гүйлтийн эмэгтэй төрөлд Аминдара 4-р байр тус тус эзэллээ</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">🎉Урлагийн наадмын дүн мэдээ🎉</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Гоцлол дуу төрөлд Аминдара 1-р байр алтан медаль </p>
            <p className="text-center font-semibold">Гоцлол бүжиг төрөлд Сондор 3-р байр хүрэл медаль </p>
            <p className="text-center font-semibold">Чөлөөт үзүүлбэрийн төрөлд 1-р байр алтан медаль хүртэв</p>
            <p className="text-center font-semibold">Дунд ангийн төрөлд багийн дүнгээр 3-т орсон</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ангийн шинэ жил</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Reading Marathon 2024</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Хамгийн их уншсан сурагчаар Гүнжсаран, Аминдара нар тодров</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">"Хиппо" Англи хэлний олимпиад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Нандин бүсийн шигшээ шатанд шалгарч Узбекистан, самарканд хотод оролцох эрхтэй болов</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Монголын уламжлалт цагаан сарын баярыг тохиолдуулан зохион байгуулсан тэмцээнүүд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Шүлэгийн уралдаанд Б. Мишээл 2-р байр </p>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Үндэсний бичигээр хэн цэвэр бичих вэ тэмцээнд И.Энэрэл 2-р байранд шалгарав. </p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Уран бийр тэмцээнд Энхзолбоо 2-р байр </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">BASKETBALL TOURNAMENT-2025🏀🏀</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Нандин бүсийн шигшээ шатанд шалгарч Узбекистан, самарканд хотод оролцох эрхтэй болов</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">А.Мишээл </p>
        <div className="  flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl " src={zurag13} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Ирээдүйн одод таеквондо тэмцээнд Алтан медаль</p>
            <p className="text-center font-semibold">Пүмсэ 2025 багийн төрлөөр хүрэл медаль </p>
            <p className="text-center font-semibold">Улаанбаатар OPEN хүрэл медаль </p>
            <p className="text-center font-semibold">TIA cup Алтан медаль </p>
            <p className="text-center font-semibold">Эв нэгдэл хүрэл медаль хүртэв</p>
            <p className="text-center font-semibold">Эв нэгдэл хүрэл медаль хүртэв</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">З.Цэнгүүн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Reading challenge competition</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Хятад үг хэн хамгийн сайн цээжилсэн бэ тэмцээнд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Сондор 2-р байр </p>
            <p className="text-center font-semibold">Сорхугтани 3-р байр </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Хаврын аялалт хичээл </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
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

export default Dund6b;
