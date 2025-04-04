"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/8a/1.png";
import zurag2 from "../../../assets/8a/2.png";
import zurag3 from "../../../assets/8a/3.png";
import zurag4 from "../../../assets/8a/4.png";
import zurag5 from "../../../assets/8a/5.png";
import zurag6 from "../../../assets/8a/6.png";
import zurag7 from "../../../assets/8a/7.png";
import zurag8 from "../../../assets/8a/8.png";
import zurag9 from "../../../assets/8a/9.png";
import zurag10 from "../../../assets/8a/10.png";
import zurag11 from "../../../assets/8a/11.png";
import zurag12 from "../../../assets/8a/12.png";
import zurag13 from "../../../assets/8a/13.png";
import zurag14 from "../../../assets/8a/14.png";
import zurag15 from "../../../assets/8a/15.png";
import zurag16 from "../../../assets/8a/16.png";
import zurag17 from "../../../assets/8a/17.png";
import zurag18 from "../../../assets/8a/18.png";
import zurag19 from "../../../assets/8a/19.png";
import zurag20 from "../../../assets/8a/20.png";
import zurag21 from "../../../assets/8a/21.png";
import zurag22 from "../../../assets/8a/22.png";
const Dund8a = () => {
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
          Цээлэй багштай 8А анги
        </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Манай анги 19 хүүхэдтэй. Үүнээс 9 эрэгтэй, 10 эмэгтэй сурагчтай{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag1}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            “Парламентын боловсрол” хөтөлбөрт хамрагдсан.
          </p>
          <Image
            className=" rounded-xl"
            src={zurag2}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag3}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Намрын спортын наадамд ангиараа 2-р байр{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag4}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Урлагийн наадамд амжилттай оролцлоо
          </p>
          <Image
            className=" rounded-xl"
            src={zurag5}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag6}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag7}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag8}
            width={300}
            alt="Шилдэг сургууль"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Сагсан бөмбөгийн тэмцээн:
          </p>
          <Image
            className=" rounded-xl"
            src={zurag9}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag10}
            width={300}
            alt="Шилдэг сургууль"
          />
          <p className=" text-center text-[12px]">
            6-8 дугаар ангийн сурагчдын дунд зохион байгуулсан сургуулийн аварга
            шалгаруулах сагсан бөмбөгийн тэмцээнд амжилттай оролцлоо.
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Олимпиад, уралдаан, тэмцээн{" "}
          </p>
          <Image
            className=" rounded-xl"
            src={zurag11}
            width={300}
            alt="Шилдэг сургууль"
          />
          <ul className=" list-disc pl-4">
            <li>
              Эх хэлний долоо хоногоор зохиогдсон “Хичээнгүй бичиг” -ийн төрөлд
              Б. Нандин-Эрдэнэ 1-р байр эзэлсэн.
            </li>
            <li>“AMO” олимпиадад тусгай байр</li>
            <li>SASMO олимпиадад амжилттай оролцсон.</li>
            <li>“ММО” –д амжилттай оролцож 1-р шатанд тэнцсэн.</li>
            <li>Намрын спартакиадаас хошой мөнгөн медаль хүртсэн.</li>
            <li>
              Эхний 3 улирлын сурлагын дунджаар ангидаа 1-р байрт жагссан.
            </li>
            <li>Ангийн дарга</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Олимпиад, уралдаан, тэмцээн
          </p>
          <Image
            className=" rounded-xl"
            src={zurag12}
            width={300}
            alt="Шилдэг сургууль"
          />
             <p className=" text-center text-[16px] font-semibold">Э. Энхбаатар </p>
          <ul className=" list-disc pl-4">
            <li> 2024 оны VANDA олимпиадаас   2-р байр мөнгөн медаль        </li>
            <li>“SASMO” –д амжилттай оролцсон</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Олимпиад, уралдаан, тэмцээн
          </p>
          <Image
            className=" rounded-xl"
            src={zurag13}
            width={300}
            alt="Шилдэг сургууль"
          />
             <p className=" text-center text-[16px] font-semibold">Ц. Урианхай </p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас хошой мөнгөн медаль
        </li>
            <li>Шатрын аварга шалгаруулах тэмцээнд тусгай байр</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Олимпиад, уралдаан, тэмцээн
          </p>
   
             <p className=" text-center text-[16px] font-semibold">Э. Чингүн</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас алт мөнгөн медаль</li>
            <li>Шатрын аварга шалгаруулах тэмцээнд амжилттай оролцсон.</li>
            <li>Цонжин кибер зусланд и-спорт тэмцээнд 2-р байр</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">Ч. Анхилуун
</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас мөнгөн медаль</li>
            <li>“Дулаан гутал” аянд амжилттай оролцсон</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">М. Марал</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас алт мөнгөн медаль
</li>
            <li>Эхний 3 улирлын дүнгийн жагсаалтаар ангидаа 5-д орсон.</li>
            <li>Дүүргийн монгол хэлний олимпиадад амжилттай оролцсон.</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">Д. Тод-Од
</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас мөнгөн медаль</li>
            <li>Шатрын аварга шалгаруулах тэмцээнд амжилттай оролцсон.</li>
            <li>Цонжин кибер зусланд Speeling bee тэмцээнд 2-р байр</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">М. Намуун</p>
          <ul className=" list-disc pl-4">
            <li>ММО, SASMO –д амжилттай оролцсон.</li>
            <li>Номын тэмдэглэл хөтөлдөг, ном их уншдаг</li>
            <li>Эхний 3 улирлын дүнгийн жагсаалтаар ангидаа 2-р байрт орсон.
</li>
            <li>Ангийн дэд дарга</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">Б. Цэлмүүн</p>
          <ul className=" list-disc pl-4">
            <li>ММО-д 5-р байр</li>
            <li>Кенгуру олимпиадаас 2-р зэрэг</li>
            <li>Төгөлдөр хуурын сургалтад суралцдаг</li>
            <li>Герман хэлтэй</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">М. Эрхэмтүшиг</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас хошой мөнгөн медаль</li>
          </ul>

             <p className=" text-center text-[16px] font-semibold">А. Өнөмөнх</p>
          <ul className=" list-disc pl-4">
            <li>Намрын спартикатаас хошой мөнгөн медаль</li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
          Дээлтэй монгол өдөрлөг</p>
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
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
          Шинэ жил</p>
          <Image
            className=" rounded-xl"
            src={zurag18}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag19}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag20}
            width={300}
            alt="Шилдэг сургууль"
          />
          <Image
            className=" rounded-xl"
            src={zurag21}
            width={300}
            alt="Шилдэг сургууль"
          />  
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
          2023-2024 оны шилдэг сурагч</p>
          <Image
            className=" rounded-xl"
            src={zurag22}
            width={300}
            alt="Шилдэг сургууль"
          />
            <p className=" text-center text-[12px]">2023-2024 оны шилдэг сурагчаар Э. Энхмишээл, авьяаслаг сурагчаар Ч. Анхилуун нар  шалгарч медаль, өргөмжлөлөөр шагнууллаа.</p>

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

export default Dund8a;
