"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/8b/1.png";
import zurag2 from "../../../assets/8b/2.png";
import zurag3 from "../../../assets/8b/3.png";
import zurag4 from "../../../assets/8b/4.png";
import zurag5 from "../../../assets/8b/5.png";
import zurag6 from "../../../assets/8b/6.png";
import zurag7 from "../../../assets/8b/7.png";
import zurag8 from "../../../assets/8b/8.png";
import zurag9 from "../../../assets/8b/9.png";
import zurag10 from "../../../assets/8b/10.png";
import zurag11 from "../../../assets/8b/11.png";
import zurag12 from "../../../assets/8b/12.png";
import zurag13 from "../../../assets/8b/13.png";
import zurag14 from "../../../assets/8b/14.png";
import zurag15 from "../../../assets/8b/15.png";
import zurag16 from "../../../assets/8b/16.png";
import zurag17 from "../../../assets/8b/17.png";
import zurag18 from "../../../assets/8b/18.png";
import zurag19 from "../../../assets/8b/19.png";
import zurag20 from "../../../assets/8b/20.png";
import zurag21 from "../../../assets/8b/21.png";
import zurag22 from "../../../assets/8b/22.png";
import zurag23 from "../../../assets/8b/23.png";
import zurag24 from "../../../assets/8b/24.png";
import zurag25 from "../../../assets/8b/25.png";
import zurag26 from "../../../assets/8b/26.png";
import zurag27 from "../../../assets/8b/27.png";
import zurag28 from "../../../assets/8b/28.png";
import zurag29 from "../../../assets/8b/29.png";
import zurag30 from "../../../assets/8b/30.png";


const Dund8b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleDund = () => { router.push("/dund");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Э.Ариунгэрэл багштай 8B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">8B анги нийт 24 суралцагчтай ба 13 эрэгтэй, 11 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Ц.Энэрэл </p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
  
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Намрын спортын их наадамд анги хамт олноороо амжилттай сайн оролцсон </p>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Олс таталт: <span className=" text-red-700">Мөнгөн медаль</span></p>
            <p className="text-center text-[20px] font-semibold"> <span className=" text-blue-700">Сурагчид </span><span>А.Ирмүүн, Цэрэндорж, Б.Зоригт, Т. Соота, М. Эрхэмбат,  М.Хишигдүүрэн, М.Цэнгүүн, О. Энэржин, Б.Эрдэнэсувд, Ц. Энэрэл</span> </p>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold ">М. Цэрэндорж</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Гар дээр суниалт: <span className=" text-red-700">Алтан медаль</span></p>
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold ">М. Эрхэмбат</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Байрнаас уртад: <span className=" text-red-700">Мөнгөн медаль</span></p>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold ">Б.Батсугар</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">100м гүйлт: <span className=" text-red-700">Мөнгөн медаль</span></p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold ">Б.Зоригт</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">800м гүйлт: <span className=" text-red-700">Хүрэл медаль</span></p>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center  text-[20px] font-semibold ">Б.Зоригт</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Дунд ангийн буухиа эрэгтэй төрөлд: <span className=" text-red-700">Мөнгөн медаль</span></p>
            <p className="text-center text-[20px] font-semibold"> <span className=" text-blue-700">Сурагчид </span><span>М. Ирмүүн, Л. Буяннэмэх,А. Ирмүүн, Б.Батсугар </span> </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Halloween party-2024 </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн Halloween үйл ажиллагаанд анги хамт олноороо амжилттай оролцов. </p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Сургуулийн Halloween үйл ажиллагаанд М. Амирлангоо “Best costume” сурагчаар шалгарав.</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн их наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">Чөлөөт үзүүлбэр: <span className=" text-red-700">Мөнгөн медаль</span></p>
            <p className="text-center text-[12px] font-semibold"> <span className=" text-blue-700">Сурагчид </span><span>А.Ирмүүн, Б.Батсугар, Б.Зоригт, М.Ирмүүн, О. Энэржин, Т.Халиун, Б.Урансанаа, Б.Халиун, Б. Эрдэмбилэг, Т. Соота, М. Эрхэмбат, Н. Чинбат
            </span> </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">"Эх хэл, соёл" долоо хоногийн үйл ажиллагаа</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold ">М. Ирмүүн</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Танил эхээс “Зөв шударга уншихуй” уралдааны дунд ангийн төрөлд: </p>
            <span className=" text-center text-[20px] text-red-700 font-semibold">1-р байр Өргөмжлөл, дурсгалын зүйл</span>
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold ">М. Цэлмүүн</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">Үсэглэлийн хаад”дунд ангийн төрөлд: </p>
            <span className=" text-center text-[20px] text-red-700 font-semibold">1-р байр Өргөмжлөл, дурсгалын зүйл</span>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold ">М. Цэлмүүн</p>
            <p className="text-center  text-[20px] font-semibold text-blue-800">“Сайхан бичигтэн” дунд ангийн төрөлд </p>
            <span className=" text-center text-[20px] text-red-700 font-semibold">1-р байр Өргөмжлөл, дурсгалын зүйл</span>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Оны шилдэг сурагч </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold ">Б. Батсугар</p>
            <span className=" text-center text-[20px] text-red-700 font-semibold">Өргөмжлөл алтан медаль</span>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold ">Анги хамт олноороо амжилттай оролцож <span className=" text-red-700"> “Шилжин явах цомын”</span> эзэд боллоо.</p>
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">6-8-р анги эрэгтэй төрөлд:<span className="text-red-700">Тэргүүн байр алтан медаль</span></p>
            <p className="text-center text-[20px] font-semibold"> <span className=" text-blue-700">Сурагчид: </span><span className=" text-[16px]">Д.Ариунбаатар, А.Ирмүүн, Б.Батсугар, Н. Чингүн, 
            Б.Зоригт, Б. Эрдэмбилэг, Л. Буяннэмэх, Л. Эрхэмбат</span> </p>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">6-8-р анги эмэгтэй төрөлд:</p>
            <span className="text-red-700 text-[16px] font-semibold">Хоёрдугаар байр Мөнгөн медаль</span>
            <p className="text-center text-[20px] font-semibold"> <span className=" text-blue-700">Сурагчид: </span><span className=" text-[16px]">Д.Ц.Энэрэл, М.Хишигдүүрэн, Б.Заяасайхан, О. Энэржин, Б.Халиун, Б.Эрдэнэсувд, Т. Халиун</span> </p>
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">6-8-р анги эрэгтэй шилдэг довтлогч төрөлд:  <span className="text-red-700 text-[16px] font-semibold">Цом</span></p>
          
            <p className="text-center  text-[20px] font-semibold ">Д. Ариунбаатар </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“NATIONAL PI DAY”</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">Анги хамт олноороо “Ханын самбар” төрөлд:</p>
            <span className=" text-red-700  text-[20px] font-semibold">Гуравдугаар байр, үнэ бүхий зүйл</span>
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль" />
            <p className="text-center  text-[20px] font-semibold text-blue-800">Шатрын тэмцээн</p>
            <p className="text-center  text-[20px] font-semibold ">М. Цэнгүүн</p>
            <span className=" text-red-700  text-[20px] font-semibold">Дунд анги төрөлд: 3-р байр</span>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“SCIENCE WEEK” </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль" />
            <span className="text-center">Анги хамт олноороо амжилттай оролцлоо. </span>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Л. Буяннэмэх</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">“Кенгуру 2025”- ОУ-ын математикийн уралдаанд ажилттай оролцож <span className=" text-red-700">III зэргийн диплом </span>Хүртсэн</p>
            <p  className=" text-center">“AMO 2025”- ОУ-ын математикийн уралдаанд ажилттай оролцож <span className=" text-red-700">II дугаар байр </span>Мөнгөн медаль </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">М. Эрхэмбат </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">“AMO 2025”- ОУ-ын математикийн уралдаанд ажилттай оролцож <span className=" text-red-700">3-р байр Өргөмжлөл, Хүрэл медаль</span></p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Б. Батсугар</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">"Сургуулийн аварга шалгаруулах Шатрын тэмцээн” <span className=" text-blue-700">Дунд анги төрөлд: </span> 
            <span className=" text-red-700">2-р байр Мөнгөн медаль</span></p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">“НОМТОЙ НӨХӨРЛӨЕ”</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag30} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center">Шилдэг уншигч: <span className=" text-blue-700">М. Цэнгүүн</span> </p>
            <p className=" text-center">Шилдэг номын тэмдэглэл хөтлөгч: <span className=" text-blue-700">М. Хишигдүүрэн</span> </p>
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

export default Dund8b;
