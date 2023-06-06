import React from "react";
import './FindD.css'

const FindD = ({devices}) => {
    return <div className="findD-main">{devices.map(device => (
        <div className="findD-box">
            <div className="findD-title">{device.text}</div>
            <div className="findD-id">급식기ID: {device.id}</div>
        </div>
    ))}</div>
}

export default FindD;