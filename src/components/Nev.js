import React from "react";
import { Link } from 'react-router-dom'

function Nev () {
    return (

        <div className="Nev-body">
            <span className="title">오늘 하루는 어떠셨나요?</span>
            <div className="menu">
                <Link className="home" to="/"> HOME</Link>
                <Link className="home" to="/create">할일 추가</Link>
                <Link className="home" to="/calender"> 달력 </Link>
            </div>
    </div>
)
}

export default Nev;