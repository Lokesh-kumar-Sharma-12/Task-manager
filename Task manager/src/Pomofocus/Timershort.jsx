import React, { useEffect, useRef, useState } from "react";

function Timershort() {
    const [time, setTime] = useState(5 * 60);

    const minutes = Math.floor(time / 60);
    const second = time % 60;

    const [isRunning, setIsRunning] = useState(false);
    const referance = useRef(null);

    useEffect(() => {
        if (isRunning) {
            referance.current = setInterval(() => {
                setTime((prev) => {
                    // Time 0 hone par ruk jaye
                    if (prev <= 0) {
                        clearInterval(referance.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(referance.current);
    }, [isRunning]);

    const startTime = () => {
        if (time > 0) setIsRunning(true);
    };

    const pauseTime = () => {
        setIsRunning(false);
    };

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
                    className="bg-white text-[#BA4949] text-2xl font-semibold px-16 py-4 rounded-lg shadow-lg uppercase"
                >
                    START
                </button>
            )}
        </div>
    );
}

export default Timershort;