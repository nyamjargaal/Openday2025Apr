"use client";
import Image from "next/image";
import shildeg from "../../../assets/shildeg.png";
import { useRouter } from "next/navigation";
import { BackArrow } from "@/assets/icons/backArrow";
import slide1 from ".././../../assets/duguilan/letsspeak/1.png"
import slide2 from ".././../../assets/duguilan/letsspeak/2.png"
import slide3 from ".././../../assets/duguilan/letsspeak/3.png"
import slide4 from ".././../../assets/duguilan/letsspeak/4.png"
import slide5 from ".././../../assets/duguilan/letsspeak/5.png"
import slide6 from ".././../../assets/duguilan/letsspeak/6.png"
import slide7 from ".././../../assets/duguilan/letsspeak/7.png"
import slide8 from ".././../../assets/duguilan/letsspeak/8.png"
import slide9 from ".././../../assets/duguilan/letsspeak/9.png"
import slide10 from ".././../../assets/duguilan/letsspeak/10.png"
import slide11 from ".././../../assets/duguilan/letsspeak/11.png"
import slide12 from ".././../../assets/duguilan/letsspeak/12.png"
import slide13 from ".././../../assets/duguilan/letsspeak/13.png"
import slide14 from ".././../../assets/duguilan/letsspeak/14.png"
import slide15 from ".././../../assets/duguilan/letsspeak/15.png"
import slide16 from ".././../../assets/duguilan/letsspeak/16.png"
import slide17 from ".././../../assets/duguilan/letsspeak/17.png"
import slide18 from ".././../../assets/duguilan/letsspeak/18.png"
import slide19 from ".././../../assets/duguilan/letsspeak/19.png"
import slide20 from ".././../../assets/duguilan/letsspeak/20.png"
import slide21 from ".././../../assets/duguilan/letsspeak/21.png"
import slide22 from ".././../../assets/duguilan/letsspeak/22.png"
import slide23 from ".././../../assets/duguilan/letsspeak/23.png"
import slide24 from ".././../../assets/duguilan/letsspeak/24.png"
import slide25 from ".././../../assets/duguilan/letsspeak/25.png"
import slide26 from ".././../../assets/duguilan/letsspeak/26.png"
import slide27 from ".././../../assets/duguilan/letsspeak/27.png"
import slide28 from ".././../../assets/duguilan/letsspeak/28.png"
import slide29 from ".././../../assets/duguilan/letsspeak/29.png"
import slide30 from ".././../../assets/duguilan/letsspeak/30.png"
import slide31 from ".././../../assets/duguilan/letsspeak/31.png"
import slide32 from ".././../../assets/duguilan/letsspeak/32.png"
import slide33 from ".././../../assets/duguilan/letsspeak/33.png"
import slide34 from ".././../../assets/duguilan/letsspeak/34.png"
import slide35 from ".././../../assets/duguilan/letsspeak/35.png"
import slide36 from ".././../../assets/duguilan/letsspeak/36.png"
import slide37 from ".././../../assets/duguilan/letsspeak/37.png"
import slide38 from ".././../../assets/duguilan/letsspeak/38.png"
import slide39 from ".././../../assets/duguilan/letsspeak/39.png"
import slide40 from ".././../../assets/duguilan/letsspeak/40.png"
import slide41 from ".././../../assets/duguilan/letsspeak/41.png"
import slide42 from ".././../../assets/duguilan/letsspeak/42.png"
import slide43 from ".././../../assets/duguilan/letsspeak/43.png"
import slide44 from ".././../../assets/duguilan/letsspeak/44.png"
import slide45 from ".././../../assets/duguilan/letsspeak/45.png"
import slide46 from ".././../../assets/duguilan/letsspeak/46.png"
import slide47 from ".././../../assets/duguilan/letsspeak/47.png"
import slide48 from ".././../../assets/duguilan/letsspeak/48.png"
import slide49 from ".././../../assets/duguilan/letsspeak/49.png"
import slide50 from ".././../../assets/duguilan/letsspeak/50.png"
import slide51 from ".././../../assets/duguilan/letsspeak/51.png"
import slide52 from ".././../../assets/duguilan/letsspeak/52.png"
import slide53 from ".././../../assets/duguilan/letsspeak/53.png"
import slide54 from ".././../../assets/duguilan/letsspeak/54.png"
import slide55 from ".././../../assets/duguilan/letsspeak/55.png"
import slide56 from ".././../../assets/duguilan/letsspeak/56.png"
import slide57 from ".././../../assets/duguilan/letsspeak/57.png"
import slide58 from ".././../../assets/duguilan/letsspeak/58.png"
import slide59 from ".././../../assets/duguilan/letsspeak/59.png"

const LetsSpeak = () => {

  const router = useRouter();
  const handleHomePage = () => {router.push("/");};
  const handleBack = () => {router.push("/duguilan");};

  return (
    <div className=" flex flex-col w-screen h-screen items-center p-4 gap-5">
      <Image src={shildeg} width={200}  alt="Шилдэг сургууль" onClick={handleHomePage} />
      <div className="flex flex-col items-center gap-2 p-2 border-r-4 border-r-sky-900 border-b-4 border-b-red-600 border-l-red-600 border-l-4 border-t-4 border-t-sky-800 rounded-2xl">
      <p className="text-center border-b pb-2 text-[20px] font-semibold"> Lets Speak English</p>
      <p className="text-center text-[16px] font-semibold text-red-600">Зорилго</p>
      <p className="text-center">Англи хэлний ярианы чадварыг хөгжүүлэх, үгсийн санг нэмэгдүүлэх болон бүтээлч байдлыг дэмжих зорилготой</p>

        <Image className=" rounded-xl" src={slide1} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide2} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide3} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide4} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide5} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide6} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide7} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide8} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide9} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide10} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide11} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide12} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide13} width={300} alt="Шилдэг сургууль" />
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
        <Image className=" rounded-xl" src={slide26} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide27} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide28} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide29} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide30} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide31} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide32} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide33} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide34} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide35} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide36} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide37} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide38} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide39} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide40} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide41} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide42} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide43} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide44} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide45} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide46} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide47} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide48} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide49} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide50} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide51} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide52} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide53} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide54} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide55} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide56} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide57} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide59} width={300} alt="Шилдэг сургууль" />
        <Image className=" rounded-xl" src={slide58} width={300} alt="Шилдэг сургууль" />


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

export default LetsSpeak;
