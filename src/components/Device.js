import React from "react";
import "./Device.css"
import { IoIosArrowRoundForward } from "react-icons/io";

const Device = () => {
    return (
        <div className="device">
            <div className="titlebox">멍냥 먹창고</div>
            <div className="back-box">
                <span><IoIosArrowRoundForward  size={'2em'}></IoIosArrowRoundForward></span>
                <span>BACK</span>
            </div>
            

        </div>
    )
}

export default Device
