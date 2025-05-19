"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5b/1.png";
import zurag2 from "../../../assets/5b/2.png";
import zurag3 from "../../../assets/5b/3.png";
import zurag4 from "../../../assets/5b/4.png";
import zurag5 from "../../../assets/5b/5.png";
import zurag6 from "../../../assets/5b/6.png";
import zurag7 from "../../../assets/5b/7.png";
import zurag8 from "../../../assets/5b/8.png";
import zurag9 from "../../../assets/5b/9.png";
import zurag10 from "../../../assets/5b/10.png";
import zurag11 from "../../../assets/5b/11.png";


const Dund5b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ш.Цасчихэр багштай 5B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">5B анги нийт 22 суралцагчтай ба 12 эрэгтэй, 10 эмэгтэй</p>
          <p className="text-center">Ангийн дарга О.Анужин </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Уртын харайлтын төрөлд Т.Дөлгөөн хүрэл медаль </p> 
            <p className="text-center">100м гүйлт эмэгтэй төрөлд О. Анужин хүрэл медаль </p> 
            <p className="text-center">4*100 м эмэгтэй төрөлд О. Анужин, Ж. Гэгээлэн, Х. Ялгуун, Б. Сувд-Эрдэнэ нар хүрэл медаль</p> 
            <p className="text-center">4*100 м эрэгтэй төрөлд Б. Анар, Б. Гарьд, М. Саруул, Т. Ананд нар хүрэл медаль тус тус хүртсэн</p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Гоцлол бүжгийн төрөлд Анужин I-р байр алтан медаль</p> 
            <p className="text-center">хамтлаг бүжиг төрөлд II-р байр мөнгөн медаль</p> 
            <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Найрал дууны төрөлд III-р байр хүрэл медаль </p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">О.Анужин</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Ирээдүй одод таеквондогийн аварга шалгаруулах тэмцээнээс “Алтан медаль” </p> 
            <p className="text-center">Улсын аварга шалгаруулах таеквондогийн  тэмцээнээс “Хүрэл медаль” Таеквондогийн “Их наадам”-аас “Хүрэл медаль” </p> 
            <p className="text-center">“TIA CUP” таеквондогийн аварга шалгаруулах тэмцээнээс “Алтан медаль” </p> 
            <p className="text-center">“Улаанбаатар Open” таеквондогийн тэмцээнээс “Алтан медаль” </p> 
            <p className="text-center">Эв нэгдэл таеквондогийн аварга шалгаруулах тэмцээнээс “Алтан медаль” </p> 
            <p className="text-center">Тулааны аварга шалгаруулах улсын аваргын тэмцээний “ Мөнгөн медальт” сурагч </p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ж.Гэгээлэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Ирээдүй одод таеквондогийн аварга шалгаруулах тэмцээнээс “Хүрэл медаль” </p> 
            <p className="text-center">“Улаанбаатар Open” таеквондогийн тэмцээнээс "Алтан медал"</p> 
            <p className="text-center">Эв нэгдэл таеквондогийн аварга шалгаруулах тэмцээний “Алтан медальт”  </p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М.Саруул</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ОУ математикийн  “Vanda” олимпиадын 2-р шатны  “Хүрэл медаль” </p> 
            <p className="text-center">Олон улсын “Аmerican Mathematics Olympiad”- ын  “Мөнгөн медаль” </p> 
            <p className="text-center">ОУ “Кенгуру” олимпиадын II зэрэг </p>  
            <p className="text-center">ОУ математикийн “Sasmо” олимпиадын хүрэл медальт  </p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Гарьд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ОУ математикийн  “Vanda” олимпиадын 2-р шатны “Тусгай байр”</p> 
            <p className="text-center">ОУ “Аmerican Мathematics Оlympiad”- ын  “Хүрэл медальт”  </p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Х.Содбилэг</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ОУ “Аmerican Мathematics Оlympiad”- ын  “Мөнгөн медаль”, </p> 
            <p className="text-center">ОУ “Аsian Мathematics Оlympiad”-ын “Хүрэл медаль”  </p> 
            <p className="text-center">ОУ “Sasmo”олимпиадын “Мөнгөн медаль” </p> 
            <p className="text-center">ОУ “Кенгуру” олимпиадын “Хүрэл медальт” </p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Мэргэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ОУ математикийн “Аmerican Мathematics Оlympiad”- ын  “ Хүрэл медаль ”</p> 
            <p className="text-center">ОУ математикийн “Аsian Мathematics Оlympiad”-ын “ Мөнгөн медальт” </p> 
            <p className="text-center">ОУ математикийн “Sasmo” олимпиадын “ Хүрэл медальт ” </p> 
      </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Т.Очирсүлд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">ОУ математикийн “Vanda”- олимпиадын 2-р давааны “Тусгай байр”</p> 
            <p className="text-center">ОУ математикийн “Sasmo” олимпиадын “Хүрэл медаль</p> 
            <p className="text-center">ОУ математикийн “Кенгуру” олимпиадын “Хүрэл медаль”</p> 
            <p className="text-center">Олон улсын математикийн холбооны хүндэт гишүүний тэмдэгт сурагч</p> 

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

export default Dund5b;
