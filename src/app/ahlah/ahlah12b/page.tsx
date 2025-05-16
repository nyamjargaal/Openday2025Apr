"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag0 from "../../../assets/12B/0.png";
import zurag1 from "../../../assets/12B/1.png";
import zurag2 from "../../../assets/12B/2.png";
import zurag3 from "../../../assets/12B/3.png";
import zurag4 from "../../../assets/12B/4.png";
import zurag5 from "../../../assets/12B/5.png";
import zurag6 from "../../../assets/12B/6.png";
import zurag7 from "../../../assets/12B/7.png";
import zurag8 from "../../../assets/12B/8.png";
import zurag9 from "../../../assets/12B/9.png";
import zurag10 from "../../../assets/12B/10.png";
import zurag11 from "../../../assets/12B/11.png";
import zurag12 from "../../../assets/12B/12.png";
import zurag13 from "../../../assets/12B/13.png";
import zurag14 from "../../../assets/12B/14.png";

const Ahlah12b = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleAhlah = () => { router.push("/ahlah");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">С.Дуламдорж багштай 12B ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">12B анги нийт 22 суралцагчтай ба 10 эрэгтэй, 12 эмэгтэй</p>
          <p className="text-center">Ангийн дарга Б.Эрдэнэбулган </p>
          <Image className=" rounded-xl" src={zurag0} width={300} alt="Шилдэг сургууль" />
          <p className="text-center">
            Ангийн нийт сурагчид хичээл сурлага төдийгүй урлаг, спортын өндөр
            авьяастай, хүмүүжил төлөвшил сайтай сурагчид юм. Анги болон
            сургуулиас зохион байгуулсан аливаа уралдаан тэмцээн, үйл
            ажиллагаанд идэвхтэй сайн оролцдог сургуулийн шилдэг анги хамт олны
            нэг билээ
          </p>
        </div>
        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="border-b pb-2 text-[20px] font-semibold"> Эрэгтэй </p>
            <p className="text-center  text-[20px] font-semibold text-blue-800"> Байрнаас уртын харайлт </p>
            <p className="text-center text-[20px] font-semibold"> Эрэгтэй төрөлд хүрэл медаль – Э.Амартүвшин </p>
            <p className="text-center text-[20px] font-semibold"> Эмэгтэй төрөлд алтан медаль  - О.Баярмаа</p>
            <p className="text-center text-[20px] font-semibold text-blue-800">Гар дээр суниалт </p>
            <p className="text-center text-[20px] font-semibold"> Эрэгтэй төрөлд мөнгөн медаль – Б.Эрдэнэбулган </p>
            <p className="text-center text-[20px] font-semibold"> Эмэгтэй төрөлд алтан медаль – Т.Эмүүжин </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">Гар дээр суниалт </p>
            <p className="text-center text-[20px] font-semibold"> Эрэгтэй төрөлд мөнгөн медаль – Б.Эрдэнэбулган </p>
            <p className="text-center text-[20px] font-semibold"> Эмэгтэй төрөлд алтан медаль – Т.Эмүүжин </p>
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
            <p className="text-center text-[20px] font-semibold text-blue-800">Олс таталт </p>
            <p className="text-center text-[20px] font-semibold">2-р байр мөнгөн медаль </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">4x4 буухаа </p>
            <p className="text-center text-[20px] font-semibold">эмэгтэй мөнгөн медаль – Б.Мөнхчимэг, О.Баярмаа, Т.Эмүүжин, Б.Дөлгөөн</p>
            <p className="text-center text-[20px] font-semibold text-blue-800">800 м гүйлт </p>
            <p className="text-center text-[20px] font-semibold">Эрэгтэй төрөлд хүрэл медаль – – Б.Өнөболд</p>
            <p className="text-center text-[20px] font-semibold"> Эмэгтэй төрөлд хүрэл медаль – Т. Эмүүжин</p>
            <p className="text-center text-[20px] font-semibold text-blue-800">100м гүйлт </p>
            <p className="text-center text-[20px] font-semibold">Эрэгтэй төрөлд мөнгө медаль – Х.Хангарьд</p>
            <p className="text-center text-[20px] font-semibold">Эмэгтэй төрөлд мөнгөн медаль – О.Баярмаа</p>
            <p className="text-center text-[20px] font-semibold text-blue-800">3х3 сагсан бөмбөгийн тэмцээнд  </p>
            <p className="text-center text-[20px] font-semibold">Эрэгтэй баг хүрэл медаль – Б.Билэгсайхан, Х.Хангарьд, Б.Өнөболд</p>
            <p className="text-center text-[20px] font-semibold">Эмэгтэй баг мөнгөн медаль – О.Ундармаа, О.Баярмаа, Жинжиймаа</p>
            <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">Багийн нийлбэр дүнгээр 2-р байр эзэлсэн</h1>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Урлагийн наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]"> Гоцлол хөгжим төрөлд хүрэл медаль – Б.Төгөлдөр</p>
            <p className=" text-center text-[12px]"> Чөлөөт үзүүлбэр хүрэл медаль – Ангиараа </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Монгол бахархлын 7 хоногийн хүрээнд зохион байгуулагдсан МНТ-г хэн сайн мэдэх вэ ? 50 саяын уналт тэмцээнд </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Эрдэнэбулган, Баярмаа, Эмүүжин нар амжилттай оролцож тэргүүн байр эзэлсэн</p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Баянзүрх дүүргийн төрөлжсөн олимпиад </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Нийгмийн ухааны олимпиадад</p>
            <p className=" text-center text-[12px]">Б.Хулан 1-р байр – алтан медаль</p>
            <p className=" text-center text-[12px]">Б.Эрдэнэбулган – тусгай байр </p>
            <p className=" text-center text-[12px]">Б.Аззаяа – тусгай байр </p>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Орос хэлний олимпиад  </p>
            <p className=" text-center text-[12px]">Б.Аззаяа – 1-р байр алтан медаль </p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Физикийн олимпиад </p>
            <p className=" text-center text-[12px]">Б.Эрдэнэбулган тусгай байр </p>
          </div>
        </div>
       

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн оны шилдэг сурагч</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Б.Хулан, Б.Эрдэнбулган нар оны шилдэг сурагч шагналыг хүртлээ</p> 
          </div>
        </div>


        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Эрэгтэй баг – мөнгөн медаль </p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Эмэгтэй баг – алтан медаль</p>
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Шилдэг эмэгтэй тоглогчоор О.Ундармаа </p>
            <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">Багийн нийлбэр дүнгээр 1- р байр эзэлж шилжин явах цомын эзэд боллоо</h1>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Пи тооны өдөр – Математикийн 7 хоног </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Пи тоог цээжээр хэн сайн мэдэх вэ ?</p>
            <p className=" text-center text-[12px]">Б.Эрдэнэбулган  2-р байр </p>
            <p className=" text-center text-[12px]">Б.Төгөлдөр 3-р байр </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">Математикийн үг <br /> хэллэгийг англиар хэн сайн мэдэх вэ? </p>
            <p className=" text-center text-[12px]">Амартүвшин 3- р байр </p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Эмэгтэй баг – алтан медаль</p>
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Шилдэг эмэгтэй тоглогчоор О.Ундармаа </p>
            <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">Багийн нийлбэр дүнгээр 1- р байр эзэлж шилжин явах цомын эзэд боллоо</h1>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Үндэсний бичгийн баяр</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />
            <p className="text-center text-[20px] font-semibold text-blue-800">Танил эхээс “Зөв шударга уншихуй” <br /> уралдааны ахлах ангийн ангийн төрөлд</p>
            <p className=" text-center text-[12px]">А.Намуундарь 3-р байр </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">Танил бус эхээс “Зөв шударга уншихуй”</p>
            <p className=" text-center text-[12px]">А.Намуундарь 2-р байр </p>
            <p className=" text-center text-[12px]">Б.Эрдэнэбулган 3-р байр </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">“Үсэглэлийн хаад” ахлах ангийн төрөлд </p>
            <p className=" text-center text-[12px]">А.Намуундарь 2-р байр </p>
            <p className=" text-center text-[12px]">Б.Эрдэнэбулган 3-р байр </p>
            <p className="text-center text-[20px] font-semibold text-blue-800">Математикийн үг <br /> хэллэгийг англиар хэн сайн мэдэх вэ? </p>
            <p className=" text-center text-[12px]">А.Намуундарь 1-р байр </p>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">2025 а,б ангйн нэрэмжит гар бөмбөгийн тэмцээн </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">1-р баг Хүрэл медаль  </p>
            <p className=" text-center text-[12px]">Шилдэг эмэгтэй тоглогчоор – Жинжиймаа</p>
          </div>
        </div>
        
        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleAhlah} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Ahlah12b;
