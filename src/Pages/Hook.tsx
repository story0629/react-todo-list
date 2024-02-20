import Edit from '../Components/Edit'
import List from '../Components/List'
import { useState, useEffect } from 'react';
import './Pages.css'

const Hook = () => {
  return (
    <div className="app">
        <h1 className="h1">使用 React Hook 開寫</h1>
        <Edit />
        <List />
    </div>
  )
}

export default Hook
