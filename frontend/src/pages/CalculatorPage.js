import React, { useContext } from "react";
import { Link } from "react-router-dom";
import VillaCozy from "../assets/houses/villa-cozy.png";
import CalculatorInputCard from "../components/CalculatorComponents/CalculatorInputCard";
import CalculatorResults from "../components/CalculatorComponents/CalculatorResultCard";
import { CalculatorContext } from "../contexts/CalculatorContext";

function CalculatorPage() {
  const { calculatorStorage, setCalculatorStorage } =
    useContext(CalculatorContext);

  return (
    <div className="bg-purple-900 min-h-screen sm:py-28 pt-28 pb-96">
      <Link to="/">
        <div
          className="font-ubuntu font-bold text-white text-2xl py-2 px-6 
          top-8 left-12 bg-purple-500 absolute cursor-pointer"
        >
          <div className="hover:scale-110 active:scale-90 duration-300">
            FF-Land
          </div>
        </div>
      </Link>

      <div className="sm:grid sm:grid-cols-2">
        <div
          className="font-ubuntu text-5xl font-bold text-white text-center
          col-span-2 sm:mb-14 sm:mt-0 mt-10 mb-16"
        >
          <span>Let's </span>
          <span
            className="bg-clip-text text-transparent bg-gradient-to-tr 
           from-orange to-purple-300"
          >
            Calculate
          </span>
        </div>

        <div className="sm:ml-auto sm:mr-10 sm:flex-none flex justify-center sm:mb-0 mb-8">
          <CalculatorInputCard />
        </div>

        <div className="sm:mr-auto sm:ml-10 ">
          <div className="sm:flex-none flex justify-center sm:mb-0">
            <CalculatorResults />
          </div>
          <div className="relative">
            <div className="flex justify-evenly py-8 relative z-10">
              <button
                onClick={() =>
                  setCalculatorStorage({
                    ...calculatorStorage,
                    passiveIncomeGoal: "",
                    fromAge: "",
                    toAge: "",
                    totalInvestedGoal: 0,
                    monthlyPayments: 0,
                  })
                }
                className="btn-white text-lg"
              >
                Reset
              </button>
              <Link to="/application">
                <button className="btn-green text-lg">Play Now</button>
              </Link>
            </div>
            <img
              className="absolute z-1 w-full sm:scale-150 scale-110 -bottom-72"
              src={VillaCozy}
              alt="VillaCozy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default CalculatorPage;