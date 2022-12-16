import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../util/useFetch";

const TodoDetail = () => {
    const { id } = useParams()
    const [isChecked, setisChecked] = useState(true)

    const request = {
        method : "get",
        headers : {'Content-Type': 'application/json'}
    }
    const [todo] = useFetch(`http://localhost:3000/lists/${id}`,request)
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        const deleteRequest = {
            method : "DELETE",
            headers : {'Content-Type': 'application/json'}
        }
        fetch(`http://localhost:/lists/${id}`,deleteRequest)
        .then (() => {
            navigate('../')
            window.location.reload()
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleFinishClick = () => {

        const updateRequest = {
            method : "PUT",
            body : JSON.stringify({...todo, finished : !isChecked}),
            headers : {'Content-Type': 'application/json'}
        }

        fetch(`http://localhost:3000/lists/${id}`,updateRequest)
        .then (() => {
            setisChecked(!isChecked)
        })
        .catch(err => {
            console.log(err)
        })
        

    }
    return (
        <div className="todoDetail">
            {todo && (
                <article className="detailTodo">
                    <h2> {todo.title} </h2>
                    <p>deadline is {todo.date}</p>
                    <div>{todo.detail}</div>
                    <button className="checkbox" onClick={handleFinishClick}>
                    완료했나요?  {isChecked ? "☐" :"☑"}
                    </button>
                    <button className="deleteButten" onClick={handleDeleteClick}>삭제하기</button>
                </article>
            )}
        </div>
    )
}
export default TodoDetail