import React from "react";

// need to match specific glasses based on url
// glasses is all the glasses

const Details = ({ glasses }) => {

  const getGlasses = () => {
    
  }

  const { image, style, maker } = this.getGlasses();
    
  return (
    <>
      <img className="card-img-top" src={image} />
      <div className="card-body">
      <h3>{ style }</h3>
        <h4>{ maker }</h4>
      </div>
    </>
  );
}

export default Details;
