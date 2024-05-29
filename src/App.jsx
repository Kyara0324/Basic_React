import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="button-group">
          <button onClick={minusCount}>-</button>
          Count: {count}
          <button onClick={plusCount}>+</button>
        </div>
        <button onClick={resetCount}>reset</button>
      </div>
    </Fragment>
  );
}

export default App;
