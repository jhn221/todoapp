import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";
import Date from "react-live-clock";

function NowDate () {


    return (
        <div className="year-month">
            <span>
                <Year
                id='year'
                format={"YYYY"}
                ticking={false}
                timezone={'KR/Pacific'}
                />
            </span>.
            <span>
                <Month
                id='Month'
                format={"MM"}
                ticking={false}
                timezone={'KR/Pacific'}
                />
            </span>.
            <span>
                <Date
                id='Date'
                format={"DD"}
                ticking={false}
                timezone={'KR/Pacific'}
                />
            </span>.
            <span>
                <Day
                id='Day'
                format={"ddd"}
                ticking={false}
                timezone={'KR/Pacific'}
                />
            </span>
        </div>
    )
}
export default NowDate