import { useState, type MouseEventHandler } from 'react';
import { IoChevronDown } from "react-icons/io5";

interface Props {
  list: string[];
}

export default function CustomSelect({ list }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (val: string) => {
    setValue(val);
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown border relative inline-block rounded-md py-1.5">
      <div onClick={handleClick} className="dropbtn bg-white text-black cursor-pointer z-1 px-2 h-[1.3rem] flex justify-between items-center"><span>{value}</span> <IoChevronDown /></div>
      <div id="myDropdown" className={`flex flex-col dropdown-content bg-white absolute z-10 w-full rounded-md mt-3 border h-48 overflow-auto ${isOpen ? 'block' : 'hidden'}`}>
        {list.map((item, index) => (
          <div key={index} className='px-4 py-2 hover:bg-neutral-100 cursor-pointer' onClick={() => handleSelect(item)}>{item}</div>
        ))}
      </div>
    </div>
  );
}


