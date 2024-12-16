import * as React from "react"

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <div className="w-full border-b py-4 flex items-center justify-between ">
                <div className="px-6">
                    <img src="/reonic.svg" className="h-6 w-[74px]" alt="Reonic" />
                </div>
                <div className="">
                    <button className="group bg-gray-950 hover:bg-gray-700 text-white rounded-full p-2 w-24 text-xs font-medium flex items-center justify-center flex-row">Read Me </button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Header