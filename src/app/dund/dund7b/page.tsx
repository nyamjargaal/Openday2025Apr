"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/7b/1.png";
import zurag2 from "../../../assets/7b/2.jpg";
import zurag3 from "../../../assets/7b/3.jpg";
import zurag4 from "../../../assets/7b/4.jpg";
import zurag5 from "../../../assets/7b/5.jpg";
import zurag6 from "../../../assets/7b/6.jpg";
import zurag7 from "../../../assets/7b/7.jpg";
import zurag8 from "../../../assets/7b/8.jpg";
import zurag9 from "../../../assets/7b/9.jpg";
import zurag10 from "../../../assets/7b/10.jpg";
import zurag11 from "../../../assets/7b/11.jpg";
import zurag12 from "../../../assets/7b/12.jpg";
import zurag13 from "../../../assets/7b/13.jpg";
import zurag14 from "../../../assets/7b/14.png";
import zurag15 from "../../../assets/7b/15.jpg";
import zurag16 from "../../../assets/7b/16.jpg";
import zurag17 from "../../../assets/7b/17.png";
import zurag18 from "../../../assets/7b/18.png";
import zurag19 from "../../../assets/7b/19.png";
import zurag20 from "../../../assets/7b/20.jpg";
import zurag21 from "../../../assets/7b/21.jpg";
import zurag22 from "../../../assets/7b/22.jpg";
import zurag23 from "../../../assets/7b/23.jpg";
import zurag24 from "../../../assets/7b/24.jpg";
import zurag25 from "../../../assets/7b/25.png";
import zurag26 from "../../../assets/7b/26.png";
import zurag27 from "../../../assets/7b/27.jpg";
import zurag28 from "../../../assets/7b/28.png";
import zurag29 from "../../../assets/7b/29.jpg";
import zurag30 from "../../../assets/7b/30.jpg";
import zurag31 from "../../../assets/7b/31.jpg";
import zurag32 from "../../../assets/7b/32.jpg";
const Dund7b = () => {
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
          Хими-Биологийн багш Э. Ариунгэрэл 7b анги
        </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            2023-2024 оны хичээлийн жилд 7b анги нь 23 суралцагчтай амжилттай
            суралцаж байна
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
            {" "}
            "SASMO-2023" азийн математикийн олимпиад{" "}
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag2}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">
              М. Эрхэмбат
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              3-р байр Өргөмжлөл, Хүрэл медаль{" "}
            </p>

            <Image
              className=" rounded-xl"
              src={zurag3}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">
              Б. Батсугар
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              3-р байр Өргөмжлөл, Хүрэл медаль{" "}
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            " VANDA-2023" олон улсын шинжлэх ухааны олимпиад
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag4}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">
              Д. Ариунбаатар
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              2-р байр Өргөмжлөл, Мөнгөн медаль
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Намрын спортын их наадам
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag5}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              Намрын спортын их наадамд анги хамт олноороо амжилттай сайн
              оролцсон
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Намрын спортын их наадам
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag6}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">Б. Зоригт</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Гар дээр суниалтын эрэгтэй төрөлд Хүрэл медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag7}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">
              Б. Эрдэнэсувд
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Гар дээр суниалтын эмэгтэй төрөлд Хүрэл медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag8}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">Ли. Арухан</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              800м гүйлт эрэгтэй төрөлд Мөнгөн медаль
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Намрын спортын их наадам
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag9}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              Дунд ангийн буухиа эрэгтэй төрөлд
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Хүрэл медаль{" "}
            </p>
            <p className=" text-center text-[16px]">
              Сурагчид: Д. Ариунбаатар Б. Эрдэмбилэг А. Ирмүүн Б. Батсугар
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Halloween farty-2023
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag10}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              Сургуулийн Halloween үйл ажиллагаанд анги хамт олноороо амжилттай
              оролцож “Best food decoration award” ангиар шалгарав.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Урлагийн их наадам
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag11}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              Хамтлаг бүжиг төрөлд: Мөнгөн медаль Сурагчид: Д.Ариунбаатар,
              Б.Чингүүн, А.Ирмүүн, Б.Батсугар, Г.Эрхэс, О.Эрхэс, Т.Цэрэнчунт,
              Ли.Арухан, Б.Зоригт, Ц.Энэрэл, М.Хишигдүүрэн, Б.Заяасайхан,
              М.Цэнгүүн, Т.Халиун, Э.Эмүжин, Б.Халиун, Б.Эрдэнэсувд,
              Э.Сувд-Эрдэнэ
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            {" "}
            Монгол бахархлын өдөр{" "}
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag12}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              “Дээлтэй монгол” өдөрлөгийн хүрээнд зохион байгуулсан Монгол
              уламжлал тэмцээнд анги хамт олноороо амжилттай оролцсон.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            " Эх хэл, соёл" долоо хоногийн үйл ажиллагаа{" "}
          </p>
          <p className=" text-center">
            “ Зөв шударга уншихуй” үндэсний бичгийн минутын уншлага 7-9 дугаар
            анги төрөлд
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag13}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">Ли. Арухан</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              2-р байр Өргөмжлөл, дурсгалын зүйл
            </p>
            <Image
              className=" rounded-xl"
              src={zurag14}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[18px] font-semibold">
              Т. Цэрэнчунт
            </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              3-р байр Өргөмжлөл, дурсгалын зүйл
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> “ENGLISH WEEK” </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag15}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              АХА тэмцээнд: А. Ирмүүн 2 дугаар байр: Өргөмжлөл Б. Зоригт 3
              дугаар байр: Өргөмжлөл
            </p>
            <Image
              className=" rounded-xl"
              src={zurag16}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">
              Шүлгийн тэмцээнд: Ц. Энэрэл Тусгай байр: Өргөмжлөл
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
            Оны шилдэг сурагчид{" "}
          </p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image
              className=" rounded-xl"
              src={zurag17}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">Д. Ариунбаатар</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Өргөмжлөл алтан медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag18}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">А. Ирмүүн</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Өргөмжлөл алтан медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag19}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">Т. Цэрэнчунт</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
              Өргөмжлөл алтан медаль
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]"> Анги хамт олноороо амжилттай оролцов. </p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]"> 6-8-р анги эрэгтэй төрөлд: Тэргүүн байр алтан медаль Сурагчид:
Д.Ариунбаатар, А.Ирмүүн, Б.Батсугар, Ли.Арухан, 
Б.Зоригт, Б. Эрдэмбилэг, Л. Буяннэмэх 
</p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]">6-8-р анги эмэгтэй төрөлд: Гуравдугаар байр хүрэл медаль
Сурагчид:
Ц.Энэрэл, М.Хишигдүүрэн, Б.Заяасайхан, 
О. Энэржин, Б.Халиун, Б.Эрдэнэсувд, Э.Сувд-Эрдэнэ
</p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн аварга шалгаруулах сагсан бөмбөгийн тэмцээн</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]"> 6-8-р анги 
эрэгтэй шилдэг довтлогч төрөлд: Цом
Д. Ариунбаатар</p> 
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“NATIONAL PI DAY”</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]"> Анги хамт олноороо Тэргүүн байр, мөнгөн шагнал</p> 
            <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]"> Т. Цэрэнчунт Тэргүүн байр: Өргөмжлөл, дурсгалын зүйл </p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“DESIGN WEEK”</p>
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]">Алтан хонх тэмцээнд:
Т. Халиун Тэргүүн байр: Өргөмжлөл, үнэ бүхий зүйл</p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]">Л. Буяннэмэх
“Кенгуру 2024”- ОУ-ын математикийн уралдаанд ажилттай оролцож II зэргийн диплом 
хүртсэн
</p> 
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center  ">
            <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[16px]">МУИС-ийн Күнзийн Институтаас зохион байгуулсан “Хятад хэлний гүүр” тэмцээнд
Б. Эрдэнэсувд Тусгай байр: Өргөмжлөл, үнэ бүхий зүйл

</p> 
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
          " Сургуулийн аварга шалгаруулах Шатрын тэмцээн” 

          </p>
          <div className=" flex flex-col gap-2 ">
            <Image
              className=" rounded-xl"
              src={zurag29}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">Б. Батсугар</p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
            Дунд анги эрэгтэй төрөлд: 2-р байр Мөнгөн медаль
            </p>
            <Image
              className=" rounded-xl"
              src={zurag30}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">М. Цэнгүүн </p>
            <p className=" text-center text-[14px] font-semibold text-red-500">
            Дунд анги эмэгтэй төрөлд: 2-р байр Мөнгөн медаль           </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">
        " CHEMISTRY PHOTO-2024 улсын уралдаан”           </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image
              className=" rounded-xl"
              src={zurag31}
              width={300}
              alt="Шилдэг сургууль"
            />
    
            <Image
              className=" rounded-xl"
              src={zurag32}
              width={300}
              alt="Шилдэг сургууль"
            />
            <p className=" text-center text-[16px]">Д. Ариунбаатар, Ц. Энэрэл, М. Хишигдүүрэн нар ангиа төлөөлөн амжилттай оролцсон
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

export default Dund7b;
