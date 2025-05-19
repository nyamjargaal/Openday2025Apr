"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/5d/1.png";



const Dund5d = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ц.Энхсайхан багштай 5D ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">5D анги нийт 22 суралцагчтай ба 11 эрэгтэй, 11 эмэгтэй</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М.Амирлин</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center"> Чөлөөт үзүүлбэр алт</p>
            <p className="text-center"> Хамтлаг бүжиг алт</p>
            <p className="text-center"> Найрал дуу алт</p>
            <p className="text-center text-red-700">Сургуулийн спортын их наадам</p>
            <p className="text-center">Олс таталт мөнгө</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">О.Ананд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center"> Оны тэргүүний сурагчт</p>
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>
            <p className="text-center">Гоцлол бүжиг хүрэл</p>
            <p className="text-center">Найрал дуу алт</p>
            <p className="text-center text-red-700">Сургуулийн спортын их наадам</p>
            <p className="text-center">4x100 гүйлт мөнгө</p>
            <p className="text-center">100 метр гүйлт хүрэл</p>
            <p className="text-center text-red-700">Таеквондо</p>
            <p className="text-center">Ирээдүй одод мөнгө</p>
            <p className="text-center">Улсын аварга хосын төрөл хүрэл</p>
            <p className="text-center text-red-700">Математик</p>
            <p className="text-center">AMO алт</p>
            <p className="text-center">SASMO хүрэл</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ө.Ананда</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Х.Анандбалжир</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>       
            <p className="text-center">Хамтлаг бүжиг алт</p>       
            <p className="text-center">Найрал дуу алт</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ш.Ариунболд</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>        
            <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>       
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Ерөөлт</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Өвлийн явган алхалтын фестиваль – 10км, 15 км</p>       
            <p className="text-center">1st JKA Mongolian International Karate Cup сертификат</p>         
            <p className="text-center">3rd JKA Mongolian National Karate Championship шар бүс</p>         
            <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>         
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Мандах</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>  
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Хамтлаг бүжиг алт</p>             
            <p className="text-center">Найрал дуу алт</p>  
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">Олс таталт мөнгө</p>             
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Маргад-Эрдэнэ</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Хамтлаг бүжиг алт</p>  
            <p className="text-center">Хамтлаг дуу алт</p>  
            <p className="text-center">Найрал дуу алт</p>  
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">Олс таталт мөнгө</p>             
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М.Мөнх-Үүлэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>             
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Хамтлаг бүжиг алт</p>  
            <p className="text-center">Хамтлаг дуу алт</p>  
            <p className="text-center">Гоцлол дуу мөнгө</p>    
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">4x100 гүйлт мөнгө</p>           
            <p className="text-center">100 метр гүйлт тусгай байр</p>           
        </div>
        
        <p className="text-center border-b pb-2 text-[20px] font-semibold">М.Мөнх-Үүлэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>             
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Хамтлаг бүжиг алт</p>  
            <p className="text-center">Хамтлаг дуу алт</p>  
            <p className="text-center">Гоцлол дуу мөнгө</p>    
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">4x100 гүйлт мөнгө</p>           
            <p className="text-center">100 метр гүйлт тусгай байр</p>           
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">В.Мөнхжин </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>             
            <p className="text-center">SASMO мөнгөн медаль</p>             
            <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Хамтлаг бүжиг алт</p>  
            <p className="text-center">Найрал дуу алт</p>            
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Нацагдорж </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
            <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>             
            <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>             
            <p className="text-center">Vanda олимпиад мөнгөн медаль</p>                    
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Э.Номун</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Хамтлаг бүжиг алт</p>  
            <p className="text-center">Найрал дуу алт</p>    
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">Спорт буухиа мөнгө</p>                            
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Т.Нэгүн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>             
        <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>                          
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ө.Сэцэн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>   
        <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
            <p className="text-center">Чөлөөт үзүүлбэр алт</p>             
            <p className="text-center">Найрал дуу алт</p>    
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">Олс таталт мөнгө</p>                            
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Г.Төгөлдөр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>   
            <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
            <p className="text-center">4x100 гүйлт мөнгө</p>                            
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Түвшин-Очир</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center text-red-700"> Сургуулийн урлагийн наадам</p>
          <p className="text-center">Найрал дуу алт</p>  
          <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
          <p className="text-center">Олс таталт мөнгө</p>                              
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М.Тэлмүүн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>  
          <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>                           
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">П.Ундарга</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">Сургуулийн урлагийн наадмаас найрал дуу төрлөөр алтан медаль</p>             
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Ундрах</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">Hippo олимпиад амжилттай оролцож сертификат</p>   
          <p className="text-center text-red-700">Сургуулийн урлагийн наадам</p>
          <p className="text-center">Чөлөөт үзүүлбэр алт</p>  
          <p className="text-center">Найрал дуу алт</p>  
          <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
          <p className="text-center">Олс таталт мөнгө</p>   
          <p className="text-center text-red-700">Таеквондо</p>
          <p className="text-center">Ирээдүй одод хүрэл</p>   
          <p className="text-center">Улсын аварга хосын төрөл хүрэл</p>   
          <p className="text-center">Tia cup хүрэл</p>   
          <p className="text-center">Ulaanbaatar open хүрэл</p>   
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б.Хайлан</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
        <p className="text-center text-red-700">Сургуулийн урлагийн наадам</p>
        <p className="text-center">Чөлөөт үзүүлбэр алт</p>  
        <p className="text-center">Найрал дуу алт</p>  
        <p className="text-center">АМО олимпиад хүрэл медаль</p>  
        <p className="text-center">VANDA олимпиад тусгай байр</p>  
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Д.Хишиг-Ундрал </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center text-red-700">Сургуулийн урлагийн наадам</p>
          <p className="text-center">Чөлөөт үзүүлбэр алт</p>  
          <p className="text-center">Найрал дуу алт</p>  
          <p className="text-center text-red-700"> Сургуулийн спортын наадам</p>
          <p className="text-center">4x100 гүйлт мөнгө</p>   
          <p className="text-center">AMO олимпиад хүрэл медаль</p>   
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

export default Dund5d;
