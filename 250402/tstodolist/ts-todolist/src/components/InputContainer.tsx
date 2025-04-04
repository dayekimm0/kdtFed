import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ShowInputButton from "./ShowInputButton";

interface Props {
  readonly onAdd: (todo: string) => void;
}

function InputContainer({ onAdd }: Props) {
  const [showToDoInput, setShowToDoInput] = useState(false);

  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAdd} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
}

export default InputContainer;
