import React from "react";

function ToyCard({toy, donateToy, likeToy}) {

function handleToyDonation(){
  fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
  })
  .then((resp) => resp.json())
  .then(() => donateToy(toy))
}

function handleLikeToy(){
  fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         likes: toy.likes+=1
      }),
    })
      .then((r) => r.json())
      .then((updatedToy) => likeToy(updatedToy));
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeToy} className="like-btn">Like {"<3"}</button>
      <button onClick={handleToyDonation} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
