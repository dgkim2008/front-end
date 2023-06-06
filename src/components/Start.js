import React from "react";
import {MdAddHome} from 'react-icons/md'
import { IoIosAdd } from "react-icons/io";
import "./Start.css"
import { Link } from "react-router-dom";


const Start = () => {
    return (
        <div className="start">
             <div className="title-box">
                <div className="title">멍냥</div>
                <div className="title">먹창고</div>
             </div>
             <Link to="/device">
               <div className="find-box">
                  <span className="find-icon"><IoIosAdd size={'2em'}></IoIosAdd></span>
                  <span className="find-title">자동급식기 찾기</span>
               </div>
             </Link>
             <div className="home-box">
                <MdAddHome size={'10em'}></MdAddHome>
             </div>
        </div>
    )
}

export default Start;