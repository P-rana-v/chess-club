import React from "react";
import "./mystyles.css";
import { useState, useEffect, useRef } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export const Header = (props) => {
  const [fen, setFen] = useState("");

  const fetchDailyPuzzle = async() => {
    try{
        const response = await fetch("https://lichess.org/api/puzzle/daily");
        const data = await response.json(); 
        const chess = new Chess();
        chess.loadPgn(data.game.pgn);
        setFen(chess.fen());

    } catch (error ){
        console.log(error);
    }  
  }
  useEffect(() => {
    fetchDailyPuzzle()
  }, []);

  return (
    <header id="header">
          <div className="chess-start">
            <div className="puzzle">
              <a className="gotopuzzle" href="https://lichess.org/training/daily" 
              target="_blank" rel="noreferrer">
                <span>Daily Puzzle</span>
                <Chessboard position={fen} arePiecesDraggable={false}/>
              </a>
            </div>

            {props.data && 
              <div className="chessClub">
                <h1>{props.data.title}</h1>
                <p>Strategize. Compete. Triumph.</p>
                <a href="#features" >Learn More</a>
              </div>
            }
          </div>
    </header>
  );
};
