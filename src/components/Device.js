import React, { useState } from "react";
import "./Device.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import FindD from "./FindD";

const Device = () => {
    let bluetooth = false;

    const [devices] = useState ([
        {
            id: 1,
            text: "멍냥 급식기"
        },
        {
            id: 2,
            text: "멍냥급식기"
        }
    ])
    
    return (
        <div className="device">
            <div className="titlebox">멍냥 먹창고</div>
            <div className="back-box">
                <span><IoIosArrowRoundForward  size={'2em'} className="arrow"></IoIosArrowRoundForward></span>
                <span className="arrow-title">BACK</span>
            </div>

            <div className="bluetooth">{bluetooth===false? '블루투스를 연결해주세요': '블루투스가 연결되었습니다'}</div>

            <div className="choice-device">자동급식기를 선택해주세요</div>
            <div>
                <FindD devices={devices}></FindD>
            </div>

        </div>
    )
}

export default Device
