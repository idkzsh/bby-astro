interface Props {
  list: Record<string, string>;
}

export default function TableHeaders({ list }: Props) {
  return (
    <div className="flex flex-col w-[160px]">
      <div className="h-4 border-r border-b text-xs text-center font-bold">Attribute</div>
      {
        Object.entries(list).map(([key]) => (
          <div className="flex h-10 bg-neutral-50 px-2 border-r border-b text-xs font-bold items-center py-4">
            {key}
          </div>
        ))
      }
    </div>
  )
}
