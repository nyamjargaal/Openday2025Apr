"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/10a/1.jpg"
import zurag2 from "../../../assets/10a/2.png"
import zurag3 from "../../../assets/10a/3.jpg"
import zurag4 from "../../../assets/10a/4.jpg"
import zurag5 from "../../../assets/10a/5.jpg"
import zurag6 from "../../../assets/10a/6.jpg"
import zurag7 from "../../../assets/10a/7.jpg"
import zurag8 from "../../../assets/10a/8.jpg"
import zurag9 from "../../../assets/10a/9.jpg"
import zurag10 from "../../../assets/10a/10.jpg"
import zurag11 from "../../../assets/10a/11.jpg"
import zurag12 from "../../../assets/10a/12.jpg"
import zurag13 from "../../../assets/10a/13.jpg"
import zurag14 from "../../../assets/10a/14.jpg"
import zurag15 from "../../../assets/10a/15.jpg"
import zurag16 from "../../../assets/10a/16.jpg"
import zurag17 from "../../../assets/10a/17.jpg"
import zurag18 from "../../../assets/10a/18.jpg"
import zurag19 from "../../../assets/10a/19.jpg"
import zurag20 from "../../../assets/10a/20.jpg"
import zurag21 from "../../../assets/10a/21.jpg"
import zurag22 from "../../../assets/10a/22.jpg"
import zurag23 from "../../../assets/10a/23.jpg"
import zurag24 from "../../../assets/10a/24.jpg"
import zurag25 from "../../../assets/10a/25.jpg"
import zurag26 from "../../../assets/10a/26.jpg"
import zurag27 from "../../../assets/10a/27.jpg"
import zurag28 from "../../../assets/10a/28.jpg"
import zurag29 from "../../../assets/10a/29.jpg"
import zurag30 from "../../../assets/10a/30.jpg"
import zurag31 from "../../../assets/10a/31.jpg"
import zurag32 from "../../../assets/10a/32.jpg"
import zurag33 from "../../../assets/10a/33.jpg"
import zurag34 from "../../../assets/10a/34.jpg"
import zurag35 from "../../../assets/10a/35.jpg"
import zurag36 from "../../../assets/10a/36.jpg"
const Ahlah10a = () => {

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

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> Д.Оюунаа багштай 11А анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 10A анги нийт 26 суралцагчтай ба 9 хүү, 17 охин </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Ангийн дарга
Ш.Тэнгис
 </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
     
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> 2023-2024 оны хичээлийн жилд зохион байгуулсан анги 
нийтийн ажил
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> “Өсвөр насны хүүхдийн нөхөн үржихүйн эрүүл мэнд” сургалт  </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  “Хэмнэе, хуримтлуулъя” ахлах ангийханд зориулсан сургалт </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  “Хар тамхи, мансууруулах бодис болон электрон тамхины хор нөлөө” сургалт
 </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Улсын их хурлын хурал болон төрийн 
ордонтой танилцав. </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>
        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  “Идэвхтэй суралцахуй” сургалт.</p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сургууль олон нийтийн үйл ажиллагаанд анги хамт 
олноороо оролцсон байдал
 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Эх хэл, соёлын долоо хоног</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Эсээ бичлэг уралдаан Г.Есүй</p>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Хичээнгүй бичигтэн шалгаруулах уралдаан (Үндэсний бичиг)
Б.Насанцацрал
</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Нэрэмжит долоо хоногуудын үйл ажиллагаанд оролцсон байдал </p>
          <div className=" flex flex-col gap-2 items-center">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Англи хэл дээрх мэтгэлцээн тэргүүн байр</p>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">МНТ хэн сайн мэдэх вэ? 
Алт, хүрэл медаль </p>
          </div>
        </div>


        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Спорт болон урлагийн ололт,амжилт </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
          </div>
        </div>


        
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">3*3 сагсан бөмбөг -Алтан медаль </p>
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">3*3 сагсан бөмбөг - Мөнгөн медаль</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Гар дээр суниалт мөнгөн медаль </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Н.Өнөржаргал </p>
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Ч.Тэргэл </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Ойрын болон холын зайн гүйлт 
       </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Мөнгөн медаль Ч.Мишээл (100m) </p>
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Хүрэл медаль Э.Наранбаяр (100m) </p>
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Мөнгөн медаль Ш.Тэнгис (800m)</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Олс таталт хүрэл медаль</p>
            <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Уртын харайлт алтан медаль О.Содбилэг</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Сургуулийн аварга шалгаруулах волейболын тэмцээн- Алтан медаль
       </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag30} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag31} width={300} alt="Шилдэг сургууль"/>  
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Урлагийн наадам 
Найрал дуу төрөлд тэргүүн байр
       </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag32} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>


    
        <p className="text-center border-b pb-2 text-[20px] font-semibold"> Сурагчдын ололт,амжилт </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag33} width={300} alt="Шилдэг сургууль" />
 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Баянзүрх дүүргийн олимпиад 
       </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag34} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Түүх тусгай байр
Б.Ану-Үжин
Б.Урансолонго
 </p>
            <Image className=" rounded-xl" src={zurag35} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Монгол хэл тусгай байр 
Б.Хүслэн
</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">  Нийслэлийн аварга шалгаруулах өсвөрийн Жүдо бөхийн тэмцээн Хүрэл медаль Б.Ану-Үжин
       </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image className=" rounded-xl" src={zurag36} width={300} alt="Шилдэг сургууль" />
        
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

export default Ahlah10a;
