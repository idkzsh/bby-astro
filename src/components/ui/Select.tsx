import { useState } from 'react';

interface Props {
  list: string[];
}

export default function Select({ list }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Correct the event type here
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen); // Toggle the visibility of the dropdown
    console.log(e); // Now should correctly log the event
  }

  return (
    <div className="dropdown">
      <button onClick={handleClick} className="dropbtn">Dropdown</button>
      <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {list.map((item, index) => (
          <a key={index} href="#">{item}</a>
        ))}
      </div>
    </div>
  );
}
