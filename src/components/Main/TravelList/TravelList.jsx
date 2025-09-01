import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TravelItem from './TravelItem'
import data from './data.js'; // Importar array de datos iniciales 

const TravelList = () => {

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: ""
  });
  
  // Estado inicial array de destinos
  // Estado --> items
  const [items,setItems] = useState(data); // [{},{},{},{}] --> []

  const paintData = () => items.map((item,index)=> <TravelItem data={item} remove={()=>removeItem(index)} key={uuidv4()}/>)

  // new_item --> objeto a añadir a la lista
  const addItem = (new_item) => setItems([...items,new_item]);

  const removeAllItems = () => setItems([]);
  const resetItems = () => setItems(data);
  const removeItem = (i) => {
    const answer = confirm("quieres borrar el elemento?");
    if(answer){
      const remainingItems = items.filter((item,index)=> index!==i);
      setItems(remainingItems); //carga el estado con los items restantes
      alert("Destino borrado");
    }
    else{
      alert("operacíon anulada");
      return;
    }
  };


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const title = e.target.title.value;
    const price = e.target.price.value;
    console.log(title);
    console.log(price);
    alert(title+"-"+price);

    // values --> estado actual de datos del form
    addItem(values); // Añade nuevo destino en el estado
  
    // POST a una API
    //...
  };


  return <section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" onChange={handleChange} /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" onChange={handleChange} /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="img_url" onChange={handleChange} /><br />
       
       {values.title && values.description && values.price>0 && values.img_url ?
       <button type="submit">Crear destino</button>:
       <b>Rellena todos los campos para poder enviar</b>
       }
      </form>

      <button onClick={removeAllItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>


            {paintData()}

            {/* Comunicación por "props" entre componentes */}
            {/* <TravelItem data={datos[0]}/>
            <TravelItem data={datos[1]}/>
            <TravelItem data={datos[2]}/>
            <TravelItem data={datos[3]}/> */}

            {/* <TravelItem title="bahamas2" price="21"/>
            <TravelItem title="bahamas3" price="22"/>
            <TravelItem title="bahamas4" price="23"/>
            <TravelItem title="bahamas5" price="24"/> */}
    </section>;
};

export default TravelList;
