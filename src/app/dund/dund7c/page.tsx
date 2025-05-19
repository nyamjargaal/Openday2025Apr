"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/7c/1.png";
import zurag2 from "../../../assets/7c/2.png";
import zurag3 from "../../../assets/7c/3.png";
import zurag4 from "../../../assets/7c/4.png";
import zurag5 from "../../../assets/7c/5.png";
import zurag6 from "../../../assets/7c/6.png";
import zurag7 from "../../../assets/7c/7.png";
import zurag8 from "../../../assets/7c/8.png";
import zurag9 from "../../../assets/7c/9.png";
import zurag10 from "../../../assets/7c/10.png";
import zurag11 from "../../../assets/7c/11.png";
import zurag12 from "../../../assets/7c/12.png";
import zurag13 from "../../../assets/7c/13.png";
import zurag14 from "../../../assets/7c/14.png";
import zurag15 from "../../../assets/7c/15.png";
import zurag16 from "../../../assets/7c/16.png";
import zurag17 from "../../../assets/7c/17.png";
import zurag18 from "../../../assets/7c/18.png";
import zurag19 from "../../../assets/7c/19.png";
import zurag20 from "../../../assets/7c/20.png";
import zurag21 from "../../../assets/7c/21.png";
import zurag22 from "../../../assets/7c/22.png";
import zurag23 from "../../../assets/7c/23.png";
import zurag24 from "../../../assets/7c/24.png";
import zurag25 from "../../../assets/7c/25.png";
import zurag26 from "../../../assets/7c/26.png";
import zurag27 from "../../../assets/7c/27.png";
import zurag28 from "../../../assets/7c/28.png";
import zurag29 from "../../../assets/7c/29.png";
import zurag30 from "../../../assets/7c/30.png";
import zurag31 from "../../../assets/7c/31.png";


const Dund7c = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");}; 

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Ц.Нямдэлгэр багштай 7C ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">7C анги нийт 20 суралцагчтай ба 9 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Б.Тэнүүн </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">2023-2024 оны хичээлийн жилийн “ТЭРГҮҮНИЙ АНГИ” шагналт 7с анги</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
          <p className="text-center  text-[20px] font-semibold ">З. Амин-Эрдэнэ </p>
          <p className="text-center  text-[20px] font-semibold text-blue-800">Уртын харайлтын төрөлд:  <span className=" text-center text-[20px] text-red-700 font-semibold">1-р байр</span></p>
          
          <p className="text-center  text-[20px] font-semibold ">Б. Наранцацрал </p>
          <p className="text-center  text-[20px] font-semibold text-blue-800">суниалтын төрөлд: <span className=" text-center text-[20px] text-red-700 font-semibold">3-р байр</span></p>
          <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
          <p className="text-center">Урлагийн их наадамд анги хамт олноороо амжилттай оролцож нийлбэр дүнгээр 1-р байр эзлэв. </p> 
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн их наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">Найрал дуу : <span className=" text-red-700">3-р байр </span></p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">Хамтлаг бүжиг: <span className=" text-red-700">2-р байр </span></p>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[16px] font-semibold text-blue-800">Гоцлол бүжиг : <span className=" text-red-700">М. Анучимэг 2-р байр </span></p>
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[16px] font-semibold text-blue-800">Гоцлол дуу : <span className=" text-red-700">Б. Маралгоо 3-р байр </span></p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“Бидний мэдэх Чингис хаан” зохион бичлэгийн уралдаан</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[16px] font-semibold text-blue-800">6-8-р ангийн ангилалд:</p>
            <span className=" text-red-700">Б. Түвшинбаяр-н бүтээл шалгарав</span>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Сурагчдын дундах сагсан бөмбөгийн тэмцээнд анги хамт олноороо амжилттай оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Ангийн Шинэ жил</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Анги хамт олноороо “Шинэ жил” тэмдэглэж дурсамжтай сайхан цагийг өнгөрөөв</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Оны шилдэг сурагч</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Сурагч Б. Түвшинбаяр болон Б. Наранцацрал “Оны шилдэг сурагч”-аар шалгарав. </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Шинэ жилийн гала тоглолт</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Сургуулийн шинэ жилийн гала тоглолтод хятад бүжгийн үзүүлбэрээр оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Дээлтэй монгол өдөрлөг</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Дунд ангийн төрөлд нийт оноогоор “1-р байр” эзлэв.</p>
            <p className="text-center text-[12px] font-semibold">Шүлгийн уралдаан Б. Монголжин 1-р байр</p>
            <p className="text-center text-[12px] font-semibold">Цэвэр бичгийн уралдаан Ц. Намиа 3-р байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Пи тооны өдөр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">6-8-р ангийнхны дунд зохион байгуулсан</p>
            <p className="text-center text-[12px] font-semibold">“ШИЛДЭГ ХАНЫН САМБАР” шалгаруулах уралдаанд 2-р байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“Миний гэр бүлийн оройн зоог” сэдэвт гар зургийн уралдаан</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">У. Мэргэн, Б. Наранцацрал амжилттай оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“Зөв, шударга, уншихуй” үндэсний бичгийн уралдаан</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Ц. Намиа 3-р байр</p>
            <p className="text-center text-[12px] font-semibold">“Үсэглэлийн хаад” уралдаанд сурагч Б. Монголжин 2-р байр</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">ХИППО ОУ-ын англи хэлний олимпиад </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">ХИППО ОУ-ын англи хэлний олимпиад анги хамт олноо манлайлж идэвхтэй оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">ОУ-ын SASMO математикийн олимпиадад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">ОУ-ын SASMO математикийн олимпиадад анги хамт олноо манлайлж идэвхтэй оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Дүүргийн олимпиад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Дүүргийн Монгол хэл, бичгийн олимпиадад анги хамт олноо манлайлж идэвхтэй оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Хүүхдийн шар зургийн улсын XIV олимпиадад</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Хүүхдийн шар зургийн улсын XIV олимпиадад идэвхтэй оролцож анги хамт олноо манлайлав</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">HSK1 Хятад хэлний ОУ-н түвшин тогтоох шалгалт</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">HSK1 Хятад хэлний ОУ-н түвшин тогтоох шалгалтад амжилттай оролцов</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Экскурс</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Экскурс хичээлийн үеэр зохион байгуулагдсан олс таталтын тэмцээн 2-р байр </p>
            <Image className=" rounded-xl" src={zurag30} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Экскурс хичээлийн үеэр зохион байгуулагдсан 3Х3 сагсан бөмбөгийн тэмцээн 2-р байр </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М. Анучимэг </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag31} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[12px] font-semibold">Flèch cup 2-р байр </p>
            <p className="text-center text-[12px] font-semibold">ХАШТ 3-р байр</p>
            <p className="text-center text-[12px] font-semibold">DFC cup 1-р байр </p>
            <p className="text-center text-[12px] font-semibold">УАШТ ганцаарчилсан төрөлд  3- байр </p>
            <p className="text-center text-[12px] font-semibold">УАШТ багын төрөлд 3-р байр </p>
            <p className="text-center text-[12px] font-semibold">Олимпак кап 3-р байр </p>
          </div>
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

export default Dund7c;
