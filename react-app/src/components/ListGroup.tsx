
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem }: Props) {
    
  const [selectedIndex, setSelectedIndex] = useState(-1);
//   const arr= useState(-1);
//   arr[0] // variable (selectedIndex)
//   arr[1] // updater function

  return (
    <>
      <h1>{heading}</h1>
      {/* { items.length === 0 ? <p>No item found</p> : null } */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? 'list-group-item active' : 'list-group-item' }    //"list-group-item active" 
          key={item} onClick={() => { setSelectedIndex(index);
            onSelectItem(item)
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
