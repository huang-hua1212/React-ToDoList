import './TodolistEdit.css'
import {useState} from 'react'
import {v4 as uuid} from 'uuid';

// add是與父元件溝通的屬性(function或變數)，會存在於父元件的中的子元件的屬性<TodolistEdit add="{函數參數}"></TodolistEdit>
function TodolistEdit({add}){
    function AddItem(e){
        e.preventDefault();
        const newItem = {
            id: uuid(),
            noteText,
            noteDate,
            noteTime,
        }
        add((prevData) => {
            const result = [...prevData, newItem];
            return result;
        })//add([1, 2, 3]);
        setNoteText('');
        setDateText('');
        setTimeText('');
    }
    const [noteText, setNoteText] = useState ('');  //{變數名稱, 賦值之函數}useState('Initial Value')
    function textArea(e){
        setNoteText(e.target.value);
        console.log(noteText);  //取state值
    }

    const [noteDate, setDateText] = useState ('');  //{變數名稱, 賦值之函數}useState('Initial Value')
    function date(e){
        setDateText(e.target.value);
        console.log(noteDate);  //取state值
    }

    const [noteTime, setTimeText] = useState ('');  //{變數名稱, 賦值之函數}useState('Initial Value')
    function time(e){
        // console.log(e.target.value);
        setTimeText(e.target.value);
        console.log(noteTime);  //取state值
    }
    return <div>
        <div>
            <h1 className = 'title'>TodoList</h1>
            <h3 className='subTitle'>Edit Text</h3>
            <textarea className='editTextarea' 
            value = {noteText} onChange = {textArea}></textarea>
            <h3 className='subTitle'>Date</h3>
            <input className='editDate' type = 'date'
            value = {noteDate} onChange = {date}/>
            <h3 className='subTitle'>Time</h3>
            <input className='editTime' type = 'time'
            value = {noteTime} onChange = {time}/>
            <a className='addBtn'  href = '#'  onClick={AddItem}>
            <div  className='addBtnDiv'  >
            <p className='addBtnP'>Add New</p>
            </div>
            </a>
        </div>
    </div>
}
export default TodolistEdit
