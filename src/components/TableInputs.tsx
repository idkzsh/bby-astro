interface inputObj {
  name: string;
  type:
  | "text"
  | "password"
  | "number"
  | "checkbox"
  | "radio"
  | "select"
  | "date";
  maxLen: number;
  minLen: number;
  step: number;
  required: boolean;
  min: number;
  max: number;
  options: object;
}

interface Props {
  formName: string;
  columns: number;
  data: inputObj[];
}

const today = new Date().toISOString().split("T")[0];

export default function TableInputs({ columns, data }: Props) {
  return (
    <form className="flex" action="/compliance" method="POST" id="setupForm">
      {
        Array.from({ length: columns }).map((_, index) => (
          <>
            <input type="hidden" name="columns" value={columns} />
            <div className="w-40">
              <div className="h-4 text-xs text-center font-bold border-b border-r">
                SKU {index + 1}
              </div>
              {data.map((item) => (
                <div className="flex h-10 border-b border-r justify-center items-center text-sm">

                  {item.type === "text" && (
                    <input
                      className="w-[80%] border bg-background h-6 text-sm"
                      name={item.name + `-${index}`}
                      id={item.name + `-${index}`}
                      type={item.type}
                      required={item.required}
                      minLength={item.minLen}
                      maxLength={item.maxLen}
                    />
                  )}
                  {item.type === "number" && (
                    <input
                      className="w-[80%] border bg-background h-6 text-sm"
                      name={item.name + `-${index}`}
                      id={item.name + `-${index}`}
                      type={item.type}
                      step={item.step}
                      max={item.max}
                      required={item.required}
                    />
                  )}
                  {item.type === "select" && (
                    <select
                      name={item.name + `-${index}`}
                      id={item.name + `-${index}`}
                      className="w-[80%] border bg-background h-6 text-sm"
                      required={item.required}

                    >
                      <option />
                      {Object.entries(item.options).map(([key, val]) => (
                        <option value={key}>{val}</option>
                      ))}
                    </select>
                  )}
                  {item.type === "date" && (
                    <input
                      className="w-[80%] border bg-background h-6 text-sm text-primary"
                      type="date"
                      min={today}
                      name={item.name + `-${index}`}
                      id={item.name + `-${index}`}
                      required={item.required}
                      pattern="\d{4}-\d{2}-\d{2}"
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        ))
      }
    </form>
  );
}
