import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
  let basket = [];
  return (
    <div className="App">
      <Nav />
      <section>
        <h1>Product list</h1>
        <section className="ProductList">
          <ProductList {...product} />
        </section>
      </section>
      <Basket basket={basket} />
    </div>
  );
}

export default App;
