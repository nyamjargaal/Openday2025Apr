"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/1d/1.jpg"
import zurag2 from "../../../assets/1d/2.png"
import zurag3 from "../../../assets/1d/3.jpg"
import zurag4 from "../../../assets/1d/4.jpg"
import zurag5 from "../../../assets/1d/5.jpg"
import zurag6 from "../../../assets/1d/6.jpg"
import zurag7 from "../../../assets/1d/7.png"
import zurag8 from "../../../assets/1d/8.jpg"
import zurag9 from "../../../assets/1d/9.jpg"
import zurag10 from "../../../assets/1d/10.jpg"
import zurag11 from "../../../assets/1d/11.jpg"
import zurag12 from "../../../assets/1d/12.jpg"
import zurag13 from "../../../assets/1d/13.jpg"
import zurag14 from "../../../assets/1d/14.jpg"
import zurag15 from "../../../assets/1d/15.jpg"
import zurag16 from "../../../assets/1d/16.jpg"
import zurag17 from "../../../assets/1d/17.jpg"
import zurag18 from "../../../assets/1d/18.jpg"
import zurag19 from "../../../assets/1d/19.jpg"
import zurag20 from "../../../assets/1d/20.jpg"
import zurag21 from "../../../assets/1d/21.jpg"
import zurag22 from "../../../assets/1d/22.jpg"
import zurag23 from "../../../assets/1d/23.jpg"
import rainy from "../../../assets/1d/rainy.jpg"

const Baga1d = () => {

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

      <p className="text-center border-b pb-2 text-[20px] font-semibold"> БИДНИЙ АМЖИЛТ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>
     
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Л.Ариунмөнх багштай 1D анги нийт 16 сурагчтай, охид-11, хөвгүүд 5 </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Л.Ариунмөнх багштай 1D анги нь “Намрын спортын өдөрлөгт”-т амжилттай сайн оролцлоо </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 1D анги нь “Halloween” баяр дүрд хувиран, ангиа чимэглэн амжилттай оролцлоо. </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 1С анги нь “Дээлтэй Монгол” өдөрлөгт нэгдэн үндэсний хувцсаараа гоёлоо.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 1D анги нь уншиж, бичиж, бодож сурснаа эцэг эхдээ тайлагнан “Тайлант өдөрлөг”-т амжилттай оролцлоо.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Л.Ариунмөнх багштай 1D анги юу сурч мэдсэнээ эцэг эхдээ тайлагнан “Эрдмийн баяр” хийлээ.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Л.Ариунмөнх багштай 1D анги юу сурч мэдсэнээ эцэг эхдээ тайлагнан “Эрдмийн баяр” хийлээ.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  1D ангийн Б.Энхтөр “New word master” тэмцээний ялагч болов.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">   1d ангийн  сурагч Б.Содбилэг, Б.Мишээл, Л.Мөнхлөн нар “ Song master” дууны тэмцээний ялагчаар, Б.Энхтөр, Б.Оюундэлгэр, Э.Энхбазар нар “New word master”-аар тус тус шалгарсан.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Англи хэлний “Reading day” өдөрлөгтөө ангиараа 100% амжилттай сайн оролцлоо.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={rainy} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 1-р ангиудын дунд зохиогдсон эх хэлээрээ цэвэр сайхан бичих, унших чадварыг сорин “Түргэн уншигч” болон “Цэвэр сайхан бичигтэн” сурагчдыг шалгарууллаа. </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
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

export default Baga1d;
