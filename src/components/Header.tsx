import React from "react"

const Header: React.FC = () => {
    return (
        <div className="w-full border-b py-4 flex items-center justify-between ">
            <div className="px-6">
                <img src="/reonic.svg" className="h-6 w-[74px]" alt="Reonic" />
            </div>
            <div className="">
                <a
                    href="https://github.com/Samanthkumarsg/Reonic-EV-Simulator/tree/main#reonic-ev-simulator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="group bg-gray-950 hover:bg-gray-700 text-white rounded-full p-2 w-24 text-xs font-medium flex items-center justify-center flex-row">Read Me </button>
                </a>
            </div>

        </div>
    )
}

export default Header