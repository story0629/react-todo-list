import { FiX } from "react-icons/fi";

const Item = ({id, note, date, time, deleteHandler}) => {
  const deleteItem = () => {
    deleteHandler(prevData => {
      return prevData.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
        <div>
          <p>{note}</p>
          <span>{date} {time}</span> 
        </div>
        <div className="remove">
          <FiX size={"2.5rem"} color="red" onClick={deleteItem} />
        </div>
    </div>
  )
}

export default Item
