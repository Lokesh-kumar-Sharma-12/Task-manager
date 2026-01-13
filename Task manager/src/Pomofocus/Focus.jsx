import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { FaGear, FaCircleUser } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import Task from "./Task";
import Points from "./Points";
import Timer from "./Timer";
import Timershort from "./Timershort";
import Timerlong from "./Timerlong";

function Focus() {
    const [activeTab, setActiveTab] = useState("pomodoro");
    const [arr, setArr] = useState([]);
    const [TaskInput, setTask] = useState("");

    const addTask = () => {
        const newtask = TaskInput;
        if (newtask) {
            setArr([...arr, newtask]);
        }
        setTask("");
    };

    const removeTask = (index) => {
        setArr((prevArr) => {
            const newArr = [...prevArr];
            newArr.splice(index, 1);
            return newArr;
        });
    };

    const removeallTask = () => {
        setArr([]);
    };

    const updateTask = (index, newValue) => {
        const newArr = [...arr];
        newArr[index] = newValue;
        setArr(newArr);
    };

    return (
        <div className={`min-h-screen text-white transition-colors duration-500 delay-500 pb-10
        ${activeTab === "pomodoro" ? "bg-[#8f322e]" : activeTab === "short" ? "bg-[#91C6BC]" : "bg-[#F875AA]"}`
        }>
            {/* --- NAVBAR --- */}
            <nav className="w-11/12 max-w-2xl mx-auto flex items-center justify-between py-4">
                <div className="flex items-center gap-1 text-xl font-bold cursor-pointer">
                    <FaCheckCircle />
                    <span>Pomofocus</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 sm:px-3 py-2 rounded text-sm transition">
                        <MdInsertChart /> <span className="hidden sm:inline">Report</span>
                    </button>
                    <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 sm:px-3 py-2 rounded text-sm transition">
                        <FaGear /> <span className="hidden sm:inline">Setting</span>
                    </button>
                    <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 sm:px-3 py-2 rounded text-sm transition">
                        <FaCircleUser /> <span className="hidden sm:inline">Sign In</span>
                    </button>
                    <button className="flex items-center justify-center bg-white/20 hover:bg-white/30 w-9 h-9 rounded transition">
                        <FaEllipsisV />
                    </button>
                </div>
            </nav>

            {/* --- TIMER SECTION --- */}
            <div className="flex justify-center mt-4 sm:mt-10 px-2">
                <div className={`w-[95%] max-w-xl rounded-xl py-6 sm:py-10 px-3 text-center shadow-xl text-white transition-colors duration-500 delay-500
                ${activeTab === "pomodoro" ? "bg-[#8f322e]/80 sm:bg-[#8f322e]" : activeTab === "short" ? "bg-[#07cceb]" : "bg-[#e3a034]"}`}>

                    {/* BUTTONS SECTION */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-5 mb-5 text-sm sm:text-lg">
                        <button
                            onClick={() => setActiveTab("pomodoro")}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors duration-500 delay-500 ${activeTab === "pomodoro" ? "bg-[#742a27] font-bold" : ""}`}
                        >
                            Pomodoro
                        </button>

                        <button
                            onClick={() => setActiveTab("short")}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors duration-500 delay-500 ${activeTab === "short" ? "bg-[#bda639] font-bold" : ""}`}
                        >
                            Short Break
                        </button>

                        <button
                            onClick={() => setActiveTab("long")}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors duration-500 delay-500 ${activeTab === "long" ? "bg-[#7dace0] font-bold" : ""}`}
                        >
                            Long Break
                        </button>
                    </div>

                    {/* TIMER COMPONENT */}
                    <div className="text-6xl sm:text-8xl font-bold my-4">
                        {activeTab === "pomodoro" && <Timer />}
                        {activeTab === "short" && <Timershort />}
                        {activeTab === "long" && <Timerlong />}
                    </div>
                </div>
            </div>

            <p className="text-center mt-6 text-lg px-4">
                <span className="opacity-60">#1</span>
                <br />
                Time to focus!
            </p>

            {/* --- TASKS SECTION --- */}
            <div className="w-11/12 max-w-xl mx-auto text-white mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Tasks</h2>

                    <div className="bg-white/20 hover:bg-white/30 rounded p-1 cursor-pointer">
                        <Points removeallTask={() => removeallTask()} />
                    </div>
                </div>

                <div className="border-t-2 border-white/40 pt-4">
                    <div className="flex flex-col sm:flex-row gap-3 bg-black/10 p-4 rounded-lg">
                        <input
                            type="text"
                            placeholder="What are you working on?"
                            value={TaskInput}
                            onChange={(e) => {
                                e.preventDefault();
                                setTask(e.target.value);
                            }}
                            // Input full width on mobile
                            className="bg-white text-black text-lg rounded px-4 py-3 outline-none flex-1 w-full"
                        />

                        {/* Button full width on mobile */}
                        <button 
                            onClick={addTask} 
                            className="bg-black/20 hover:bg-black/30 text-white font-semibold py-3 px-6 rounded transition w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <span className="text-xl font-bold">+</span> Add
                        </button>
                    </div>

                    {/* TASK LIST */}
                    <div className="grid gap-3 mt-4">
                        {arr.map((item, index) => (
                            <Task 
                                key={index} // Capital 'Key' galat hai, 'key' small hona chahiye
                                index={index} 
                                taskName={item} 
                                removeTask={() => removeTask(index)} 
                                updateTask={updateTask} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Focus;