"use client";
import zurag1 from "../../../assets/11A/1.jpg";
import zurag2 from "../../../assets/11A/2.jpg";
import zurag3 from "../../../assets/11A/3.jpg";
import zurag4 from "../../../assets/11A/4.jpg";
import zurag5 from "../../../assets/11A/5.jpg";
import zurag6 from "../../../assets/11A/6.jpg";
import zurag7 from "../../../assets/11A/7.jpg";
import zurag8 from "../../../assets/11A/8.jpg";
import zurag9 from "../../../assets/11A/9.jpg";
import zurag10 from "../../../assets/11A/10.jpg";
import zurag11 from "../../../assets/11A/11.jpg";
import zurag12 from "../../../assets/11A/12.jpg";
import zurag13 from "../../../assets/11A/13.jpg";
import zurag14 from "../../../assets/11A/14.jpg";
import zurag15 from "../../../assets/11A/15.jpg";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
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
        <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Э.Наранмандах багштай 11A ангийн танилцуулга </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> 11A анги нийт 14 суралцагчтай ба 7 хүү, 7 охин. Ангийн дарга Б.Ихбат </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сурагчдын амжилтаас </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center"> Таековандогийн ДЭЛХИЙН аварга 2 төрөлд Б.Ихбат Алтан медаль </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">Таековандогийн УЛСЫН аварга Б.Ихбат 5 Алтан медаль </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">IELTS шалгалтанд А.Чандмань 8 оноо</p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center"> IELTS шалгалтанд С.Нандин-Эрдэнэ 7,5 оноо </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">IELTS шалгалтанд Э.Оюунсондор 7 оноо.</p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl"  src={zurag7}  width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> Намрын спорт наадамд Буухиа төрөлд 3-р байр  </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag8}  width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center"> Урлагийн үзлэг Гоцлол дуу төрөлд Г.Шүр-Эрдэнэ 1-р байр </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2  p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <ul className=" list-disc pl-5">
            <li>Урлагийн үзлэг Гоцлол бүжиг төрөлд Э.Оюунсондор 2-р байр</li>
            <li>
              “Хүн Домог”улсын аварга шалгаруулах Монгол туургатны бүжгийн
              үндэсний их наадам Тэргүүн Дээд “Гранпри шагнал” 2024,
            </li>
            <li>
            Бүжгийн Ертөнц” Улсын Аварга шалгаруулах VI наадам Тэргүүн Дээд “
            Гранпри шагнал” 2024
            </li>
          </ul>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image  className=" rounded-xl"  src={zurag13} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2  p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p>  Voice of Shildeg англи дууны тэмцээнд Г.Шүр-Эрдэнэ тэргүүн байр </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col gap-2 items-center  p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> Манай ангийн сурагчид өөрсдийн хүсэл сонирхол дээрээ тулгуурлан клуб байгуулан амжилттай ажиллуулж байна </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl"src={zurag15} width={300} alt="Шилдэг сургууль" />
          </div>
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
