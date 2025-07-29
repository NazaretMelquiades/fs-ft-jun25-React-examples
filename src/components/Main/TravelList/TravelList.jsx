import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TravelItem from './TravelItem'

const TravelList = () => {
  const datos = [
    {
      title: "Viaje a la playa",
      description: "Disfruta de unas vacaciones en la playa",
      price: 100,
      img_url: "https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg"
    },
    {
      title: "Viaje a la montaña",
      description: "Escápate a la montaña y disfruta de la naturaleza",
      price: 150,
      img_url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
    },
    {
      title: "Viaje a la ciudad",
      description: "Descubre las maravillas de la ciudad",
      price: 200,
      img_url: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg"
    },
    {
      title: "Viaje a la selva",
      description: "Aventura en la selva",
      price: 250,
      img_url: "https://png.pngtree.com/background/20230616/original/pngtree-lush-and-tropical-rainforest-picture-image_3622369.jpg"
    }
  ];

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: ""
  });


  const paintData = () => datos.map((item,index)=> <TravelItem data={item} key={uuidv4()}/>)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(e.target.title.value);
    console.log(e.target.price.value);
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
