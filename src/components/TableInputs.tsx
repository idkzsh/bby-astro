interface Props {
  list: Record<string, string>;
  columns: number;
}



export default function TableInputs({ columns, list }: Props) {

  console.log(columns)
  return (
    <div className="flex">  {/* Wrapper element to contain the mapped array */}
      {Array.from({ length: columns }).map((_, index) => (
        <div key={index} className="w-40 border-r">Column {index}BOOM</div>

      ))}
    </div>
  );
}
