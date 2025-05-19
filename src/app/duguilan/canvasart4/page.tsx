"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from ".././../../assets/duguilan/canvasArt46/1.png"
import slide2 from ".././../../assets/duguilan/canvasArt46/2.png"
import slide3 from ".././../../assets/duguilan/canvasArt46/3.png"
import slide4 from ".././../../assets/duguilan/canvasArt46/4.png"
import slide5 from ".././../../assets/duguilan/canvasArt46/5.png"
import slide6 from ".././../../assets/duguilan/canvasArt46/6.png"
import slide7 from ".././../../assets/duguilan/canvasArt46/7.png"
import slide8 from ".././../../assets/duguilan/canvasArt46/8.png"
import slide9 from ".././../../assets/duguilan/canvasArt46/9.png"
import slide10 from ".././../../assets/duguilan/canvasArt46/10.png"
import slide11 from ".././../../assets/duguilan/canvasArt46/11.png"
import slide12 from ".././../../assets/duguilan/canvasArt46/12.png"
import slide13 from ".././../../assets/duguilan/canvasArt46/13.png"
import slide14 from ".././../../assets/duguilan/canvasArt46/14.png"
import slide15 from ".././../../assets/duguilan/canvasArt46/15.png"
import slide16 from ".././../../assets/duguilan/canvasArt46/16.png"
import slide17 from ".././../../assets/duguilan/canvasArt46/17.png"
import slide18 from ".././../../assets/duguilan/canvasArt46/18.png"
import slide19 from ".././../../assets/duguilan/canvasArt46/19.png"
import slide20 from ".././../../assets/duguilan/canvasArt46/20.png"
import slide21 from ".././../../assets/duguilan/canvasArt46/21.png"
import slide22 from ".././../../assets/duguilan/canvasArt46/22.png"
import slide23 from ".././../../assets/duguilan/canvasArt46/23.png"
import slide24 from ".././../../assets/duguilan/canvasArt46/24.png"
import slide25 from ".././../../assets/duguilan/canvasArt46/25.png"



const CanvasArt4 = () => {

  const router = useRouter();
  const handleHomePage = () => {router.push("/");};
  const handleBack = () => {router.push("/duguilan");};

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> Canvas Art 4-6-р анги</p>
      <p className="text-center text-[16px] font-semibold text-red-600">Удирдсан багш: Т.Даваачимэг       </p>
      <p className="text-center">“Canvas art” дугуйланд 4-6-р ангийн сурагчид “Анхан дунд шат”- ны сургалтанд амжилттай суралцаж </p>
      <p className="text-center">Анхаарал төвлөрөлт сайжруулах</p>
      <p className="text-center">Юмсыг олон талаас нь харж бүтээлчээр сэтгэх </p>
      <p className="text-center">Зохиомж, өнгөний мэдлэгээ дээшлүүлэх</p>
      <p className="text-center">Акриликаар зурах техник ур чадвараа хөгжүүлэх</p>
      <p className="text-center">Хуваалт хийх, скочны ажил</p>
      <p className="text-center">Гоо зүйн мэдрэмжээ хөгжүүлэх зэрэг урлан бүтээх чадваруудад суралцлаа</p>

        <Image className=" rounded-xl" src={slide1} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide2} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide3} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide4} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: Ц.Цолмон</p>
        <Image className=" rounded-xl" src={slide5} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: С.Нэгүн</p>
        <Image className=" rounded-xl" src={slide6} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: М.Мөнх-Уянга</p>
        
        <Image className=" rounded-xl" src={slide7} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: Т.Шүрэнчимэг</p>
        <Image className=" rounded-xl" src={slide8} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: М.Нандин-Эрдэнэ</p>
        <Image className=" rounded-xl" src={slide9} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: О.Сондор</p>
        <Image className=" rounded-xl" src={slide10} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">4а ангийн сурагч: Б.Мишээл</p>
        <Image className=" rounded-xl" src={slide11} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">6b ангийн сурагч: Г.Энхзолбоо</p>
        <Image className=" rounded-xl" src={slide12} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">6с ангийн сурагч: С.Инжир</p>
        <Image className=" rounded-xl" src={slide13} width={300} alt="Шилдэг сургууль" />
        <p className="text-center">6а ангийн сурагч: С.Мишээл</p>
        <Image className=" rounded-xl" src={slide14} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide15} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide16} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide17} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide18} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide19} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide20} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide21} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide22} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide23} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide24} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide25} width={300} alt="Шилдэг сургууль" />
        


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

export default CanvasArt4;
