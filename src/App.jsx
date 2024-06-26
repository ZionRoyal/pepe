import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import fore from "./assets/1.png";
import back from "./assets/2.jpg";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

function App() {
  const elements = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      elements.current.forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          element.style.opacity = 1;
          element.style.transform = "translateX(0)";
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ParallaxBanner
        layers={[
          { image: "/2.jpg", speed: -35 },
          { image: "/1.png", speed: -10 },
        ]}
        style={{
          height: "900px",
        }}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-end">
          <h1 className="text-8xl font-bold text-white text-stroke">
            Willkome
          </h1>
        </div>
      </ParallaxBanner>
      <div className="justify-end items-center">
        <Parallax speed={-15} className="absolute w-48 -top-14 right-0">
          <img src="/cloud.png" alt="" />
        </Parallax>
      </div>
      <div className="justify-end items-center">
        <Parallax speed={-19} className="absolute w-48 -top-20 right-80">
          <img src="/cloud.png" alt="" />
        </Parallax>
      </div>
      <div className="justify-end items-center rounded-full">
        <Parallax speed={-21} className="absolute w-60 top-72  right-[25rem]">
          <img src="/sun.png" alt="" />
        </Parallax>
      </div>
      <div className="section1 container mx-auto justify-center items-center relative">
        <img
          src="/title.png"
          alt="title"
          className="absolute w-[40rem] right-[55%] -rotate-6 -mt-20"
        />
        <div className="container flex justify-center items-center pt-[5rem]">
          <h1 className="font-custom text-black w-[35%] text-left uppercase text-xl -rotate-6  mb-10 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sit!
            Autem sapiente nesciunt facilis asperiores illum ullam quas iusto
            dolorum quaerat, odio labore quo minima nihil. Earum asperiores
            corrupti repellat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus earum tempore vero quidem laborum et
            eveniet eaque dolorem quaerat eius ipsam amet, numquam sequi ea, cum
            magni esse provident quam?
          </h1>
          <img
            src="/pepe.png"
            alt="pepe"
            className="absolute right-60 w-96 -rotate-6 top-10"
          />
        </div>
        <Parallax speed={-10}>
          <div className="absolute flex bottom-2">
            <img src="/cld.png" alt="cloud" className="w-60" />
          </div>
        </Parallax>
        <Parallax speed={10}>
          <div className="absolute flex -top-2 right-0">
            <img src="/cld.png" alt="cloud" className="w-60" />
          </div>
        </Parallax>
        <div className="font-custom flex justify-center -rotate-6 space-x-48">
          <a
            href="https://x.com/popo_on_base?s=21&t=e4VJ7rcZVtvmps9KT5k2Vw"
            className="bg-yellow-500 border-[2px] font-extrabold border-black px-6 py-1 rounded-full hover:bg-green-900 hover:text-white"
          >
            TWITTER
          </a>
          <a
            href="https://t.me/basedpopo"
            className="bg-yellow-500 border-[2px] border-black py-1 px-6 rounded-full hover:bg-green-900 hover:text-white"
          >
            TELEGRAM
          </a>
        </div>
      </div>
      <div className="section2 container justify-center items-center mx-auto flex mt-40 ">
        <div className="flex flex-col justify-center items-center mx-auto">
          <img src="/title.png" alt="title" className="w-[40rem] " />
          <h1 className="font-custom uppercase w-[40%] text-left text-xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            nostrum itaque iste nobis modi ipsa tenetur aliquam. Maiores
            assumenda vitae distinctio quia qui ad velit asperiores recusandae!
            Porro, inventore alias. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquam recusandae similique delectus ipsam id
            pariatur beatae, ea veniam animi dignissimos odit, ducimus,
            assumenda tempora minus quibusdam modi magni reprehenderit laborum.
          </h1>
          <div className="flex">
            <img src="/meme.jpg" alt="meme" />
          </div>
        </div>
      </div>
      <div className="section3 flex flex-col items-center space-y-2 justify-center mt-20 font-custom">
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white uppercase"
          href="https://x.com/popo_on_base?s=21&t=e4VJ7rcZVtvmps9KT5k2Vw"
          ref={(el) => (elements.current[0] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Twitter
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white uppercase"
          href="https://t.me/basedpopo"
          ref={(el) => (elements.current[1] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 0.7s ease",
          }}
        >
          Telegram
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white uppercase"
          href=""
          ref={(el) => (elements.current[2] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 0.9s ease",
          }}
        >
          Instagram
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white uppercase"
          href=""
          ref={(el) => (elements.current[3] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 1.1s ease",
          }}
        >
          Mail
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white uppercase"
          href=""
          ref={(el) => (elements.current[4] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 1.3s ease",
          }}
        >
          Basescan
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white "
          href="https://www.dextools.io/app/en/solana/pair-explorer/49VKXBqiNuEZXEPyDesZP1zniUeTPv9wcokpwShE9daH?t=1718178427148"
          ref={(el) => (elements.current[5] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 1.5s ease",
          }}
        >
          Dextools
        </a>
        <a
          className="border-[2px] w-[300px] justify-center flex border-black rounded-full bg-yellow-500 hover:bg-green-900 hover:text-white "
          href="https://dexscreener.com/solana/49vkxbqinuezxepydeszp1zniuetpv9wcokpwshe9dah"
          ref={(el) => (elements.current[6] = el)}
          style={{
            opacity: 0,
            transform: "translateX(100%)",
            transition: "opacity 0.5s ease, transform 1.7s ease",
          }}
        >
          Dexscreener
        </a>
      </div>
      <div className="mt-10">
        <div>
          <h1 className="font-semibold text-2xl">
            0x7422f030958Edf9884cE9c46a211029E03eF6da7
          </h1>
        </div>
        <div>
          <h1 className="w-[20%]">
            $POPO is a meme coin with no intrinsic value. The price may go up
            and down which we have no control over. Do your own research before
            investing.
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
