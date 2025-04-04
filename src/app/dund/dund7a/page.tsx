"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/7a/1.png";
import zurag2 from "../../../assets/7a/2.png";
import zurag3 from "../../../assets/7a/3.png";
import zurag4 from "../../../assets/7a/4.png";
import zurag5 from "../../../assets/7a/5.png";
import zurag6 from "../../../assets/7a/6.png";
import zurag7 from "../../../assets/7a/7.png";
import zurag8 from "../../../assets/7a/8.png";
import zurag9 from "../../../assets/7a/9.png";
import zurag10 from "../../../assets/7a/10.jpg";
import zurag11 from "../../../assets/7a/11.jpg";
import zurag12 from "../../../assets/7a/12.jpg";
import zurag13 from "../../../assets/7a/13.jpg";
import zurag14 from "../../../assets/7a/14.png";
import zurag15 from "../../../assets/7a/15.png";
import zurag16 from "../../../assets/7a/16.png";
import zurag20 from "../../../assets/7a/20.jpg";

const Dund7a = () => {
  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleDund = () => {
    router.push("/dund");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image
        src={shildeg}
        width={200}
        alt="Шилдэг сургууль"
        onClick={handleHomePage}
      />
      <div className=" flex  flex-col gap-4">
        <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
          {" "}
          Мөнхтуяа багштай 7A анги
        </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            7A анги нийт 24 суралцагчтай ба 14 хүү, 10 охин{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag1}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Ангийн уриа </p>
          <p className=" text-center text-[12px]">
            Муулахгүй мэндэлдэг нь байя Зодохгүй зөвлөдөг нь байя Дээрэлхэлгүй
            дэмждэг нь байя Дэлхийн хүмүүс бид ялгаагүй{" "}
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Спортын их наадмын амжилтуудаас{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag2}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Дунд ангийн олс таталтын төрөлд Тэргүүн байр{" "}
          </p>
          <p className=" text-center text-[12px]">
            {" "}
            Б.Төв Амгалан, Г.Сүлд Эрдэнэ, Г.Тэгшбилиг,Б.Нандинтүшиг, Б.Мөнх
            Эрдэнэ, У.Анударь, М.Эрмүүн, М.Эмүжин, Б.Ундрам, Л.Оюу Эрдэм
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Спортын их наадмын амжилтуудаас{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag3}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Дунд ангийн буухиа төрөлд Тэргүүн байр{" "}
          </p>
          <p className=" text-center text-[12px]">
            {" "}
            Сурагчид: Х.Намуунзаяа Б.Будсүрэн М.Эмүжин У.Анударь
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Спортын их наадмын амжилтуудаас
          </p>
          <Image
            className=" rounded-xl"
            src={zurag4}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            {" "}
            М.Эмүжин 800м гүйлтийн эмэгтэй төрөлд Мөнгөн медаль{" "}
          </p>

          <Image
            className=" rounded-xl"
            src={zurag5}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            {" "}
            Х.Намуунзаяа 100м гүйлтийн эмэгтэй төрөлд Алтан медаль
          </p>

          <Image
            className=" rounded-xl"
            src={zurag6}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Б.Төв Амгалан 800м гүйлтийн эрэгтэй төрөлд Хүрэл медаль
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Спортын их наадмын амжилтуудаас
          </p>
          <Image
            className=" rounded-xl"
            src={zurag7}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Намрын спортын их наадмын гар дээр суниалт, уртын харайлт, гүйлт,
            буухиа, олс таталт гэсэн төрлүүдэд анги хамт олноороо амжилттай сайн
            оролцсон
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> Урлагийн үзлэг </p>
          <Image
            className=" rounded-xl"
            src={zurag8}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag9}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            2023-2024 оны хичээлийн жилийн урлагийн их наадмын 6 төрөлд анги
            хамт олноороо амжилттай сайн оролцсон.
          </p>
          <p className=" text-center text-[12px]">
            Гоцлол бүжиг
            <strong> Х.Намуунзаяа – Алтан медаль</strong>
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Сагсан бөмбөгийн аварга шалгаруулах тэмцээн
          </p>
          <Image
            className=" rounded-xl"
            src={zurag10}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag11}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag20}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээнд -Охидууд-
            Алтан медаль -Хөвгүүд- Хүрэл Медаль -Х.Намуунзаяа- Шилдэг
            довтлогч-оор тус тус шалгарч “Шилжин явах цом”-ын эзэн болсон.
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Сурагчдын амжилтуудаас
          </p>
          <Image
            className=" rounded-xl"
            src={zurag13}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            “Монгол бахархлын өдөр”-ийг тохиолдуулан дунд ангийн дунд зохион
            байгуулсан “Миний мэдэх Чингис хаан” сэдэвт ханын сонин бүтээх
            уралдаанд анги хамт олноороо тэргүүн байр эзэлсэн
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Сурагчдын амжилтуудаас
          </p>
          <Image
            className=" rounded-xl"
            src={zurag12}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            Н.Бат Орших AMO Олон улсын математикийн олимпиад хүрэл медаль 2023
            оны сургуулийн шилдэг сурагч Эх хэлний долоо хоногийг тохиолдуулан
            зохион байгуулсан уран уншлагын тэмцээнд дэд байр
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Сурагчдын амжилтуудаас
          </p>
          <Image
            className=" rounded-xl"
            src={zurag14}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">М.Эмүжин</p>
          <p className=" text-center text-[12px]">
            ОУ-ын VANDA олимпиад хүрэл медаль
          </p>

          <Image
            className=" rounded-xl"
            src={zurag15}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">Х.Намуунзаяа</p>
          <p className=" text-center text-[12px]">
            Монголжин моб клубын авьяаслаг сурагч Ангийн “Шилдгийн шилдэг”
            сурагч
          </p>

          <Image
            className=" rounded-xl"
            src={zurag16}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">Б.Будсүрэн</p>
          <p className=" text-center text-[12px]">
            Music lover хөгжмийн уралдаанд тэргүүн байр Ангийн “Шилдгийн шилдэг”
            сурагч
          </p>
        </div>

        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div
        className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2"
        onClick={handleDund}
      >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow />
          Буцах
        </button>
      </div>
    </div>
  );
};

export default Dund7a;
