"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/2a/1.png";
import zurag2 from "../../../assets/2a/2.png";
import zurag3 from "../../../assets/2a/3.png";
import zurag4 from "../../../assets/2a/4.png";
import zurag5 from "../../../assets/2a/5.png";
import zurag6 from "../../../assets/2a/6.png";
import zurag7 from "../../../assets/2a/7.png";
import zurag8 from "../../../assets/2a/8.png";
import zurag10 from "../../../assets/2a/10.png";
import zurag11 from "../../../assets/2a/11.png";
import zurag12 from "../../../assets/2a/12.png";
import zurag13 from "../../../assets/2a/13.png";
import zurag14 from "../../../assets/2a/14.png";
import zurag15 from "../../../assets/2a/15.png";
import zurag16 from "../../../assets/2a/16.png";
import zurag17 from "../../../assets/2a/17.png";
import zurag18 from "../../../assets/2a/18.png";
import zurag19 from "../../../assets/2a/19.png";
import zurag20 from "../../../assets/2a/20.png";




const Baga2a = () => {
  const router = useRouter();
  const handleHomePage = () => { router.push("/");};
  const handleBaga = () => { router.push("/baga");};

  return (
    <div className="flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200} alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-center border-b pb-2 text-[22px] text-red-600">Л.Ариунмөнх багштай 2A ангийн танилцуулга</h1>
        <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className="text-center">2A анги нийт 22 суралцагчтай ба 10 эрэгтэй, 12 эмэгтэй</p>
          <Image className=" rounded-xl" src={zurag1} width={300} alt="Шилдэг сургууль" />
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Сургуулийн спортын наадам</p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center"> Ангиа 96% хамруулан, биеийн тамирын хувцасаар  жигдрэн уралдаанд амжилттай оролцсон. Байрнаас уртад харайх төрөлд Ц.Ундрам 3-р байр, 100 м гүйлтийн төрөлд-Х.Эмүжин  3-р байр, 100 м гүйлтэнд М.Эрхэм 2-р байр, гар дээр суниах төрөлд Эрчис 3-р байр тус тусын амжилт гаргажээ.  </p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Halloween </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Өдөрлөгөөр ангийн нийт сурагчид бүрэн хамрагдан нэг өдрийг хөгжилтэй, өөрсдийн гараар хийсэн сүнсний холбоотой хоол, хөнгөн зуушаа идэж, дунд ангийн ах эгч нараасаа үлгэр сонсон  хөгжилтэй өнгөрүүллээ</p>
        </div>

        <p className="text-center border-b pb-2 text-[20px] font-semibold">Талархал Мэндчилгээ </p>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Талархал Мэндчилгээ бичиж сурах хичээлийн агуулгаа бататган сургуулийн 5 үйлчлэгчид талархах аян өрнүүллээ</p>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Гоцлол бүжиг төрлөөр сурагч Э.Ангирмаа 3-р байр эзэлсэн. Мөн сургуулийн гимнатик дугуйлангийн сурагчид Монголын Аэробикийн холбооны хотын уран АШ тэмцээнд охидын хамтлаг 3-р байранд \Сурагч Ангирмаа, Эмүжин, Сондор, Энэрэл нар 2 а ангиас\</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Олон улсын ном солилцох өдөрлөг   2"а" ангийн бяцхан сурагчид бие биедээ ном бэлэглэх монита үйл ажиллагаа зохион явууллаа. Book and snack</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Номын ертөнц клубээс жил бүр зохиогддог аянд: Ангиараа ном унших өдөр гарган номын тэмдэглэл тогтмол хөтөлдөг. Үүний үр дүнд уншсан номын тэмдэглэлийн улсын уралдаанд ангиараа тусгай байранд шалгарч ном авах 100,000 төгрөгний эрхийн бичиг, зохиолчдоос болон клубээс 20 гаруй ном гарын бэлэгээр шагнууллаа</p>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
          </div>
            <p className="text-center">Америкийн математикийн олон улсын олимдиадад сурагч Б.Энэрэл хүрэл медаль, Б. Маргад тусгай байр тус тус эзэлсэн.</p>
            <p className="text-center">Сурагч Э.Ангирмаа бүжгийн дугуйланд тогтмол хамрагдаж олон олон уралдаан тэмцээнд оролцож байна. Солонгос улсын өсвөрийн бүжгийн уралдаанд 2-р байр, медаль, хятад улсад болсон бүжгийн тэмцээнд 1-р байр Алтан медаль тус тус хүртжээ. Мөн сургуулийн урлагийн наадамд Бүжгийн төрлөөр 3-р байр эзэлсэн</p>
        </div>

  


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBaga} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"> <BackArrow /> Буцах </button>
      </div>
    </div>
  );
};

export default Baga2a;
