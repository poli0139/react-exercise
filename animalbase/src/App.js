import "./App.css";
import AnimalList from "./components/AnimalList";

function App() {
  const animals = [
    {
      fullname: "Mandu the amazing cat",
      age: 9,
    },
    {
      fullname: "Mia the black cat",
      age: 9,
    },
    {
      fullname: "Leeloo the growing dog",
      age: 1,
    },
    {
      fullname: "Toothless the trained dragon",
      age: 14,
    },
    {
      fullname: "ScoobyDoo the wondering dog",
      age: 58,
    },
    {
      fullname: "Horsey the horsing horse",
      age: 10,
    },
  ];
  return (
    <div className="App">
      <section>
        <h1>All animals</h1>
        <section className="AnimalList">
          <AnimalList animals={animals} />
        </section>
      </section>
    </div>
  );
}

export default App;
