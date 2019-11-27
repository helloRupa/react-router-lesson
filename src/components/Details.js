import React from "react";

// need to match specific glasses based on url
// glasses is all the glasses
// this component renders before state is set in App (wait for mount)

const Details = ({ glasses, match }) => {

  // alternativley can incorporate default props
  const defaultGlasses = {
    image: '',
    style: 'Loading',
    maker: 'Still Loading'
  }

  const getGlasses = () => (
    glasses.find(glass => glass.id === parseInt(match.params.id, 10))
  );

  const { image, style, maker } = (glasses.length > 0) ? getGlasses() : defaultGlasses;
    
  return (
    <>
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
      <h3>{ style }</h3>
        <h4>{ maker }</h4>
      </div>
    </>
  );
}

export default Details;
