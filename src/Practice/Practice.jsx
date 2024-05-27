import { useState } from "react";

//#1
// function App() {
//   const [count, setCount] = useState(0);

//   const plusCount = () => {
//     setCount(count + 1);
//   };

//   const minusCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={minusCount}>-</button>
//       Count: {count}
//       <button onClick={plusCount}>+</button>
//     </div>
//   );
// }

//#2
// function App() {
//   const [isDark, setIsDark] = useState(false);

//   const changeMode = () => {
//     setIsDark(!isDark);
//   };
//   return (
//     <div
//       style={{
//         backgroundColor: isDark ? "black" : "white",
//         color: isDark ? "white" : "black",
//       }}
//     >
//       {isDark ? "다크모드" : "화이트모드"}
//       <button onClick={changeMode}>change</button>
//     </div>
//   );
// }

export default App;
