import TodolistEdit from './components/TodolistEdit';
import TodolistList from './components/TodolistList';
import { API_GET_DATA } from '../../global/contents';
import { useState, useEffect, useRef } from 'react';
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

    const ref = useRef(false);
    console.log(ref);
    ref.current = true;

    console.log(ref);
    console.log(ref.current);

    //(1)若希望某個變數永遠存在(除非重新整理)
    // const submissioningStatus = useRef('初始值');  //這個永遠一樣的值用來作為一個標準
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
    return <div>
    <div className='todolist'>
        <TodolistEdit add={setData} />
        <TodolistList listData={data} deleteItem={setData} />
    </div>
    <div className = 'lastNextBtn'>
        <a className='lastBtnA' href = '#'><div className='lastBtn'>退出</div></a>
        <a className='nextBtnA' href = '#'><div className='nextBtn'>下一步</div></a>
    </div>
    </div>
}
export default Todolist;