"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5c/1.png";
import zurag2 from "../../../assets/5c/3.png";
import zurag3 from "../../../assets/5c/4.png";
import zurag4 from "../../../assets/5c/5.png";
import zurag5 from "../../../assets/5c/6.png";
import zurag6 from "../../../assets/5c/7.png";
import zurag7 from "../../../assets/5c/8.png";
import zurag8 from "../../../assets/5c/9.png";
import zurag9 from "../../../assets/5c/10.png";
import zurag10 from "../../../assets/5c/11.png";
import zurag11 from "../../../assets/5c/12.png";


const Dund5c = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Г.Наранцэцэг багштай 5C ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">5C анги нийт 24 суралцагчтай ба 12 эрэгтэй, 12 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Ц.Бямбабаяр </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">2024-2025 оны “Намрын спорт өдөрлөг” 4-5 ангийн төрөлд I-р байр Цомын эзэд болов</p>     
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">100 метрийн гүйлтийн төрөлд “Мөнгөн медальт” сурагч Ц.Бямбабаяр</p>     
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">”Уртын харайлтын” төрөлд “Хүрэл медальт” сурагч Б.Марал-Од</p>   
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">Буухиа гүйлтийн эмэгтэй төрөлд  “Алтан медаль”</p>   
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center text-[20px] font-semibold">“Олс таталт” төрөлд  “Алтан медаль”</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ц.Цахиур</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">2024-2025 оны “AMO” ОУ”ын математикийн олимпиад” -д “Алтан медаль”, </p>
            <p className="text-center font-semibold">“Sasmo 2025”ОУ-ын математикийн олимпиадаас “Алтан медаль ”</p>
            <p className="text-center font-semibold">“Кенгуру” ОУ-ын математикийн олимпиадаас “Алтан медаль” </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">С.Анужин </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">“Урлагийн наадам”ын “Гоцлол бүжиг” төрөлд “хүрэл медаль” </p>
            <p className="text-center font-semibold">“Кенгуру” ОУ-ын математикийн олимпиадын “III”-р зэргийн диплом</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Э.Сүндаръяа </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">Урлагийн наадам”-ын “ Гоцлол дуу” төрөлд “хүрэл медаль”</p>
            <p className="text-center font-semibold">“Кенгуру” ОУ-ын математикийн олимпиадын “III”-р зэргийн диплом</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“Алтан хонх” тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">“Математик” хичээлээр ангийн сурагчдын хүрээнд зохион байгуулсан “Алтан хонх” тэмцээнд         </p>
            <p className="text-center font-semibold">1-р байр Ц.Бямбабаяр</p>
            <p className="text-center font-semibold">2-р байр Ц.Цахиур </p>
            <p className="text-center font-semibold">3-р байр Э.Сүндаръяа</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">У.Цэенпил</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center font-semibold">2024-2025 оны “Sasmo” ОУ”ын математикийн олимпиад” -д “Мөнгөн медаль”.</p>
            <p className="text-center font-semibold">Намрын спортын наадмын 100 метрийн гүйлтийн төрөлд “Алтан медаль”</p>
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

export default Dund5c;
