import React from "react";

const Glasses = ({ glasses }) => {

  const { image, style, maker } = glasses;

  return (
    <>
      <div className="col col-md-3">
        <div className="card">
          <img className="card-img-top" src={ image } />
          <div className="card-body">
            <h3>{ style }</h3>
            <h4>{ maker }</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Glasses;
