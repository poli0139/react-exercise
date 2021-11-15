import Product from "./Product";

export default function ProductList(props) {
  return (
    <>
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
    </>
  );
}
