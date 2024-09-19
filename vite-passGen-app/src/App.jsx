import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [canNum, setCanNum] = useState(false);
  const [canSyb, setCanSyb] = useState(false);
  const [numBtn, setNumBtn] = useState(" bg-slate-800 ");
  const [sybBtn, setSybBtn] = useState(" bg-slate-800 ");
  const refer = useRef(null);

  function changeNumBtn() {
    if (canNum) setNumBtn(" bg-blue-700 ");
    else setNumBtn(" bg-slate-800 ");
  }

  function changeSybBtn() {
    if (canSyb) setSybBtn(" bg-blue-700 ");
    else setSybBtn(" bg-slate-800 ");
  }

  function generatePassword() {
    let pass = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (canNum) dict += "1234567890";
    if (canSyb) dict += "!@#$%^&*()_+-=";

    for (let i = 0; i < length; i++) {
      let rdx = Math.floor(Math.random() * (dict.length - 1) + 1);
      pass += dict.charAt(rdx);
    }

    setPassword(pass);
  }

  function copy() {
    refer.current.select();
    navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    changeNumBtn();
  }, [canNum]);

  useEffect(() => {
    changeSybBtn();
  }, [canSyb]);

  useCallback(generatePassword, [length, canNum, canSyb, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, canNum, canSyb]);

  return (
    <>
      <div className="h-screen bg-zinc-800 flex flex-col justify-start">
        <h1 className=" h-20 bg-lime-400 text-neutral-900 text-2xl md-[375px]:text-3xl uppercase font-extrabold flex justify-center items-center">
          password generator
        </h1>

        <div className="h-full max-h-96 flex justify-center items-center">
          <div className="h-52 w-4/5 md:w-2/4 bg-lime-500 rounded-2xl ">
            <div className="h-2/4 flex justify-center items-center">
              <div className="h-12 w-4/5 lg:w-3/4  flex justify-center items-center">
                <input
                  type="text"
                  value={password}
                  className="h-full w-4/5 px-3 bg-zinc-800 text-lime-50 border-none outline-none"
                  ref={refer}
                  readOnly
                />
                <button
                  className=" h-full w-1/5 p-2 bg-slate-700 text-lime-400 font-bold rounded-tr-lg rounded-br-lg hover:text-lime-200  hover:text-lg "
                  onClick={copy}
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="h-2/4 flex justify-center items-center">
              <div className=" h-full lg:h-12 w-4/5 flex flex-col lg:flex-row justify-around items-center ">
                <div className="w-60 flex justify-around">
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="accent-slate-800"
                  />
                  <span className="font-medium text-lg ">length({length})</span>
                </div>

                <div className=" flex gap-3">
                  <button
                    className={
                      " p-2 text-lime-400 font-medium rounded-md " + numBtn
                    }
                    onClick={() => {
                      setCanNum((p) => !p);
                    }}
                  >
                    numbers
                  </button>
                  <button
                    className={
                      " p-2 text-lime-400 font-medium rounded-md " + sybBtn
                    }
                    onClick={() => {
                      setCanSyb((p) => !p);
                    }}
                  >
                    symbols
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
