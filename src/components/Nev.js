import React from "react";
import { Link } from 'react-router-dom'

function Nev () {
    return (

        <div className="Nev-body">
            <span className="title">오늘 하루는 어떠셨나요?</span>
            <div className="menu">
                <Link to="/calender"> 달력 </Link>
                <Link to="/Login">login</Link>
            </div>
    </div>
)
}

export default Nev;