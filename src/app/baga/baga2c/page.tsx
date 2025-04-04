"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/2c/1.jpg"
import zurag2 from "../../../assets/2c/2.jpg"
import zurag3 from "../../../assets/2c/3.jpg"
import zurag4 from "../../../assets/2c/4.jpg"
import zurag5 from "../../../assets/2c/5.jpg"
import zurag6 from "../../../assets/2c/6.jpg"
import zurag7 from "../../../assets/2c/7.jpg"
import zurag8 from "../../../assets/2c/8.jpg"
const Baga2c = () => {

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
 
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2C ангийн танилцуулга</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Охид – 9, хөвгүүд- 11
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Дээлтэй монгол 
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Бидний амжилтууд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Оны тэргүүний сурагчид 
          Б.Амгалан, Ө.Ундрах-Эрдэм  </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Намрын спортын их наадамд “Байрнаас урт ” төрөлд III байр   Ө.Ундрах-Эрдэм  </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Шатрын аварга шалгаруулах тэмцээнд         
 Т.Дагиймаа, Б.Бат-Эрдэнэ тусгай байр
</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">             SASMO 2024 
Б.Содгэрэл 3-р байр 
Б.Бат-Эрдэнэ тусгай байр
Ө.Ундрах-Эрдэм тусгай байр
</p>
       
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

export default Baga2c;
