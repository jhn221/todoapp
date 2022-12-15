import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";
import Date from "react-live-clock";

// 날짜 자동으로 바꿔주는 라이브러리 수정
function NowDate () {
    return (
        <div className="year-month">
            <span>
                <Year
                id='year'
                format={"YYYY"}
                ticking={true}
                timezone={'Asia/Seoul'}
                />
            </span>.
            <span>
                <Month
                id='Month'
                format={"MM"}
                ticking={true}
                timezone={'Asia/Seoul'}
                />
            </span>.
            <span>
                <Date
                id='Date' 
                format={"DD"}
                ticking={true}
                timezone={'Asia/Seoul'}
                />
            </span>.
            <span>
                <Day
                id='Day'
                format={"ddd"}
                ticking={true}
                timezone={'Asia/Seoul'}
                />
            </span>
        </div>
    )
}
export default NowDate