import React from "react";
import Restraunt from "./Components/Restraunt.js";
import CartcontextProvider from "./Context/CartContext.js";
function App() {
  return (
    <>
      <CartcontextProvider>
        <Restraunt />
      </CartcontextProvider>
    </>
  );
}

export default App;
