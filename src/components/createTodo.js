import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.proventDefault();

        const newTodo = {
            title,
            date,
            detail,
            finished : false
        }

        const request = {
            method : "POST",
            detail : JSON.stringify(newTodo),
            headers : {'Content-Type': 'application/json'}
        }
        fetch('http://localhost:3000/lists/',request)
        .then (()=> {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
        console.log(e.type)
    }

    return (
        <div className="creatList">
            <h2>할 일 추가하기</h2>
            <form onSubmit={handleSubmit}>
            <label>제목</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            />
            <label>날짜</label>
            <input 
            type="text"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="제목을 입력해주세요"
            />
            <label>내용</label>
            <select
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            ></select>
            <button>등록</button>
            </form>
        </div>
    )
}
export default CreateTodo