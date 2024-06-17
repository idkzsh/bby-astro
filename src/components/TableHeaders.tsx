interface Props {
  list: Record<string, string>;
}

export default function TableHeaders({ list }: Props) {
  return (
    <div className="flex flex-col w-48 gap-0.5">
      {
        Object.entries(list).map(([key, val]) => (
          <div className="flex h-10 bg-neutral-50 rounded-md text-xs font-bold items-center px-2 py-4 w-[160px]">
            {key}
          </div>
        ))
      }
    </div>
  )
}
