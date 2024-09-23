import { useEffect, useState } from "react";
import Input from "./components/Input";
import useData from "./hooks/useData";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState('');
  const [amount,setAmount] = useState('');
  let options = useData(from);


  return (
    <>
      <div className="h-screen bg-zinc-700 flex justify-center items-center">
        <div className="h-[380px] w-2/3 max-w-[650px] flex">
          <div className="h-full w-1/2 bg-[url('https://images.pexels.com/photos/4270292/pexels-photo-4270292.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-l-lg"></div>
          <div className="h-full w-1/2 bg-zinc-900 rounded-r-lg">
            <h1 className="h-[100px] text-amber-300 text-xl uppercase font-extrabold font-serif flex justify-center items-center">
              currency exchange
            </h1>
            <div className="h-2/3 flex flex-col justify-around items-center">
              <Input currency="usd" onCurrChange={setFrom} onAmountChange={setAmount} canWrite={false} place="enter the amount"></Input>

              <Input currency="inr" onCurrChange={setTo} canWrite={true} amn={convertedAmount} place="converted amount"></Input>

              <div className="w-full flex justify-center items-center">
                <button
                  className="p-2 bg-orange-500 text-lg text-neutral-900 font-bold uppercase rounded hover:bg-orange-400"
                  onClick={() => setConvertedAmount(Number(amount) * options[to])}
                >
                  convert from {from} to {to}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
