"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/4c/Khantushig.png";
import zurag0 from "../../../assets/4c/1.png";
import zurag2 from "../../../assets/4c/Saruul.png";
import zurag3 from "../../../assets/4c/anand-ochir.png";
import zurag4 from "../../../assets/4c/saruultuya.png";


const Baga4c = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Х. Дарханцэцэг 4C ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag0} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">4C анги нийт 23 суралцагчтай ба 12 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн уриа <span>Нийт нь нэгний төлөө Нэг нь нийтийн төлөө</span></p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Э.Саруултуяа</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold">2023-2024 оны Олон Улсын Vanda олиампиадын шилдэг оролцогч</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Г.Хантүшиг </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className=" text-center">Намрын спорт гар дээр суниалт 1-р байр алтан медаль</p>
            <p className="text-center">2024-2025 AMO математикийн олиампиадад 1-р байр алтан медаль</p>
            <p className="text-center">SASMO Олон Улсын математикийн олимдиадад 2-р байр мөнгөн медаль</p>
        </div>
        
        <p className="text-center border-b pb-2 text-[20px] font-semibold">А.Саруул </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className=" text-center">Намрын спорт гүйлтийн төрөлд 2-р байр мөнгөн медаль</p>
            <p className="text-center">2024-2025 AMO математикийн олиампиадад 2-р байр мөнгөн медаль</p>
            <p className="text-center">SASMO Олон Улсын математикийн олимдиадад 1-р байр алтан медаль</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М. Ананд-Очир </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className=" text-center">ОНЬСОН ШАТАР-2025 тэмцээнд ДЭД байр мөнгөн медаль</p>
            <p className="text-center">CHESSDAY-2025 шатрын тэмцээнд ДЭД байр мөнгөн медаль</p>
        </div>

        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Baga4c;
