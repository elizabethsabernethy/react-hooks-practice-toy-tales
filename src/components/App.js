import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then((resp)=>resp.json())
    .then((toys)=>setToys(toys))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy){
      setToys([...toys, newToy]);
  }

  function donateToy(deletedToy){
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);
    setToys(updatedToys);
  }

  function likeToy(updatedToy){
    const updatedToys = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={donateToy} likeToy={likeToy}/>
    </>
  );
}

export default App;
