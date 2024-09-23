import { useEffect, useState } from "react";
import useData from "../hooks/useData";

function Input({ currency, canWrite = "", onCurrChange, amn = '', onAmountChange, place}) {
  const [amount, setAmount] = useState(amn);
  const [curr, setCurr] = useState(currency);
  let options = useData(currency);
  let currencyOpt = Object.keys(options);
  
  useEffect( () => {
     setAmount(amn);
  }, [amn])
  

  return ( 
    <>
      <div className=" flex justify-center gap-7">
        <input
          type="number"
          readOnly={canWrite}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none p-2 bg-zinc-800 text-amber-300 border-2 border-solid border-amber-400"
          value={amount}
          placeholder={place}
          onChange={(e) => (setAmount(e.target.value),onAmountChange(e.target.value))}
        />

        <select
          className="outline-none max-w-16 bg-amber-400 text-zinc-900 font-bold rounded-lg uppercase cursor-pointer"
          value={curr}
          onChange={(e) => (setCurr(e.target.value),onCurrChange(e.target.value))}
        >
          {currencyOpt.map((curr) => {
            return (
              <option key={curr} value={curr}>
                {curr}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Input;
