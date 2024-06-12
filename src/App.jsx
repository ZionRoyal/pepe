import bone from "./assets/bone.png";

function App() {
  return (
    <div className="container justify-center text-center mx-auto">
      <h1 className="font-custom text-[50px] pt-10 text-center">
        Introducing Based POPO
      </h1>
      <div className="text-center">
        <h2 className="font-custom2 text-[50px]">pepe's dog</h2>
      </div>
      <div className="mt-32">
        <div className="flex justify-evenly">
          <h1 className="font-custom bg-green-400 w-[300px] text-[25px] rounded-md p-5">
            LP BURNED TROUGH APE.STORE
          </h1>
          <h1 className="font-custom bg-green-400 w-[300px] text-[25px] rounded-md p-5">
            TOTAL SUPLY 2,000,000,000
          </h1>
        </div>
        <div className="right-0 justify-evenly flex">
          <h1 className="font-custom bg-green-400 w-[300px] text-[25px] rounded-md p-10 mt-20">
            TAX 0/0wqw
          </h1>
        </div>
      </div>
      <div className="justify-center flex mt-10">
        <img src={bone} alt="bone" className="w-[500px]" />
      </div>
    </div>
  );
}

export default App;
