"use client";
import zurag1 from "../../../assets/12A/1.jpg";
import zurag2 from "../../../assets/12A/2.jpg";
import zurag3 from "../../../assets/12A/3.jpg";
import zurag4 from "../../../assets/12A/4.jpg";
import zurag7 from "../../../assets/12A/7.jpg";
import zurag8 from "../../../assets/12A/8.jpg";
import zurag9 from "../../../assets/12A/9.jpg";
import zurag10 from "../../../assets/12A/10.jpg";
import zurag11 from "../../../assets/12A/11.jpg";
import zurag12 from "../../../assets/12A/12.jpg";
import zurag13 from "../../../assets/12A/13.jpg";
import zurag14 from "../../../assets/12A/14.jpg";
import zurag15 from "../../../assets/12A/15.jpg";
import zurag16 from "../../../assets/12A/16.jpg";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";

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
        <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Э.Наранмандах багштай 12A ангийн танилцуулга </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> 12A анги нийт 15 суралцагчтай ба 8 хүү, 7 охин. Ангийн дарга C.Нандин-эрдэнэ </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сурагчдын амжилтаас </p>

        <div className=" flex flex-col justify-center items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">Б.Ихбат   </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center"> 2025 оны УАШ тэмцээн  алтан медаль    </p>
            <p className=" mt-1">2023.3.11 таеквондогийн Олон улсын мастерын цол зэрэг </p>
            <p className=" mt-1">ДАШТ-ын 5-р байр, Онлайн ДАШТ түль төрөл 1-р байр </p>
            <p className=" mt-1">Азийн аварга шалгаруулах тэмцээн 3 хүрэл </p>
            <p className=" mt-1">Улсын аварга нийт 4 алт, 8 мөнгө 1 хүрэл</p>
            <p className=" mt-1">ОХУ Cup baikal тэмцээний нийт 3 мөнгө, 4 хүрэл</p>
            <p className=" mt-1">БНХАУ тэмцээний нийт 3 алт, 1 мөнгө, 2 хүрэл</p>
            <p className=" mt-1">Улаанбаатар хотын аварга шалгаруулах тэмцээн 2 алт</p>
            <p className=" mt-1">МҮИС Cup 4 алт</p>
            <p className=" mt-1">Мөнх хөх сүлд клубийн нэрэмжит тэмцээн 2 алт </p>
            <p className=" mt-1">Эрч хүч клубийн нэрэмжит тэмцээн 1 хүрэл </p>
            <p className=" mt-1 text-center">Аймаг орон нутгийн тэмцээн :Завхан  Аварга шалгалруулах тэмцээн 4 алт, 1 мөнгө</p>
            <p className=" mt-1">Сүхбаатар АШ тэмцээн  3 алт</p>
            <p className=" mt-1">Эрдэнэт АШ тэмцээнд  2 алт,  Өмнөговь 1алт, 1 хүрэл</p>
            <p className=" mt-1 text-center">2024 оны Таеквондо өсвөрийн аварга шалгаруулах тэмцээнд <b>Тулааны төрөлд алтан медаль</b> <br />  Хар бүс II дангийн түль төрөлд алт</p>
            <p className=" mt-1 text-center">2025 он Australia Goulburn-нд зохион байгуулагдсан “Master Harmer”-ын нэрэмжит CHITF анхдугаар таеквондогийн ОУ-ын Таеквондогийн тэмцээнээс хувийн түль болон тулааны төрөл тус бүрд 2 алт</p>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">Д.Сод-эрдэнэ</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl"  src={zurag7}  width={300} alt="Шилдэг сургууль" />
            <p className=" mt-1 text-center"> "Дорноговь цом 2024" ОУ-ын тэмцээнд 75кг жинд хүрэл медаль</p>
            <p className=" mt-1 text-center"> Оросын холбооны улсын Красноярск хотын аварга шалгаруулах тэмцээд 63кг жинд хүрэл  медаль</p>
            <p className=" mt-1 text-center"> Оросын холбооны улсын Чита хотын аварга шалгаруулах тэмцээнд 66кг жинд мөнгөн медаль</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center">Т.Хасар</p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl"  src={zurag3}  width={300} alt="Шилдэг сургууль" />
            <p className=" mt-1 text-center"> National Championship of MuayThai 3rd Place 2025</p>
            <p className=" mt-1 text-center"> National Championship of Kickboxing 3rd place 2025</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> Сургуулийн Сагсан бөмбөгийн аварга шалгаруулах тэмцээн  </p>
          <p className=" text-center font-extrabold text-blue-800">Хүрэл медаль</p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl" src={zurag8}  width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col gap-2 items-center  p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center"> Манай ангийн сурагчид </p>
          <div className=" flex flex-col gap-2">
            <Image className=" rounded-xl"src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag14} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag15} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl"src={zurag16} width={300} alt="Шилдэг сургууль" />
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
