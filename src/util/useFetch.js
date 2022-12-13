import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [todo, setTodo] = useState(null)
    
    useEffect (() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Error!")
                }
                return res.json()
            })
            .then(data => {
                setTodo(data)
                console.log(data)
            })
            .catch(err => {
                console.log("err")
            })
        },1000)
    },[url])
    return [todo, setTodo]
}

export default useFetch