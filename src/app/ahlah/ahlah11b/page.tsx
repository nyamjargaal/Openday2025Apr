"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import zurag1 from "../../../assets/11B/1.jpg"
import zurag2 from "../../../assets/11B/2.jpg"
import zurag3 from "../../../assets/11B/3.jpg"
import zurag4 from "../../../assets/11B/4.jpg"
import zurag5 from "../../../assets/11B/5.jpg"
import zurag6 from "../../../assets/11B/6.jpg"
import zurag7 from "../../../assets/11B/7.jpg"
import zurag8 from "../../../assets/11B/8.jpg"
import zurag9 from "../../../assets/11B/9.jpg"
import zurag10 from "../../../assets/11B/10.jpg"
import zurag11 from "../../../assets/11B/11.jpg"
import zurag12 from "../../../assets/11B/12.jpg"
import zurag13 from "../../../assets/11B/13.jpg"
import zurag14 from "../../../assets/11B/14.jpg"
import zurag15 from "../../../assets/11B/15.jpg"
import zurag16 from "../../../assets/11B/16.png"
import zurag17 from "../../../assets/11B/17.png"
import zurag18 from "../../../assets/11B/18.jpg"
import zurag19 from "../../../assets/11B/19.jpg"
import zurag20 from "../../../assets/11B/20.jpg"
import zurag21 from "../../../assets/11B/21.png"
import zurag22 from "../../../assets/11B/22.jpg"
import zurag23 from "../../../assets/11B/23.png"
import zurag24 from "../../../assets/11B/24.jpg"
import zurag25 from "../../../assets/11B/25.png"
import zurag26 from "../../../assets/11B/26.jpg"
import zurag27 from "../../../assets/11B/27.jpg"
import zurag28 from "../../../assets/11B/28.jpg"
import zurag29 from "../../../assets/11B/29.jpg"
import zurag30 from "../../../assets/11B/30.png"
import zurag31 from "../../../assets/11B/31.jpg"
import zurag32 from "../../../assets/11B/32.jpg"
import zurag33 from "../../../assets/11B/33.jpg"
import zurag34 from "../../../assets/11B/34.jpg"
import zurag35 from "../../../assets/11B/35.jpg"
import zurag36 from "../../../assets/11B/36.jpg"
import zurag from "../../../assets/11B/31.png"
const Ahlah11b = () => {

  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  const handleAhlah = () => {
    router.push("/ahlah");
  };

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className=" flex  flex-col gap-4">

      <h1 className=" font-bold text-center border-b pb-2 text-[22px] text-red-600"> С.Дуламдорж багштай 12B анги
      </h1>
        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" font-semibold text-lg"> 2023-2024 оны хичээлийн жилд нийт 22 сурагчтай хичээл сургалтын үйл ажиллагааг явуулж байна.  </p>
          <p className=" text-center font-semibold text-lg"> 9 хүү, 13 охин </p>
          <Image className=" rounded-xl" src={zurag1} width={300}alt="Шилдэг сургууль" />
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> "Намрын спортын их наадам" </p>
          <div className=" flex flex-col gap-2 ">
            <Image className=" rounded-xl" src={zurag2} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag3} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Ахлах анги олс таталтын төрөлд – Мөнгөн медаль</p>
            <Image className=" rounded-xl" src={zurag4} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">400м эмэгтэй төрөлд Т.Эмүүжин - Алтан медаль</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg"> “Урлагийн наадам"  </p>
          <div className=" flex flex-col gap-2  items-center">
            <Image className=" rounded-xl" src={zurag5} width={300} alt="Шилдэг сургууль" />
            <p className=" text-center text-[12px]">Гоцлол хөгжим төрөлд – Б.Төгөлдөр 1-р байр “Алтан медаль”</p>
            <p className=" text-center text-[12px]">Гоцлол бүжиг – Л.Энхзул 2-р байр “Мөнгөн медаль”</p>
            <p className=" text-center text-[12px]">Найрал дуу – 3-р байр “Хүрэл медаль”</p>
            <Image className=" rounded-xl" src={zurag6} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Чөлөөт үзүүлбэр – 2-р байр “Мөнгөн медаль”</p>
            <p className=" text-center text-[12px]">Нийлбэр дүнгээр 2-р байр
</p>
            <Image className=" rounded-xl" src={zurag7} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Гоцлол дуу – Маралжингоо 3-р байр “Хүрэл медаль”
</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“САШ Сагсан бөмбөгийн тэмцээн" </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag8} width={300} alt="Шилдэг сургууль" />
            <Image className=" rounded-xl" src={zurag9} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Ахлах анги эмэгтэй – 2-р байр “Мөнгөн медаль”
</p>
            <Image className=" rounded-xl" src={zurag10} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Ахлах анги эрэгтэй – 2-р байр “Мөнгөн медаль”</p>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“Төгсөгчдийн нэрэмжит волейболын тэмцээн" </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag11} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">2024 оны төгсөгчдийн нэрэмжит гар бөмбөгийн тэмцээнд 2 баг гарган амжилттай оролцож 11В 2-р баг “Хүрэл медаль” хүртлээ. 
</p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“ОУ-ын болон дотоодын олимпиад уралдаанд гаргасан амжилтаас"  </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag12} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Өмнөговь аймаг Даланзадгад хотноо зохион байгуулагдсан “Нүүдэлчин Дайчин Cup 2024” таеквондогийн цомын тэмцээнд амжилттай оролцож “Алтан медаль”🥇</p>
            <Image className=" rounded-xl" src={zurag13} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">✨🤺Fencing сонирхогчдын нээлтэй тэмцээн 🥉-р байр “Хүрэл медаль” 
2023 оны Сонирхогчдын УАШ тэмцээнд амжилттай оролцож эмэгтэй төрөлд 🥉байр  “Хүрэл медаль”
</p></div> </div>

        <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <p className=" text-center font-semibold text-lg">“ОУ-ын болон дотоодын олимпиад уралдаанд гаргасан амжилтаас"  </p>
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag14} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">“DENK CUP 2023” Жюү жицүгийн тэмцээн 🥉”Хүрэл медаль”</p>
            <Image className=" rounded-xl" src={zurag15} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">“JKA MONGOLIA 2023” Каратэйгийн тэмцээн ”Мөнгөн медаль”</p></div> </div>


            <p className="text-center border-b pb-2 text-[20px] font-semibold"> “Нийгмийн идэвх оролцоог дэмжих, хичээлээ гадуурх үйл ажиллагааг идэвхжүүлэх ажлын хүрээнд 11Б ангийн сурагчид нь нийт 11 клуб нээн идэвхтэй үйл ажиллагаа явуулж байна."  </p>

             <div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
            <Image className=" rounded-xl" src={zurag16} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Хүний эрх хамгааллын талаар мэдлэг олгох үйл ажиллагаа явуулах .
Удирдагч 11Б Аззаяа, Марселын </p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag17} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Бүтээлч сэтгэлгээг хөгжүүлэх, цагийг үр бүтээлтэй өнгөрөөх 
Удирдагч 11Б ангийн сурагч Ундармаа, Мөнхчимэг, Ану
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
        
          <Image className=" rounded-xl" src={zurag18} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: ургамлыг зөв арчлах, хайрлан хамгаалах мэдлэг ойлголт түгээх 
Удирдагч 11Б ангийн сурагч Тэгшжаргал, Т.Төгөлдөр
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag19} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: IT-гийн анхан шатны мэдлэгтэй болгох, код бичиж сурах 
Удирдагч 11Б ангийн сурагч  Марселын, Амартүвшин</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag20} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Ярианы чадварыг дээшлүүлэх, Ielts  шалгалтанд бэлтгэхэд туслах Удирдагч 11Б ангийн сурагч Дөлгөөн , Билэгсайхан
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag21} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: IT хичээлээр үзсэн мэдлэг ойлголтыг бататгах, клубуудын үйл ажиллагааны постер гаргахад туслах  
Удирдагч 11Б ангийн сурагч Амартүвшин, Жинжиймаа

</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag22} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь:Уншсан номынхоо тухай тэмдэглэл хөтлөж, номын ярилцага хийх Удирдагч 11Б ангийн сурагч Хулан, Эмүүжин 

</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag23} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Монгол бичгээр уншиж, бичиж сурхад туслах 
Удирдагч 11Б ангийн сурагч Энхзул, Баярмаа
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag24} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Англи хэл дээр кино үзэн үгийн сангаа баяжуулах, цагийг зугаатай өнгөрүүлэх 
Удирдагч 11Б ангийн сурагч Өнөболд, Намуундарь
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag25} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь: Нийгмийн сайн сайхны төлөө сайн дурын үйл ажиллагаа явуулах, сурагчдын нийгмийн оролцоог нэмэгдүүлэх
Удирдагч 11Б ангийн сурагч Эрдэнэбулган, Б.Төгөлдөр ангийн бүх сурагчид
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag26} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Клубын зорилго нь МУЗН-ээс зохион байгуулж буй үйл ажиллагаанд сурагчдыг оролцуулах 
Удирдагч 11Б ангийн сурагч Дөлгөөн, Хангарьд
</p>
</div> </div>

<p className="text-center border-b pb-2 text-[20px] font-semibold"> Сургуульдаа санаачлан зохион байгуулсан ажлуудаас 
 </p>
<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag27} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag28} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag29} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">👉Сүүлийн үед хүүхэд залуусын дунд VAPE буюу электрон тамхины хэрэглээ бий болж түүнийг дагасан чимээгүй аюулууд газар авсаар байгаа билээ. Үүнтэй холбоотойгоор 11В ангийн  сурагч А.Тэгшжаргалын удирдан явуулдаг Биологийн клубийн сурагчид 7-12-р ангийн сурагчдад электрон тамхины эрүүл мэндэд учруулах 🤧хор уршгийг таниулах сургалтыг амжилттай зохион байгуулав.🙌.</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag30} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag31} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag32} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag33} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">The Innovate“ 11-р ангийн сурагчдын удирдан явуулдаг клубуудын үйл ажиллагааг, үр дүнг харуулах, сурагчдын чөлөөт цагийг үр бүтээлтэй өнгөрүүлэх зорилго бүхий эвентийг амжилттай зохион байгууллаа. 1-12-р ангийн бүх сурагчид үйл ажиллагаанд идэвхтэй оролцсон. 🙌</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag34} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag35} width={300} alt="Шилдэг сургууль"/>
          <Image className=" rounded-xl" src={zurag36} width={300} alt="Шилдэг сургууль"/>
            <p className=" text-center text-[12px]">Анги хамт олноороо санаачлан бага ангийн дүү нартаа зориулан “Электрон найз” сэдвийн хүрээнд цахилгаан хэрэгсэлтэй зөв ажиллах,аюулгүй ажиллагааны талаар мэдээлэл зөвлөмжийг хүргэв.Тус сургалтыг 1-5 ангийн нийт хэдэн бүлэгт оров. 🙌.
</p>
</div> </div>

<div className=" flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
<p className="text-center border-b pb-2 text-[20px] font-semibold"> OУ-ын IELTS шалгалтыг 13 сурагч амжилттай өглөө
 </p>
          <div className=" flex flex-col gap-2 items-center ">
          <Image className=" rounded-xl" src={zurag} width={300} alt="Шилдэг сургууль"/>
</div> </div>


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleAhlah} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center">
          <BackArrow/>
          Буцах
        </button>
      </div>

    </div>
  );
};

export default Ahlah11b;
