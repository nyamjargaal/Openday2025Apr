"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3a/1.jpg"
import zurag2 from "../../../assets/3a/2.jpg"
import zurag3 from "../../../assets/3a/3.jpg"
import zurag4 from "../../../assets/3a/4.jpg"
import zurag5 from "../../../assets/3a/5.jpg"
import zurag6 from "../../../assets/3a/6.jpg"
import zurag7 from "../../../assets/3a/7.jpg"
import zurag8 from "../../../assets/3a/8.jpg"
import zurag9 from "../../../assets/3a/9.jpg"
import zurag10 from "../../../assets/3a/10.jpg"
import zurag11 from "../../../assets/3a/11.jpg"
import zurag12 from "../../../assets/3a/12.jpg"
import zurag13 from "../../../assets/3a/13.jpg"
import zurag14 from "../../../assets/3a/14.jpg"
import zurag15 from "../../../assets/3a/15.jpg"
import zurag16 from "../../../assets/3a/16.jpg"
import zurag17 from "../../../assets/3a/17.jpg"
import zurag18 from "../../../assets/3a/18.jpg"
import zurag19 from "../../../assets/3a/19.jpg"
import zurag20 from "../../../assets/3a/20.jpg"
import zurag21 from "../../../assets/3a/21.jpg"

const Baga3a = () => {

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

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> 2024-2025 оны хичээлийн жил- 4а ангийн ТАНИЛЦУУЛГА
    </h1>
 
    <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">  Ерөнхий боловсролын “Шилдэг” сургуулийн М.Содмаа багштай 3А анги нь 22 суралцагчтай. Үүнээс эрэгтэй сурагч 12, эмэгтэй сурагч 10.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
   
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Бидний зорилго: Эрдэмд хичээнгүй, эвсэг хамт олон байх.
</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Бидний уриа Номтой нөхөрлөж, найзыгаа хүндэлье, бусдад тусалж, буруутанд зөвлөе, зорилготой байж зорьсондоо хүрцгээе.
</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 оны хичээлийн жилд 3а ангийн сурагчдын гаргасан амжилт

 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, “100м гүйлт”, 1-р байр Ц. Цолмон ,2023 он</li>
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, “100м гүйлт”, 1-р байр З. Ханхүү ,2023 он</li>
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, “4x100м гүйлт”, 1-р байр , 2023 он</li>
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, “Олс таталт”, 1-р байр , 2023 он</li>
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, “Хөгжөөнт тоглоом”, 3-р байр , 2023 он </li>
              <li>Шилдэг ЕБС-Намрын Спортын Наадам, 2-3  ангийн төрөлд 1-р байр , 2023 он</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Шилдэг ЕБС-Урлагийн их наадам, “Хөгжим”,  1-р байр, П. Пүрэвсайхан,  2023 он</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Шилдэг ЕБС-Halloween, “Шилдэг ширээ засалттай анги” 2023 он, 
</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>SASMO Олон Улсын Математикийн олимпиад, мөнгөн медаль, А. Молор , 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, мөнгөн медаль, Ц. Цолмон , 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, мөнгөн медаль, З. Ханхүү , 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, хүрэл медаль, Б. Ананд  , 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, хүрэл медаль, Д. Жасулан , 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, хүрэл медаль, Т. Шүрэнчимэг, 2024 он</li>
              <li>SASMO Олон Улсын Математикийн олимпиад, тусгай байр, Б. Дүүрэнбаяр , 2024 он</li>
              <li>Шилдэг ЕБС-Англи хэлний долоо хоног, “Spelling be” 1-р байр,  Ц. Цолмон , 2023 он</li>
              <li>Шилдэг ЕБС-МХ-ний долоо хоног, “Сайхан бичигтэн” 1-р байр,  Ц. Цолмон , 2023 он</li>
              <li>Шидэт квадрат СТ, “Шидэт квадрат олимпиад”, мөнгөн медаль, Б. Ананд , 2023 он</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>AMO Олон Улсын Математикийн Олимпиад, алтан медаль, А. Хулан , 2023 он</li>
              <li>AMO Олон Улсын Математикийн Олимпиад, мөнгөн медаль, М. Мөнх- Уянга , 2023 он</li>
              <li>AMO Олон Улсын Математикийн олимпиад, тусгай байр, А. Молор , 2023 он</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
            <ul className=" list-disc pl-4">
              <li>Шилдэг ЕБС, Шатрын аварга шалгаруулах тэмцээн, 1-р байр Э. Ариг, 2024 он</li>
              <li>Шилдэг ЕБС, Шатрын аварга шалгаруулах тэмцээн, 2-р байр Б. Ананд, 2024 он
</li>

            </ul>
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

export default Baga3a;
