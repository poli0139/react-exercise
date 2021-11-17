import Animal from "./Animal";
export default function AnimalList(props) {
  const mapped = props.animals.map((animal) => (
    <Animal key={animal.fullname} {...animal} />
  ));

  return <>{mapped}</>;
}
