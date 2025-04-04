"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/6c/1.jpg"
import zurag2 from "../../../assets/6c/2.jpg"
import zurag3 from "../../../assets/6c/3.jpg"
import zurag4 from "../../../assets/6c/4.jpg"
import zurag5 from "../../../assets/6c/5.jpg"
import zurag6 from "../../../assets/6c/6.jpg"
import zurag7 from "../../../assets/6c/7.jpg"
import zurag8 from "../../../assets/6c/8.jpg"
import zurag9 from "../../../assets/6c/9.jpg"
import zurag10 from "../../../assets/6c/10.jpg"
import zurag11 from "../../../assets/6c/11.jpg"
import zurag12 from "../../../assets/6c/12.jpg"
import zurag13 from "../../../assets/6c/13.jpg"
import zurag14 from "../../../assets/6c/14.jpg"
import zurag15 from "../../../assets/6c/15.jpg"
import zurag16 from "../../../assets/6c/16.jpg"
import zurag17 from "../../../assets/6c/17.jpg"

const Dund6c = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleDund = () => {
    router.push("/dund");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> 6с анги нь нийт 17 сурагчтай бөгөөд үүнээс 9 эмэгтэй 8 эрэгтэй. АУБ: хятад хэлний багш Ц.Нямдэлгэр</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />           
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Урлагийн их наадамд анги хамт олноороо амжилттай оролцсон бөгөөд сурагч Нандинчимэг дунд ангийн хөгжмийн төрөлд “2-р байр” эзлэв. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль" />           
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />           
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Намрын спортын их наадамд анги хамт олноороо амжилттай оролцсон бөгөөд сурагч Наранцацрал дунд ангийн суниалтын төрөлд “2-р байр” эзлэв. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />           
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль" />           
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сургуулийн Halloween үйл ажиллагаанд анги хамт олноороо амжилттай оролцож “Шилдэг” ангиар шалгарав.</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль" />                    
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Одбилэг болон Анучимэг оны “Оны шилдэг сурагч”-аар шалгарав</p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль" />                    
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Дээлтэй монгол өдөрлөгийн хүрээнд зохион байгуулсан Монгол уламжлал тэмцээнд амжилттай оролцож дунд ангийн төрөлд “1-р байр” эзлэв. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />                    
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль" />                    
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Маралгоо “Voice of Shildeg” ковер дууны уралдаанд амжилттай оролцож “Өсөх ирээдүйтэй дуучин”-аар шалгарав. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль" />                    
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль" />                    
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагчдын дундах сагсан бөмбөгийн тэмцээнд анги хамт олноороо амжилттай оролцов. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль" />                                   
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“DESIGN WEEK” аяны хүрээнд дугуйлангийн сурагчдын дунд зохионсон “BALLERINA” уралдаанд “1-р байр” эзлэв </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль" />                                   
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль" />                                   
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Монголжин МТА-аас зохион байгуулсан гар зургийн уралдааны “Шагналт байр”-аар шалгарав. </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль" />                                                                  
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Түвшинбаяр</p>
          <ul className=" list-disc pl-4">
            <li>Зүүн бүсийн аварга шалгаруулах гар бөмбөгийн тэмцээн “алтан медаль” </li>
            <li>Мөрөөдлийн аврагч клубийн нэрэмжит гар бөмбөгийн тэмцээн “алтан медаль”</li>
          </ul>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль" />                                                                  
          </div>
        </div>

      <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">Сурагч Одбилэг</p>
          <ul className=" list-disc pl-4">
            <li>Kangaroo олон улсын математикийн олимпиад “тусгай байр”  </li>

          </ul>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль" />                                                                  
          </div>
        </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleDund} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Dund6c;
