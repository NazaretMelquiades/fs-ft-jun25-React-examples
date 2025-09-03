import React, { useState } from "react";
import WishForm from './WishForm';
import WishItems from './WishItems';

const WishList = () => {

  const [list,setList] = useState([]); 

  const addItem = (new_item) => setList([...list,new_item]);

  return <div>
    <WishForm add={addItem}/>
    <WishItems list={list}/>
  </div>;
};

export default WishList;
