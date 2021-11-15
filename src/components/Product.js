export default function Product(props) {
  return (
    <article className="Product">
      <h2>{props.productdisplayname}</h2>
      <div className="productDetails">
        <h3>Product details</h3>
        <h4>{props.price}</h4>
      </div>
    </article>
  );
}
