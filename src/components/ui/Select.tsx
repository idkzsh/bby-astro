import { useState } from 'react';

interface Props {
  list: string[];
}

export default function Select({ list }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Correct the event type here
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen); // Toggle the visibility of the dropdown
    console.log(isOpen); // Now should correctly log the event
  }

  return (
    <div className="dropdown border relative inline-block rounded-md">
      <button onClick={handleClick} className="dropbtn bg-transparent text-black cursor-pointer">Dropdown</button>
      <div id="myDropdown" className={`flex flex-col dropdown-content absolute z-[1] w-full rounded-md mt-1 border ${isOpen ? 'block' : 'hidden'}`}>
        {list.map((item, index) => (
          <a key={index} href="#" className='px-4 py-2 hover:bg-neutral-100'>{item}</a>
        ))}
      </div>
    </div>
  );
}


