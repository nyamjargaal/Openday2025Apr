"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/3d/1.png";
import zurag2 from "../../../assets/3d/2.png";
import zurag3 from "../../../assets/3d/3.png";
import zurag4 from "../../../assets/3d/4.png";
import zurag5 from "../../../assets/3d/5.png";
import zurag6 from "../../../assets/3d/6.png";
import zurag7 from "../../../assets/3d/7.png";
import zurag8 from "../../../assets/3d/8.png";
import zurag9 from "../../../assets/3d/9.png";
import zurag10 from "../../../assets/3d/10.png";
import zurag11 from "../../../assets/3d/11.png";
import zurag12 from "../../../assets/3d/12.png";
import zurag13 from "../../../assets/3d/13.png";
import zurag14 from "../../../assets/3d/14.png";
import zurag15 from "../../../assets/3d/15.png";
import zurag16 from "../../../assets/3d/16.png";
import zurag17 from "../../../assets/3d/17.png";
import zurag18 from "../../../assets/3d/18.png";
import zurag19 from "../../../assets/3d/19.png";
import zurag20 from "../../../assets/3d/20.png";




const Baga3d = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ж.Баасансүрэн багштай 3D ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">3D анги нийт 23 суралцагчтай ба 12 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга А.Ердана </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">2024-2025 оны “АМО” олимпиадD</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold">Алтан медаль-7</p>
            <p className="text-center">1.	А.Их-Үйлс</p>
            <p className="text-center">2.	О.Анар</p>
            <p className="text-center">3.	Б.Мишээл</p>
            <p className="text-center">4.	Э.Номин-Эрдэнэ</p>
            <p className="text-center">5.	Б.Есүхэй</p>
            <p className="text-center">6.	У.Цэенханд</p>
            <p className="text-center">7.	Т.Мөнх-Энэрэл</p>
            <p className="border-b pb-2 text-[20px] font-semibold">Мөнгөн медаль-2</p>
            <p className="text-center">1.	С.Цэнгүүн</p>
            <p className="text-center">2.	Х.Нарангарав</p>
        </div>

  
        <p className="text-center border-b pb-2 text-[20px] font-semibold">2024-2025 оны “SASMO” олимпиад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="border-b pb-2 text-[20px] font-semibold">Мөнгөн медаль-9</p>
            <p className="text-center">1.	А.Их-Үйлс</p>
            <p className="text-center">2.	Т.Мөнх-Энэрэл</p>
            <p className="text-center">3.	С. Ирмүүн</p>
            <p className="text-center">4.	Б. Манлай</p>
            <p className="text-center">5.	Б.Мишээл</p>
            <p className="text-center">6.	Х.Нарангарав</p>
            <p className="text-center">7.	А. Нэнсайхан</p>
            <p className="text-center">8.	Г. Монголоо</p>
            <p className="text-center">9.	С. Марал-Эрдэнэ</p>
            <p className="border-b pb-2 text-[20px] font-semibold">Хүрэл медаль-3</p>
            <p className="text-center">1.	С.Цэнгүүн</p>
            <p className="text-center">2.	Э. Номин-Эрдэнэ</p>
            <p className="text-center">3.	О.Анар</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Олс таталт <span className=" text-red-700" >Алтан медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Уртын харайлт: <span>Б.Мишээл </span> <span className=" text-red-700" >Алтан медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Уртын харайлт: <span>Т. Шихи-Очир  </span> <span className=" text-red-700" >Мөнгөн медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Гар дээр суниалт: <span>Г.Тэргэлбуд   </span> <span className=" text-red-700" >Мөнгөн медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">100 метр гүйлт: <span>О. Анар  </span> <span className=" text-red-700" >Алтан медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">100 метр гүйлт: <span>У.Цэенханд  </span> <span className=" text-red-700" >Алтан медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Буухиа гүйлт: <span>Э.Бум-Өлзий, Д.Ананд, С.Ирмүүн, О.Анар  </span> <span className=" text-red-700" >Мөнгөн медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">Буухиа гүйлт: <span>Х.Нарангарав, У.Цэенханд, Г.Тэргэлбуд, Б.Мишээл </span> <span className=" text-red-700" >Мөнгөн медаль</span></p>      
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">2024-2025 оны “Спортын наадам”-д нийлбэр дүнгээр 3D анги <span className=" text-red-700"> Цомын эзэд </span>болсон</p>      
        </div>


        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">“Хөгжим” төрөлд Ангиараа түрүүлж <span className=" text-red-700">  ”Алтан медаль”</span> хүртлээ</p>   
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">“Хамтлаг бүжиг” төрөлд Нүргээн хамтлаг <span className=" text-red-700">  ”Алтан медаль”</span> хүртлээ</p>   

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">“Чөлөөт үзүүлбэр” төрөлд Ангиараа түрүүлж  <span className=" text-red-700">  ”Алтан медаль”</span> хүртлээ</p>   

          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">“Найрал дуу” төрөлд Ангиараа түрүүлж  <span className=" text-red-700">  ”Гуравдугаар байр”</span> орлоо</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">III ангиудын Шилдэг сурагч</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">“III ангиудын Шилдэг сурагч”-аар 3D ангийн сурагч У.Цэенханд шалгарлаа.</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Оны тэргүүний сурагч</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">А.Их-Үйлс, Э.Номин-Эрдэнэ, О.Анар, Ц.Ариунбулаг, А.Ердана, С.Цэнгүүн, А.Нэнсайхан, Б.Мишээл, С.Марал-Эрдэнэ нар шалгарлаа</p>   
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">3D ангийн сурагч Б. Манлай “Карате”-гийн тэмцээнээс мөнгөн медаль хүртсэн</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold"> “Tia Cup 2025” таеквондогийн  тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center font-semibold">О. Анар алтан медаль, Х. Нарангарав мөнгөн медаль хүртсэн</p>   
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

export default Baga3d;
