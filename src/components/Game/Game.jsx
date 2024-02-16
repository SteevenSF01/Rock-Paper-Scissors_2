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
  const [countdown, setCountdown] = useState(2);

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
      props.setScore(props.score +1)
    } else if (choixUser === choixPc) {
      setResult("IT'S A DRAW");
    } else {
      setResult("YOU LOSE");
      if (props.score > 0) {
        props.setScore(props.score -1)
      }else{

      }
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
        <p className="xl:text-[40px] "> YOU PICKED</p>
      </div>

      <div className="w-[50%] h-[55%] md:flex-col-reverse text-white flex flex-col justify-between items-center ">
        {countdown > 0 ? (
          <p className="text-[40px] text-white mt-12 xl:text-[80px] ">{countdown}</p>
        ) : (
          choixRandom && choixRandom.component
        )}
        <p className="xl:text-[40px]">THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] lg:absolute lg:w-[80%] right-[100px] lg:top-[200px] xl:right-[150px] xl:top-[300px] ">
        <p className="text-white text-[44px] font-bold xl:text-[80px]">{result}</p>

        <button
          onClick={() => {
            props.setNavigation("home");
          }}
          className="text-[#1f3756] px-12 rounded-xl py-2 xl:px-[100px] xl:py-[15px] bg-white"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
