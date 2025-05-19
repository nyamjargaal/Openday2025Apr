"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from ".././../../assets/duguilan/Hatgamal/1.png"
import slide2 from ".././../../assets/duguilan/Hatgamal/2.png"
import slide3 from ".././../../assets/duguilan/Hatgamal/3.png"
import slide4 from ".././../../assets/duguilan/Hatgamal/4.png"
import slide5 from ".././../../assets/duguilan/Hatgamal/5.png"

const Hatgamal = () => {

  const router = useRouter();
  const handleHomePage = () => {router.push("/");};
  const handleBack = () => {router.push("/duguilan");};

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
      <p className="text-center border-b pb-2 text-[20px] font-semibold">“Happy embroidery 5-6”</p>
      <p className="text-center border-b pb-2 text-[20px] font-semibold">Удирдсан багш: Т.Даваачимэг</p>

      <p className="text-center">“Happy embroidery” дугуйланд 5-6-р ангийн сурагчид “Анхан дунд шат”- ны сургалтанд амжилттай суралцаж </p>
      <p className="text-center">Анхаарал төвлөрөлт сайжруулах</p>
      <p className="text-center">Юмсыг олон талаас нь харж бүтээлчээр сэтгэх </p>
      <p className="text-center">Зохиомж, өнгөний мэдлэгээ дээшлүүлэх</p>
      <p className="text-center">18 янзын хатгамлын төрлийг хатган, уран шаглаанд суралцлаа</p>
      <p className="text-center">Гоо зүйн мэдрэмжээ хөгжүүлэх</p>


        <Image className=" rounded-xl" src={slide1} width={300} alt="Шилдэг сургууль" />
         <p className="text-center">5а ангийн сурагч: Д.Тэгшзаяа</p>
        <Image className=" rounded-xl" src={slide2} width={300} alt="Шилдэг сургууль" />
         <p className="text-center">5а ангийн сурагч: Б.Арвинхишигт</p>
        <Image className=" rounded-xl" src={slide3} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide4} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide5} width={300} alt="Шилдэг сургууль" />
      


        <div className=" flex flex-col gap-2 w-full h-full items-center justify-center text-[50px] text-center font-semibold pb-16">
          <p className="">Анхаарал хандуулсанд баярлалаа</p>
        </div>
      </div>
      <div  className=" p-5 bg-[#ff0000] text-white rounded-lg cursor-pointer hover:bg-[#4054ba] fixed bottom-2 right-2" onClick={handleBack} >
        <button className=" flex m-auto rounded-3xl font-semibold h-[10px] items-center"><BackArrow/> Буцах</button>
      </div>
    </div>
  );
};

export default Hatgamal;
