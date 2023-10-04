import { useState } from "react";
import { child } from "./Child";

export default function App() {
  const [show, setShow] = useState(false);

  const childComponent = show ? child : null;

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}
