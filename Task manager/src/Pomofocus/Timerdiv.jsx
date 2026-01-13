import React from 'react'
import Timer from "./Timer";
import Timershort from "./Timershort";
import Timerlong from "./Timerlong";
import { useState } from "react";
function Timerdiv() {
    
    const [activeTab, setActiveTab] = useState("pomodoro");

    return (
        <div className={`w-162.5 rounded-xl py-10 px-3 text-center shadow-xl text-white transition-colors duration-500 delay-500
        ${activeTab === "pomodoro" ? "bg-[#8f322e]" :activeTab==="short" ? "bg-[#91C6BC]":"bg-[#F875AA]"}`}>

            {/* BUTTONS SECTION */}
            <div className="flex justify-center space-x-5 mb-5 text-lg">
                <button
                    onClick={() => setActiveTab("pomodoro")}
                    className={`px-4 py-2 rounded-md  transition-colors duration-500 delay-500  ${activeTab === "pomodoro" ? "bg-[#3475b7] font-bold" : ""}`}
                >
                    Pomodoro
                </button>

                <button
                    onClick={() => setActiveTab("short")}
                    className={`px-4 py-2 rounded-md  transition-colors duration-500 delay-500 ${activeTab === "short" ? "bg-[#F875AA] font-bold" : ""}`}
                >
                    Short Break
                </button>

                <button
                    onClick={() => setActiveTab("long")}
                    className={`px-4 py-2 rounded-md  transition-colors duration-500 delay-500 ${activeTab === "long" ? "bg-[#91C6BC] font-bold" : ""}`}
                >
                    Long Break
                </button>
            </div>

            {/*(Jo active hai wahi dikhega) */}

            {activeTab === "pomodoro" && <Timer />}
            {activeTab === "short" && <Timershort />}
            {activeTab === "long" && <h1><Timerlong /></h1>}

        </div>
    )
}

export default Timerdiv