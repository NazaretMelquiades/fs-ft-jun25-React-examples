import React from "react";
// import './TravelItem.css'

// const TravelItem = ({title,price}) => {
const TravelItem = ({data,remove}) => {
  
  const {title,description,price,img_url} = data;
  
  return <article>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{price}</p>
          <img className="picture_item" src={img_url} alt={title} />
          <button onClick={remove}>Borrar</button>
        </article>;
};

export default TravelItem;
