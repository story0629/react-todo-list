import Item from "./Item";

// type listData is array content is string
// type typeListData = string[];

const List = ({ listData, deleteHandler }) => {
  return (
    <div className="list">
      {listData.length > 0 ? <h2 className="h2">List</h2> : ""}
      {
        // map
        listData.map((item: string) => {
          const { id, note, date, time } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note}
              date={date}
              time={time}
              deleteHandler={deleteHandler}
            ></Item>
          );
        })
      }
    </div>
  );
};

export default List;
