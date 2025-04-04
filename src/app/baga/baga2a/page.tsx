"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/2a/1.jpg"
import zurag2 from "../../../assets/2a/2.jpg"
import zurag3 from "../../../assets/2a/3.jpg"
import zurag4 from "../../../assets/2a/4.jpg"
import zurag5 from "../../../assets/2a/5.jpg"
import zurag6 from "../../../assets/2a/6.jpg"
import zurag7 from "../../../assets/2a/7.png"
import zurag8 from "../../../assets/2a/8.png"
import zurag9 from "../../../assets/2a/9.png"
import zurag10 from "../../../assets/2a/10.jpg"
import zurag11 from "../../../assets/2a/11.png"
import zurag12 from "../../../assets/2a/12.jpg"
import zurag13 from "../../../assets/2a/13.jpg"
import zurag14 from "../../../assets/2a/14.jpg"
import zurag15 from "../../../assets/2a/15.jpg"
import zurag16 from "../../../assets/2a/16.jpg"
const Baga2a = () => {

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

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  2А ангийн танилцуулга</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
            <p className="text-center border-b pb-2 text-[20px] font-semibold">Охид – 10, хөвгүүд-8
 </p>
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Дээлтэй монгол </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Шинэ жил </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />

          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Урлагийн наадам-найрал дуу төрөлд ангиараа мөнгөн медаль хүртсэн</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />

          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Бидний амжилтууд</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Б.Сонор Уртын хариалтад хүрэл медаль                  Босхол –Англи хэлээр алтан медаль                                                                        SASMO 2024- Мөнгөн медаль                                                                                                            
</p>

</div>
        </div>
        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Босхол –Англи хэлээр алтан медаль</p>

</div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">1. Ө.Мишээл Нийслэлийн “миний Улаанбаатар” зургийн үзэсгэлэн 3 дугаар байр хүрэл                                                  
SASMO 2024- Мөнгөн медаль Шатрын тэмцээнд- Алтан медаль SASMO 2024- Мөнгөн медаль                                                                                                                                                                                                                                                             
</p>

</div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Б.Сондор  SASMO 2024- Мөнгөн медаль                                                                                                                                                                                                                                                          
</p>

</div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Бидний амжилтууд:
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />

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

export default Baga2a;
