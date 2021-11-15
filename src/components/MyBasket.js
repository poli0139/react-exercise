export default function MyBasket(props) {
  return (
    <>
      <h4>Number of items</h4>
      <p>{props.basket.length}</p>
      <h3>Price</h3>
    </>
  );
}
