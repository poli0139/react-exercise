import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);
  function minus() {
    setAmount((oldAmount) => {
      if (amount > 0) {
        return oldAmount - 1;
      } else {
        return 0;
      }
    });
  }

  function plus() {
    setAmount((oldAmount) => oldAmount + 1);
  }

  // const data = ["class", "kids", "people", "girls"];
  // const newArray = data.map((message) => <TestComponent greeting={message} />);
  return (
    <article className="Product">
      <h2>{props.productdisplayname}</h2>
      <div className="productDetails">
        <h3>Product details</h3>
        <h4>{props.price}</h4>
      </div>
      <button onClick={minus}>-</button>
      {amount}
      <button onClick={plus}>+</button>
    </article>
  );
}
<TestComponent greeting="class" />;
function TestComponent(props) {
  return <p>Hi {props.greeting}</p>;
}
