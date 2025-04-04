"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/12a/1.jpg"
import zurag2 from "../../../assets/12a/2.jpg"
import zurag3 from "../../../assets/12a/3.jpg"
import zurag4 from "../../../assets/12a/4.jpg"
import zurag5 from "../../../assets/12a/5.jpg"
import zurag6 from "../../../assets/12a/6.jpg"
import zurag7 from "../../../assets/12a/7.jpg"
import zurag8 from "../../../assets/12a/8.jpg"
import zurag9 from "../../../assets/12a/9.jpg"
import zurag10 from "../../../assets/12a/10.jpg"
import zurag11 from "../../../assets/12a/11.jpg"
import zurag12 from "../../../assets/12a/12.jpg"
import zurag13 from "../../../assets/12a/13.jpg"
import zurag14 from "../../../assets/12a/14.jpg"
import zurag15 from "../../../assets/12a/15.jpg"
import zurag16 from "../../../assets/12a/16.jpg"
import zurag17 from "../../../assets/12a/17.jpg"
import zurag18 from "../../../assets/12a/18.jpg"
import zurag19 from "../../../assets/12a/19.jpg"
import zurag20 from "../../../assets/12a/20.jpg"
import zurag21 from "../../../assets/12a/21.jpg"
import zurag22 from "../../../assets/12a/22.jpg"
import zurag23 from "../../../assets/12a/23.jpg"
import zurag24 from "../../../assets/12a/24.jpg"
import zurag25 from "../../../assets/12a/25.jpg"
import zurag26 from "../../../assets/12a/26.jpg"
import zurag27 from "../../../assets/12a/27.jpg"
import zurag28 from "../../../assets/12a/28.jpg"
import zurag29 from "../../../assets/12a/29.jpg"
import zurag30 from "../../../assets/12a/30.png"
import zurag31 from "../../../assets/12a/31.jpg"
import zurag32 from "../../../assets/12a/32.jpg"
import zurag33 from "../../../assets/12a/33.jpg"
import zurag34 from "../../../assets/12a/34.png"
import zurag35 from "../../../assets/12a/35.jpg"
import zurag36 from "../../../assets/12a/36.png"
import zurag37 from "../../../assets/12a/37.png"
import zurag38 from "../../../assets/12a/38.jpg"
import zurag39 from "../../../assets/12a/39.png"
import zurag40 from "../../../assets/12a/40.jpg"
const Ahlah12a = () => {

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

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Н.Цогзолмаа багштай 12a анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 2023-2024 оны хичээлийн жилд нийт 23 сурагчтай хичээл сургалтын үйл ажиллагаа явуулж байна. Үүнээс 12 охин 11 хөвгүүн юм.</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">“Sports day 2023”  спортын их наадмын шилжин явах цомын эзэд </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сурагчийн нэг өдөр зохион байгуулав.</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Happy Halloween</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн 
тэмцээн шилжин явах цомын эзэд.
 Хөвгүүд Алтан медаль, охид хүрэл медаль хүртэв.  </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">MCS CocaCola  компанитай танилцав </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Duolingo шалгалтын оноо   </p>
          <div className=" flex flex-col gap-1 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Тамир Эрмүүн  </p>
            <p className=" text-center text-[12px] text-red-500">Duolingo – 155 оноо </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 8.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Гансүх Тэргэл</p>
            <p className=" text-center text-[12px] text-red-500">Duolingo – 120 оноо </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7 оноо  </p>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Ринченбазар</p>
            <p className=" text-center text-[12px] text-red-500">Duolingo – 125 оноо </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Баянжаргал Баяр-Эрдэнэ</p>
            <p className=" text-center text-[12px] text-red-500">Duolingo – 125 оноо </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7.5 оноо  </p>
          </div>
        </div>



        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">IELTS шалгалтын оноо </p>
          <div className=" flex flex-col gap-1 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Жамъян</p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7 оноо  </p>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Хажмухан Асель </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Батжаргал Тэмүүжин  </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Андбаяр Аманда </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Энхтөр Оюунсанаа </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Данзанравжаа Уянганамуун </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.0 оноо  </p>
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Эрдэнэбаатар Чингүүн </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7.0 оноо  </p>
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Баярбаатар Марал-Эрдэнэ  </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Отгонжаргал Энхрийлэн   </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 7.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Отгонбаяр Түгээн   </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Баатар Хулан   </p>
            <p className=" text-center text-[12px] text-red-500"> IELTS – 6.5 оноо  </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Бидний бахархал </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag30} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag31} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag32} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag33} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag34} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag35} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag36} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag37} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag38} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag39} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag40} width={300} alt="Шилдэг сургууль"/>
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

export default Ahlah12a;
