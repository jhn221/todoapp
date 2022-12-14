import { useState } from "react";

const CreateTodo = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')

    const handleSubmit = (e) => {
    
        const newTodo = {
            title,
            date,
            detail,
            finished : false
        }
        console.log(newTodo)

        const request = {
            method : "POST",
            body : JSON.stringify(newTodo),
            headers : {'Content-Type': 'application/json'}
        }
        fetch('http://localhost:3000/lists/',request)
        .then (()=> {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
        console.log(e.target.value)
    }

    return (
        <div className="creatList">
            <h2>할 일 추가하기</h2>
            <form className="form" onSubmit={handleSubmit}>
            <label>TODO : </label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            />
            <br/><br/>
            <label>DATE : </label>
            <input 
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="날짜를 입력해주세요"
            />
            <br/><br/>
            <label>자세한 내용을 적어주세요! </label>
            <br/>
            <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="내용을 입력해주세요"
            ></textarea>
            <br/><br/>
            <button>등록</button>
            </form>
        </div>
    )
}
export default CreateTodo;