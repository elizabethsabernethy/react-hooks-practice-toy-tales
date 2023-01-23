import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, donateToy, likeToy}) {
  return (
    <div id="toy-collection">{
      toys.map((toy)=>{
        return <ToyCard key={toy.id} toy={toy} donateToy={donateToy} likeToy={likeToy}/>
      })
      }</div>
  );
}

export default ToyContainer;
