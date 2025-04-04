"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/6b/1.png";
import zurag2 from "../../../assets/6b/2.png";
import zurag3 from "../../../assets/6b/3.png";
import zurag4 from "../../../assets/6b/4.png";
import zurag5 from "../../../assets/6b/5.png";
import zurag6 from "../../../assets/6b/6.png";
import zurag7 from "../../../assets/6b/7.png";
import zurag8 from "../../../assets/6b/8.png";
import zurag9 from "../../../assets/6b/9.png";
import zurag10 from "../../../assets/6b/10.png";
import zurag11 from "../../../assets/6b/11.png";
import zurag12 from "../../../assets/6b/12.png";
import zurag13 from "../../../assets/6b/13.png";
const Dund6b = () => {
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
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Шилдэг ерөнхий боловсролын сургуулийн Содномцэрэн багштай 7В ангийн танилцуулга
          </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag1}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              2023-2024 оны хичээлийн жилд 6В анги нь 22 сурагчтайгаар хичээл
              сургалтын үйл ажиллагаагаа амжилтай өндөрлөж байна{" "}
            </p>
            <p className=" text-center text-[16px] font-semibold">
              Бидний оролцсон үйл ажиллагаа
            </p>
            <ul className=" list-disc pl-4">
              <li>Сургуулийн урлагийн наадам</li>
              <li>Спортын наадам</li>
              <li>Сагсан бөмбөгийн аварга шалгаруулах тэмцээн</li>
              <li>“Design week” 7 хоногийн үйл ажиллагаа </li>
              <li>Дээлтэй монгол өдөрлөг </li>
              <li>Halloween </li>
              <li>
                Их хэл бичиг үсгийн 7 хонгийн үйл ажиллагаанд хамт олноороо тус
                амжилттай оролцсон
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            6В ангийн Спортын наадмын амжилт
          </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag2}
              width={300}
              alt="Шилдэг сургууль"
            />
            <ul className=" list-disc pl-4">
              <li>Гар дээр суниалтын төрөлд Н.Тэлмүүн алтан медаль</li>
              <li>
                100 метрийн гүйлтийн төрөлд Б.Чинзориг, Б.Энххатан нар тус тус
                хүрэл медаль
              </li>
              <li>4*100 метрийн гүйлтэнд эмэгтэй баг мөнгөн медаль</li>
              <li>
                Уртын харайлтын төрөлд Б. Оргил, М.Өнөмишээл нар хүрэл медаль
                хүртсэн амжилт гаргасан.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            6В ангийн Урлагийн наадмын амжилт
          </p>
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag3}
              width={300}
              alt="Шилдэг сургууль"
            />
            <ul className=" list-disc pl-4">
              <li>Хамтлаг бүжгийн төрөлд хүрэл медаль</li>
              <li>
                Найрал дууны төрөлд анги хамт олноороо хүрэл медаль хүртсэн
                амжилт гаргасан
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">
          {" "}
          Ангийн сурагчдын амжилтуудаас{" "}
        </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag4}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px] font-semibold">Б.Оргил </p>
            <ul className=" list-disc pl-4">
              <li>2023 оны Шилдэг сурагч Алтан медаль</li>
              <li>2023 оны Урлагийн үзлэгийн хүрэл медаль</li>
              <li>
                2023 оны Спортын наадмын “Уртын харайлтын” төрөлд хүрэл медаль
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag5}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px] font-semibold">
              Б.Чинзориг{" "}
            </p>
            <ul className=" list-disc pl-4">
              <li>2023 оны Спортын наадам 100 метрийн гүйлтийн хүрэл медаль</li>
              <li>
                2023 оны Урлагийн наадмын Хамтлаг бүжгийн төрөлд хүрэл медаль
              </li>
              <li>
                Хөл бөмбөгийн холбооны нэрэмжит Улсын аварга шалгаруулах
                тэмцээний хүрэл медаль
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag6}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px] font-semibold">
              Б.Сарангэрэл{" "}
            </p>
            <ul className=" list-disc pl-4">
              <li>2023 оны Шилдэг сурагч алтан медаль</li>
              <li>2023 оны сургуулийн Урлагийн үзлэгийн хүрэл медаль</li>
              <li>
                2023 оны Уран гимнатикийн Азийн олон улсын тэмцээний мөнгө
                медаль
              </li>
              <li>Гимнастикийн “Болор” клубын нэрэмжит тэмцээний II-р байр</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag7}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px] font-semibold">Н.Тэлмүүн </p>
            <ul className=" list-disc pl-4">
              <li>
                2023 оны спортын наадамд гар дээр суниалтын төрөлд Алтан медаль
              </li>
              <li>Урлагийн үзлэгийн хүрэл медаль</li>
              <li>Сагсан бөмбөгийн дугуйлангийн 3*3 тэмцээнд хүрэл медаль </li>
            </ul>
          </div>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">
          6В ангийн хичээлээс гадуурх үйл ажиллагаа
        </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag8}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Сургуулийн Сагсан бөмбөгийн Аварга шалгаруулах тэмцээнд анги хамт
              олноороо амжилттай оролцлоо.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag9}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Шатрын аварга шалгаруулах тэмцээнд Б.Мишээл тусгай байранд орсон.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag10}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">Halloween-2023</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag11}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Halloween баярын үйл ажиллагаанд Я.Ирмүүнзаяа дунд ангийн шилдэг
              дүр хувиргалттай сурагчаар шалгарсан.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag12}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">Дээлтэй Монгол өдөрлөг</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2  items-center ">
            <Image
              className=" rounded-xl"
              src={zurag13}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Эх хэлний 7 хоногийн үйл ажиллагаанд “Цэвэр бичгийн уралдаан”-д
              Б.Мишээл 2-р байранд орсон
            </p>
          </div>
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

export default Dund6b;
