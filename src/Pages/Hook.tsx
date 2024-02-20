import Edit from '../Components/Edit'
import List from '../Components/List'
import { useState, useEffect } from 'react';
import './Pages.css'

const Hook = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('data') || '[]');
    console.log("🚀 ~ Hook ~ data:", data)
    
  }, [data])

  return (
    <div className="app">
        <h1 className="h1">使用 React Hook 開寫</h1>
        <Edit addHandler={setData }/>
        <List listData={data} deleteHandler={setData} />
    </div>
  )
}

export default Hook
