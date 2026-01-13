import React from 'react'
import { useEffect, useRef, useState } from "react";

function Timer() {
    
     //localStorage.clear();
        const [time, setTime] = useState(() => {
            const savedTime = localStorage.getItem("timeTrack");
            return savedTime ? Number(savedTime) : 25 * 60;
        });
    
        useEffect(() => {
            localStorage.setItem("timeTrack", time);
        }, [time]);


    //  const [time, setTime] = useState(25 * 60);
        const minutes = Math.floor(time / 60);
        const second = time % 60;
        
        const [isRunning, setIsRunning] = useState(false);
    
        const referance = useRef(null);
    
        useEffect(() => {
            if (isRunning) {
                referance.current = setInterval(() => {
                    setTime((prev) => prev - 1);
                }, 1000);
            }
            return () => clearInterval(referance.current);
        }, [time, isRunning]);
    
        const startTime = () => {
            setIsRunning(true);
        };
        const pauseTime = () => {
            setIsRunning(false)
        }
  return (
    <div>
        
        <h1 className="text-8xl font-bold mb-8">
                        {minutes}:{second < 10 ? `0${second}` : second}
                    </h1>
                    {isRunning ? (
                        <button
                            onClick={pauseTime}
                            className="bg-white text-[#a53632] text-2xl font-semibold px-16 py-4 rounded-lg shadow-lg"
                        >
                            PAUSE
                        </button>
                    ) : (
                        <button
                            onClick={startTime}
                            className="bg-white text-[#a53632] text-2xl font-semibold px-16 py-4 rounded-lg shadow-lg"
                        >
                            START
                        </button>
                    )}
    </div>
  )
}

export default Timer


