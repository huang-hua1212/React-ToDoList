import TodolistEdit from './components/TodolistEdit';
import TodolistList from './components/TodolistList';
import { API_GET_DATA } from '../../global/contents';
import { useState, useEffect } from 'react';
import './Todolist.css';

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA);
    console.log(res);
    const {data} = await res.json();
    console.log(data);
}
async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data }),
    })
}
function Todolist() {
    const [data, setData] = useState([]);  //[1,2,3] setData的時候一定要整個陣列給，不能只給一個數字

    //(1)若希望某個永遠(除非重新整理)維持一樣
    // const submissioningStatus = useRef('永遠一樣的值');  //這個永遠一樣的值用來作為一個標準
    //(2)
    //當第二參數發生變化時，會執行第一個參數的函數
    // useEffect(() => {
    //     fetch('http://localhost:3000') //測試fetchApi
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }, []);  //當地二個參數為空字串時， 代表該 Effect 只會在首次 Render 時執行
    // fetch('http://localhost:3000/posts') //測試fetchApi
    //     .then((dat) => {
    //         console.log(dat);
    //     })
    return <div className='todolist'>
        <TodolistEdit add={setData} />
        <TodolistList listData={data} deleteItem={setData} />
    </div>
}
export default Todolist;