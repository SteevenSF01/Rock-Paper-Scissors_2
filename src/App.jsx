import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

import Rock from "./components/Rock/Rock";
import Paper from "./components/Paper/Paper";
import Scissors from "./components/Scissors/Scissors";

import Game from "./components/Game/Game";

import RulesGame from "./images/image-rules.svg";
import Close from "./images/icon-close.svg";

function App() {
  const [isOpen, setIsOpen] = useState("none");
  const [score, setScore] = useState(0);
  const [navigation, setNavigation] = useState("home");


  const counter = () => {
    setScore(score + 1);
  };
  

  return (
    <>
      <Header score={score} />

      {navigation == "home" ? (
          <div className="w-[90%] h-[55%] md:w-[600px] md:h-[380px] md:mt-10 md:p-0 px-5 mt-8  mx-auto flex flex-wrap justify-between md:justify-around p-2 containerMain">
          <Paper counter={counter} setNavigation = {setNavigation} />
          <Scissors setNavigation = {setNavigation} />
          <div className="w-[100%] h-[50%] flex justify-center items-end ">
            <Rock setNavigation = {setNavigation} />
          </div>
        </div>
      ) : (
        <Game 
        navigation={navigation} 
        setNavigation = {setNavigation} 
        setScore = {setScore}
        score = {score} />
      )}

      <div className=" flex justify-center md:absolute md:right-[50px] md:bottom-[50px] ">
        <button
          onClick={() => {
            setIsOpen("block");
          }}
          className="py-1 px-8 border-[#606e85] rounded-lg border-2 mt-3 text-white"
        >
          {" "}
          Rules{" "}
        </button>
      </div>
      <div
        className="bg-white absolute top-0 left-0 h-[100%] w-[100%] md:w-[35%] md:h-[60%] md:rounded-2xl md:top-[20%] md:left-[33%] "
        style={{ display: `${isOpen}` }}
      >
        <div className=" h-[100%] py-10 md:p-4 md:block flex flex-col justify-between items-center ">
          <h1 className="text-[#3b4363] text-[30px] font-semibold md:text-start ">RULES</h1>
          <img src={RulesGame} alt="" className="w-[75%] md:mx-auto md:mt-12 " />
          <img
            onClick={() => {
              setIsOpen("none");
            }}
            src={Close}
            alt=""
            className="w-[5%] md:absolute md:top-7 right-7 "
          />
        </div>
      </div>
    </>
  );
}

export default App;
