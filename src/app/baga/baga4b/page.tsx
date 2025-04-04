"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/4b/1.jpg"
import zurag2 from "../../../assets/4b/2.jpg"
import zurag3 from "../../../assets/4b/3.jpg"
import zurag4 from "../../../assets/4b/4.jpg"
import zurag5 from "../../../assets/4b/5.jpg"
import zurag6 from "../../../assets/4b/6.jpg"
import zurag7 from "../../../assets/4b/7.jpg"
import zurag8 from "../../../assets/4b/8.jpg"
import zurag9 from "../../../assets/4b/9.jpg"
import zurag10 from "../../../assets/4b/10.jpg"
const Baga4b = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleBaga = () => {
    router.push("/baga");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">
      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Ш. Цасчихэр багштай 4В анги нь 2022-2023 оны хичээлийн жилийн амжилтууд
</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Ш. Цасчихэр багштай 4В анги нь 2022-2023 оны хичээлийн жилд нийт 25 сурагчтайгаас 13 охин, 12 хөвгүүнтэйгээр суралцаж байна.
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 2023-2024 оны “Намрын спорт өдөрлөг” байрнаас уртад харайлтын төрлийн “Алтан медальт” сурагч Б. Мэргэн 
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 2023-2024 оны “Урлагийн наадамд” Чөлөөт үзүүлбэр “Хүрэл медаль”, Гоцлол бүжиг “мөнгөн медаль” тус тус хүртлээ.

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">4В ангийн Д. Сувд-Эрдэнэ, Т. Очирсүлд, У. Есүйлэн нар 2023-2024 оны хичээлийн жилийн “ОНЫ ТЭРГҮҮНИЙ СУРАГЧ”-аар шалгарлаа</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">4-р ангийн сурагчдын дунд зохион байгуулсан “NEW WORDS” тэмцээнд Г. Гарьд, Б. Гүнжнаран, Б. Гоодарь, М. Саруул, Б. Мэргэн, Б. Бархас, У. Есүйлэн, Ж. Гэгээлэн нар хамт олноо хошуучлан манлайлснаас Г. Гарьд “ТЭРГҮҮН БАЙР” Алтан медаль хүртсэн.

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Бага ангийн сурагчдын дунд зохион байгуулсан "No Bully" сэдэвт гар зургийн уралдаанд У.Есүйлэн тэргүүн байр эзэллээ.

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“HUGO and COLOR” гар зургийн XV УЛСЫН ОЛИМПИАДЫН
“Хүрэл медальт” сурагч  М. Саруул
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">4В ангийн “Таеквондо” дугуйлангийн сурагчид Шар бүс-ний эзэд боллоо
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Бяцхан микрофон” улсын хоёрдугаар дууны уралдаанд У. Есүйлэн амжилттай оролцлоо
</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">2023-2024 оны 4-5-р ангийн ЭКСКУРС аялал нийлбэр оноогоор “ДЭД БАЙР”

</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />
          </div>
        </div>



        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Baga4b;
