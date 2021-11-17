export default function Animal(props) {
  return (
    <article className="Animal">
      <h2>{props.fullname}</h2>
      <h3>Age</h3>
      <p>{props.age}</p>
    </article>
  );
}
