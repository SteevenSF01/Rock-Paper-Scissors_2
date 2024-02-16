import React, { useState, useEffect } from "react";
import Scissors from "../Scissors/Scissors";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";

export default function Game(props) {
  const choixComponents = [
    { type: "rock", component: <Rock /> },
    { type: "paper", component: <Paper /> },
    { type: "scissors", component: <Scissors /> },
  ];
  const [result, setResult] = useState("");
  const [choixRandom, setChoixRandom] = useState(null);
  const [countdown, setCountdown] = useState(3);

  //! *****************************************
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCountdown((counter) => counter - 1);
    }, 1000);

    if (countdown == 0 && !choixRandom) {
      clearInterval(counterInterval);

      const choixPc =
        choixComponents[Math.floor(Math.random() * choixComponents.length)];

      setChoixRandom(choixPc);
    }

    return () => clearInterval(counterInterval);
  }, [countdown, choixRandom, choixComponents]);
  //! *****************************************

  useEffect(() => {
    if (choixRandom) {
      resultat(props.navigation, choixRandom.type);
    }
  }, [choixRandom, props.navigation]);

  //! ****************************************

  const resultat = (choixUser, choixPc) => {
    if (
      (choixUser === "rock" && choixPc === "scissors") ||
      (choixUser === "scissors" && choixPc === "paper") ||
      (choixUser === "paper" && choixPc === "rock")
    ) {
      setResult("YOU WIN");
    } else if (choixUser === choixPc) {
      setResult("IT'S A DRAW");
    } else {
      setResult("YOU LOSE");
    }
  };
  //! ****************************************

  return (
    <div className="w-[90%] h-[55%] md:p-0 mt-8 mx-auto flex flex-wrap justify-between p-2 ">
      <div className="w-[50%] h-[55%] text-white md:flex-col-reverse flex flex-col justify-between items-center  ">
        {props.navigation === "paper" ? (
          <Paper />
        ) : props.navigation === "scissors" ? (
          <Scissors />
        ) : (
          <Rock />
        )}
        <p>YOU PICKED</p>
      </div>

      <div className="w-[50%] h-[55%] md:flex-col-reverse text-white flex flex-col justify-between items-center ">
        {countdown > 0 ? (
          <p className="text-[40px] text-white mt-12 ">{countdown}</p>
        ) : (
          choixRandom && choixRandom.component
        )}
        <p>THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] lg:absolute lg:w-[80%] right-[100px] lg:top-[200px] ">
        <p className="text-white text-[44px] font-bold ">{result}</p>

        <button
          onClick={() => {
            props.setNavigation("home");
          }}
          className="text-[#1f3756] px-12 rounded-xl py-2 bg-white"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
