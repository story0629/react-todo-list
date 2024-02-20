import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ addHandler }) => {

  const addItem = () => {
    addHandler((prevData) => {      
      return [{
        id: v4(),
        note,
        date,
        time
      },
      ...prevData]
    });
  }

  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="edit">
        <h2 className="h2">備忘錄</h2>
        <p>記事：</p>
        <input type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} />
        <p>日期：</p>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}  /> /
        <p>時間：</p>
        <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}  />
        <button className="add" onClick={addItem}>新增</button>
    </div>
  )
}

export default Edit
