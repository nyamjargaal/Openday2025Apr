"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/9b/1.png";
import zurag2 from "../../../assets/9b/2.png";
import zurag3 from "../../../assets/9b/3.png";
import zurag4 from "../../../assets/9b/4.png";
import zurag5 from "../../../assets/9b/5.png";
import zurag6 from "../../../assets/9b/6.png";
import zurag7 from "../../../assets/9b/7.png";
import zurag8 from "../../../assets/9b/8.png";
import zurag9 from "../../../assets/9b/9.png";
import zurag10 from "../../../assets/9b/10.png";
import zurag11 from "../../../assets/9b/11.png";
import zurag12 from "../../../assets/9b/12.png";
import zurag13 from "../../../assets/9b/13.png";
import zurag14 from "../../../assets/9b/14.png";
import zurag15 from "../../../assets/9b/15.png";
import zurag16 from "../../../assets/9b/16.png";
import zurag17 from "../../../assets/9b/17.png";

const Dund9b = () => {
  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleDund = () => {
    router.push("/ahlah");
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
          <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
            Ангийн зорилго:
          </h1>
          <p className=" text-center font-semibold text-lg">
            Дэлхийд өрсөлдөхүйц ур чадвартай хувь хүн болон төлөвших{" "}
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
            Ангийн зорилт:
          </h1>
          <p className="font-semibold text-lg">
            -Зөв хүмүүжил чадвар хөгжүүлэх -Сурах арга барил эзэмшүүлэх
            -Манлайлагч нарыг төрүүлэх -Нийгмийн оролцоо өндөр хувь хүн болгон
            төлөвшүүлэх
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
            Ангийн уриа:
          </h1>
          <p className="font-semibold text-lg">
            Бид хэзээ ч шантрахгүй Бид хэзээд манлайлах болно
          </p>
        </div>

        <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
          {" "}
          Б.Болорцэцэг багштай 9б анги
        </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            2023-2024 оны хичээлийн жилд нийт 22 сурагч. Үүнээс 9 хөвгүүн, 13
            охидтой, хичээллэж байна.
          </p>
          <Image
            className=" rounded-xl"
            src={zurag1}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600">
            Ангийн товч танилцуулга
          </h1>
          <ul className=" list-disc pl-4">
            <li>Ангийн дарга:У.Урангоо</li>
            <li> Ариун цэврийн дарга: З.Нандин-Эрдэнэ</li>
            <li> Ирц бүртгэлийн дарга: З.Гэрэлтуяа</li>
            <li> IT мэдээллийн дарга: Ж.Тэлмэнхүлэг</li>
            <li> Сургуулийн зөвлөлийн гишүүн: Ж.Маралжин</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            “Сургуулийн намрын спортын их наадам"{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag2}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Буухиа эмэгтэй төрөлд Хүрэл медаль
            </p>
            <p className=" text-center text-[12px]">
              400м эмэгтэй төрөлд Х.Есүгэн Хүрэл медаль
            </p>
            <p className=" text-center text-[12px]">
              100м эмэгтэй төрөлд З.Гэрэлтуяа Алтан медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag3}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Сагсан бөмбөг эмэгтэй 3x3 төрөлд III-р байр
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            "Сургуулийн урлагийн наадам"{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag4}
              width={300}
              alt="Шилдэг сургууль"
            />
            <Image
              className=" rounded-xl"
              src={zurag5}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              хамтлаг бүжиг төрөлд III-р байр
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            VOICE OF SHILDEG 2024{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag6}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              Дууны тэмцээний II-р байр Б.Хангалбэхи
            </p>{" "}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Солонгос хэлний TOPIK{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag7}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">II-р байр Г.Мишээл</p>{" "}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Хятад хэлний HSK1{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag8}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">Ж. Маралжин</p>{" "}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Дизайн технологи хичээлийн хүрээнд зохиогдсон “Design Week”{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag9}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              {" "}
              I-р байр З.Нандин-Эрдэнэ
            </p>{" "}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Дүүргийн Орос хэлний олимпиад{" "}
          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag10}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]"> IV-р байр Ц.Удвал </p>{" "}
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl m-auto"
              src={zurag11}
              width={300}
              alt="Шилдэг сургууль"
            />
            <ul className=" list-disc pl-4">
              <li>
                2023 он “Өсвөрийн шатарчдын улсын аварга шалгаруулах
                тэмцээн”мөнгөн медаль
              </li>
              <li>2023 он “Цагаан бэрс тэмцээн”тусгай байр</li>
              <li>
                2024 он Насанд хүрэгчдийн Улсын аваргын анхан шат Хүрэл медаль
                Шатрын хотын аварга III-р байр Х.Есүгэн
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Дүүргийн Нийгмийн хичээлийн олимпиад
          </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image
              className=" rounded-xl"
              src={zurag12}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
              {" "}
              200хүүхдээс 23 орсон амжилт үзүүлсэн байна.Н.Маргад{" "}
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Ахлах ангийн дунд СӨҮЗ-аас зохион байгуулсан ESPORT -ын төрөлд III-р
            байр
          </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image
              className=" rounded-xl"
              src={zurag13}
              width={300}
              alt="Шилдэг сургууль"
            />
            <Image
              className=" rounded-xl"
              src={zurag14}
              width={300}
              alt="Шилдэг сургууль"
            />
            <Image
              className=" rounded-xl"
              src={zurag15}
              width={300}
              alt="Шилдэг сургууль"
            />
            <ul className=" list-disc pl-4">
              <li> Ж.Тэлмэнхүлэг</li>
              <li>Л.Түвшинбаяр</li>
              <li>Б.Бадрах</li>
              <li>Г.Тэмүүлэн</li>
              <li>С.Дөлбадрах</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
          Сургуулийн аварга шалгаруулах шатрын тэмцээн
          </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image
              className=" rounded-xl"
              src={zurag16}
              width={300}
              alt="Шилдэг сургууль"
            />
            <Image
              className=" rounded-xl"
              src={zurag17}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[12px]">
            Ахлах ангийн эмэгтэй төрөл:
            </p>
            <ul className=" list-disc pl-4">
              <li>Ц.Удвал I-р байр</li>
              <li>Б.Одгэрэл II-р байр </li>
            </ul>
            <p className=" text-center text-[12px]">
            Ахлах ангийн эрэгтэй төрөл:
            </p>
            <ul className=" list-disc pl-4">
              <li>Б.Хангалбэхи VI-р байр эзэлсэн</li>
            </ul>
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

export default Dund9b;
